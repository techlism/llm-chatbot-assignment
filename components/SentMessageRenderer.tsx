import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { CopyIcon, EditIcon } from "lucide-react"
export default function SentMessageRenderer({message, avatarSrc}:{message:string, avatarSrc : string}){
    return(
        <div className="grid gap-1 text-sm">
            <div className="flex items-center gap-2 justify-end">
                <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800 max-w-[50%] rounded-br-sm">
                    <p>{message}</p>
                </div>
                <Avatar>
                    <AvatarImage alt="John Doe" src={avatarSrc} />
                    <AvatarFallback>C</AvatarFallback>
                </Avatar>                
            </div>
            <div className="flex items-center gap-1 mr-11 justify-end">
                    <Button variant={'ghost'} className="px-2 py-1">
                        <CopyIcon size={15}/>                    
                    </Button>    
                    <Button variant={'ghost'} className="px-2 py-1">
                        <EditIcon size={15}/>
                    </Button>
            </div>                
      </div>        
    )
}