'use client'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { SendIcon } from "lucide-react"
import Navbar from "@/components/Navbar"
import SentMessageRenderer from '../components/SentMessageRenderer';
import RecievedMessageRenderer from "@/components/RecievedMessageRenderer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import BotInfo from "./BotInfo"

type PathEnum = 'User' | 'Model';

type Message = {
  message: string;
  type: PathEnum;
};
export default function CompleteChat() {
        const [message,setMessage] = useState('');
        const [chat,setChat] = useState<Message[]>([]);
        async function handleChat(event : React.FormEvent<HTMLFormElement>) {
          event.preventDefault();
          const newUserMessage : Message = { message : message, type : 'User'};
          setMessage('');
          setChat((prev)=>[...prev,newUserMessage]);
          const response = await axios.post('/api/chat',{
            "message" : message
          });    
          if(response?.data?.reply){
            const newModelMessage : Message = { message : response.data.reply, type : 'Model'};
            setChat((prev)=>[...prev,newModelMessage]);
          }
        }
    
        const messagesEndRef = useRef<HTMLDivElement>(null); // Add type annotation to useRef

        useEffect(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, [chat]);        
        useEffect(()=>{
          async function fetchPreviousChat(){
            const response = await axios.get('/api/fetchMessages');
            if(response?.data.messages){
              const messages = response.data.messages;
              if(messages.length > 0){
                for(let i = 0; i < messages.length; i++){
                  const msg : Message = { message : messages[i].message, type : messages[i].type }
                  setChat((prev)=>[...prev, msg]);
                }
             }
            }
          }
          if(chat.length === 0){
            fetchPreviousChat();
          }
        },[])
        return (
          <main key="1" className="flex flex-col overflow-hidden mx-4">  
            <div className="grid w-full grid-cols-[300px_1fr] overflow-hidden">
             <BotInfo/>
              <div className="flex flex-col border-2 rounded-e-md">    
                <div className="flex-1">
                  <ScrollArea className="grid gap-4 h-[calc(100vh-9rem)] p-3">
                    {chat.map((msg,index)=>{
                      if(msg.type === 'User'){
                        return <SentMessageRenderer key={index+"sent_message"} message={msg.message} avatarSrc=""/>
                      }else{
                        return <RecievedMessageRenderer key={index+"recieved_message"} message={msg.message} avatarSrc=""/>
                      }
                    })}
                    <div ref={messagesEndRef} />
                  </ScrollArea>
                </div>
                <div className="border-t px-4 py-3 dark:border-gray-800">
                  <form className="flex items-center gap-2" onSubmit={(e)=>handleChat(e)}>
                    <Input className="flex-1" placeholder="Type your message..." type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />
                    <Button type="submit">
                      <SendIcon className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )        
}