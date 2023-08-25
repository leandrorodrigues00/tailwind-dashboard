'use client'

import { ComponentProps } from 'react'
import * as Select from '@radix-ui/react-select'

import {
  ScrollArea,
  ScrollBar,
  ScrollViewport,
} from '@/components/ui/scroll-area'

export type ContentProps = ComponentProps<typeof Select.Content>

export function Content({ children, ...props }: ContentProps) {
  return (
    <Select.Portal>
      <Select.Content
        {...props}
        sideOffset={8}
        side="bottom"
        position="popper"
        className="group z-10 w-[var(--radix-select-trigger-width)] animate-slideUpAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white will-change-[opacity,transform] dark:border-zinc-700 dark:bg-zinc-800"
      >
        <ScrollArea type="auto">
          <Select.Viewport className="max-h-[300px]" asChild>
            <ScrollViewport>{children}</ScrollViewport>
          </Select.Viewport>

          <ScrollBar className="invisible flex w-2.5 touch-none select-none bg-zinc-100 p-0.5 group-hover:visible dark:bg-zinc-700" />
        </ScrollArea>
      </Select.Content>
    </Select.Portal>
  )
}
