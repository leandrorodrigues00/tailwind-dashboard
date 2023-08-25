import {
  ScrollArea,
  ScrollBar,
  ScrollThumb,
  ScrollViewport,
} from '@/components/ui/scroll-area'
import { Tabs, TabsList } from '@/components/ui/tabs'

import { TabItem } from './tab-item'

export function SettingsTabs() {
  return (
    <Tabs defaultValue="my-details">
      <ScrollArea className="w-full" type="scroll">
        <ScrollViewport className="w-full overflow-x-scroll">
          <TabsList>
            <TabItem value="my-details" title="My details" />
            <TabItem value="profile" title="Profile" />
            <TabItem value="password" title="Password" />
            <TabItem value="team" title="Team" />
            <TabItem value="plan" title="Plan" />
            <TabItem value="billing" title="Billing" />
            <TabItem value="email" title="Email" />
            <TabItem value="notifications" title="Notifications" />
            <TabItem value="integrations" title="Integrations" />
            <TabItem value="api" title="API" />
          </TabsList>
        </ScrollViewport>
        <ScrollBar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollThumb />
        </ScrollBar>
      </ScrollArea>
    </Tabs>
  )
}
