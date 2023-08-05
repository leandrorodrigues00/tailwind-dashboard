import { Cog, LifeBuoy, Search } from 'lucide-react'

import { Input, InputPrefix, InputRoot } from '@/components/ui/input'
import { Logo } from '@/components/sidebar/logo'
import { ProfileCard } from '@/components/sidebar/profile-card'
import { SidebarNav } from '@/components/sidebar/sidebar-nav'
import { SidebarNavItem } from '@/components/sidebar/sidebar-nav-Item'
import { UsedSpaceWidget } from '@/components/sidebar/used-space-widget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

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

        <div className="h-px bg-zinc-200" />

        <ProfileCard />
      </div>
    </aside>
  )
}
