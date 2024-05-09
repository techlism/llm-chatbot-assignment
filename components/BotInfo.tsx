
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GroupIcon, HeartIcon, MessageCircleIcon, PencilIcon } from "lucide-react"

export default function BotInfo() {
  return (
    <Card className="max-w-md rounded-lg shadow-md overflow-hidden border-2  rounded-tr-none rounded-br-none border-r-0 border-t-0">
      <div className="relative">
        <img
          alt="Profile banner"
          className="w-full h-56 object-cover"
          height="250"
          src="/anime_girl.jpeg"
          style={{
            aspectRatio: "400/250",
            objectFit: "cover",
          }}
          width="400"
        />
        <Avatar className="absolute -bottom-10 left-4">
          <AvatarImage alt="Jessica Anderson" src="" />
          <AvatarFallback>JA</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-12 pb-4 px-4">
        <h3 className="text-xl font-semibold">Jessica Anderson</h3>
        <p className="text-sm text-gray-500">@jessica-anderson-2</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircleIcon className="w-4 h-4 text-gray-400" />
            <span className="ml-1 text-xs text-gray-400">0</span>
            <HeartIcon className="w-4 h-4 text-gray-400 ml-3" />
            <span className="ml-1 text-xs text-gray-400">0</span>
            <GroupIcon className="w-4 h-4 text-gray-400 ml-3" />
            <span className="ml-1 text-xs text-gray-400">6</span>
          </div>
          <Button className="text-xs" size="sm" variant="outline">
            Make Character Public
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-sm mb-1">Who I Am</h4>
            <ul className="text-sm">
              <li><span className="font-semibold">Personality</span>
                <p>
                Caregiver
                </p>
              </li>
              <li>
                <span className="font-semibold">Work</span>
                <p>Yoga Instructor</p>
                </li>
              <li>
                <span className="font-semibold">Hobbies</span>
                <p>
                    Anime Fan
                </p>
              </li>
              <li>
                <span className="font-semibold">Relationship</span>
                <p>
                    Friend
                </p>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-sm mb-1">About Me</h4>
              <PencilIcon className="w-4 h-4" />
            </div>
            <p className="text-xs">
              21-year-old anime fanatic and yoga instructor. I binge-watch anime! Looking for someone to join me in
              downward dog and anime marathons. Fun fact: I can recite the entire script of my favorite anime movie from
              memory. Let&apos;s chat! 🐱 💕 🎀
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}