import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Input, InputPrefix, InputRoot } from '@/components/ui/input'
import { Logo } from '@/components/sidebar/logo'
import { ProfileCard } from '@/components/sidebar/profile-card'
import { SidebarNav } from '@/components/sidebar/sidebar-nav'
import { SidebarNavItem } from '@/components/sidebar/sidebar-nav-Item'
import { UsedSpaceWidget } from '@/components/sidebar/used-space-widget'

import { Button } from '../ui/button'

export function Sidebar() {
  return (
    <Collapsible className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <CollapsibleTrigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <Input placeholder="Search" />
        </InputRoot>

        <SidebarNav />

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <SidebarNavItem title="Support" icon={LifeBuoy} />
            <SidebarNavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <ProfileCard />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
