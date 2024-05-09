import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
import messageSchema from '@/lib/schema';
import mongoose from 'mongoose' ;

async function queryWithModel(message : string) {
    try {
        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
            model: "gryphe/mythomist-7b:free",
            messages: [
                { role: "user", content: message },
            ],
        }, {
            headers: {
                Authorization: `Bearer ${process.env.OPEN_ROUTER_KEY}`,
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}




let Message = mongoose.models.Message || mongoose.model('Message', messageSchema);


 async function connectToMongoDB() {
    try {
        const dbStatus = await mongoose.connect(process.env.MONGODB_URI as string);
        if(dbStatus.connection.readyState == 1) return true;
    } catch (error) {
        return error;
    }
}

 async function addToDB(message : string, type : string) {
    try {
        if(!message || !type) return;
        const status = await connectToMongoDB();
        if(!status || status instanceof Error) return status;
        const newMessage = new Message({
            type: type,
            message: message
        });
        await newMessage.save();
        return true;
    } catch (error) {
        return error ;   
    }
}

export async function POST(req : NextRequest){
    const  {message } = await req.json();
    try {
        if(!message || message === "") return NextResponse.json({"failure":"Please add a query"},{status : 400 });
        await addToDB(message,"User");

        const response  = await queryWithModel(message);   
        if(response?.choices?.[0].message){
            const contentString = response?.choices?.[0].message.content;
            await addToDB(contentString,"Model");
            return NextResponse.json({"reply" : contentString} ,{status : 200});
        }
        return NextResponse.json({"failure" : "Unable get response"},{status:500});
    } catch (error) {
        console.trace(error);
        return NextResponse.json({"error" : "Unable to process. Please try again later."},{status : 500})
    }
}