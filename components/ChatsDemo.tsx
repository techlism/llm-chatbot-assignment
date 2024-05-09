import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
export default function ChatsDemo() {
    return (         
        <div className="bg-gray-100 dark:border-gray-800 dark:bg-gray-900 border-t-2 border-r-1 rounded-md rounded-e-none">
        <div className="h-[calc(100vh-4rem)] overflow-auto">
          <div className="space-y-2 p-4">
            <div className="flex items-center justify-between rounded-md bg-white p-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="Jane Doe" src="" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <div className="font-bold">Jane Doe</div>
                  <div className="text-gray-500 dark:text-gray-400">Hey, how's it going?</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">2:34 PM</div>
            </div>
            <div className="flex items-center justify-between rounded-md bg-white p-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="Bob Smith" src="" />
                  <AvatarFallback>BS</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <div className="font-bold">Bob Smith</div>
                  <div className="text-gray-500 dark:text-gray-400">Did you get the file I sent?</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">11:23 AM</div>
            </div>
            <div className="flex items-center justify-between rounded-md bg-white p-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="Sarah Lee" src="" />
                  <AvatarFallback>SL</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <div className="font-bold">Sarah Lee</div>
                  <div className="text-gray-500 dark:text-gray-400">Let's discuss the project later.</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Yesterday</div>
            </div>
          </div>
        </div>
      </div>
    )
}