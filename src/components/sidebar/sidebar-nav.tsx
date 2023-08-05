import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'

import { SidebarNavItem } from '@/components/sidebar/sidebar-nav-Item'

export function SidebarNav() {
  return (
    <nav className="space-y-0.5">
      <SidebarNavItem title="Home" icon={Home} />
      <SidebarNavItem title="Dashboard" icon={BarChart} />
      <SidebarNavItem title="Projects" icon={SquareStack} />
      <SidebarNavItem title="Tasks" icon={CheckSquare} />
      <SidebarNavItem title="Reporting" icon={Flag} />
      <SidebarNavItem title="Users" icon={Users} />
    </nav>
  )
}
