/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function ProfileCard() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/leandrorodrigues00.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Leandro Rodrigues
        </span>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
                leandro.rodrigues00@hotmail.com
              </span>
            </TooltipTrigger>
            <TooltipContent>leandro.rodrigues00@hotmail.com</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Button variant="ghost" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
