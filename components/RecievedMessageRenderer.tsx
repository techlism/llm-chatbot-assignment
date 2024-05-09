import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { CopyIcon, EditIcon, PlayCircle, RefreshCcw, ThumbsDown, ThumbsUp, Volume2Icon } from "lucide-react"
export default function RecievedMessageRenderer({message, avatarSrc}:{message:string, avatarSrc : string}){
    return(
        <div className="grid gap-1 text-sm">
            <div className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage alt="John Doe" src={avatarSrc} />
                    <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-primary p-3 text-white max-w-[50%] rounded-tl-sm">
                    <p>{message}</p>
                </div>
            </div>
            <div className="flex items-center gap-1 ml-11">
                <Button className="px-2 py-1" variant={'ghost'} >
                    <Volume2Icon size={15}/>                    
                </Button>    
                <Button className="px-2 py-1" variant={'ghost'} >
                    <ThumbsUp size={15}/>
                </Button>
                <Button className="px-2 py-1" variant={'ghost'} >
                    <ThumbsDown size={15}/>
                </Button>
                <Button className="px-2 py-1" variant={'ghost'} >
                    <RefreshCcw size={15}/>
                </Button>      
                <Button className="px-2 py-1" variant={'ghost'} >
                    <PlayCircle size={15}/>
                </Button>      
                <Button className="px-2 py-1" variant={'ghost'} >
                    <CopyIcon size={15}/>
                </Button>            
            </div>
      </div>        
    )
}