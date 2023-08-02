'use client'

import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import { TabItem } from '@/components/settings-tabs/tab-item'

export function SettingsTabs() {
  return (
    <Tabs>
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
      <TabsContent value="my-details">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="profile">Change your password here.</TabsContent>
    </Tabs>
  )
}
