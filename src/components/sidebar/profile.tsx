/* eslint-disable @next/next/no-img-element */

import { LogOut } from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/leandrorodrigues00.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Leandro Rodrigues
        </span>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="truncate text-sm text-zinc-500">
                leandro.rodrigues00@hotmail.com
              </span>
            </TooltipTrigger>
            <TooltipContent>leandro.rodrigues00@hotmail.com</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}