
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

async function connectToMongoDB() {
    try {
        const dbStatus = await mongoose.connect(process.env.MONGODB_URI as string);
        if(dbStatus.connection.readyState == 1) return true;
    } catch (error) {
        return error;
    }
}

export async function GET(req: NextRequest) {
    try {
        const status = await connectToMongoDB();
        if (!status) return NextResponse.json({ failure: "Unable to connect to database" }, { status: 500 });
        const Message = mongoose.model("Message");
        const messages = await Message.find();        
        return NextResponse.json({ messages }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Unable to process. Please try again later." }, { status: 500 });
    }
}