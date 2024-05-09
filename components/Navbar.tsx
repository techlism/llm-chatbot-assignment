import { Camera, HeartIcon, MessageSquareMoreIcon, MountainIcon, Users2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return(
        <header className="w-full">
        <div className="flex flex-row justify-between h-16">
          <Link className="flex items-center justify-start" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Secret Desires</span>
          </Link>
          <nav className="grid grid-cols-4 items-center gap-2">
            <Button className="text-sm border-b-3 border-primary" variant={'outline'}>
                <MessageSquareMoreIcon size={17} className="mr-2"/>
                Chat
            </Button>
            <Button className="text-sm" variant={'outline'} >
                <Users2 size={17} className="mr-2" />
                My Characters
            </Button>
            <Button className="text-sm" variant={'outline'}>
                <Camera size={17} className="mr-2" />
                Generate Images 
            </Button>
            <Button className="text-sm">
                <HeartIcon size={17} className="mr-2" />
                Create Character
            </Button>
          </nav>
        <Link className="flex items-center justify-end" href={'#'}>
            <img
                alt="Avatar"
                className="rounded-full mr-2"
                height="32"
                src="https://avatars.githubusercontent.com/u/105585386?v=4"
                style={{
                aspectRatio: "32/32",
                objectFit: "cover",
                }}
                width="32"
            />
            <span className="font-medium">My Profile</span>
        </Link>
        </div>
      </header>
    )    
}