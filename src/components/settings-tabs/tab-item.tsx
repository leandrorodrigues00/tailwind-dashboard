import { TabsTrigger } from '@/components/ui/tabs'

interface TabItemProps {
  title: string
  value: string
}

export function TabItem({ title, value }: TabItemProps) {
  return (
    <TabsTrigger className="group" value={value}>
      <span>{title}</span>

      <div className="absolute -bottom-px left-0 right-0 hidden h-0.5 bg-violet-700 group-data-[state=active]:block" />
    </TabsTrigger>
  )
}
