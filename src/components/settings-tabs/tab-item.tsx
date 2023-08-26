import { TabsTrigger } from '@/components/ui/tabs'

interface TabItemProps {
  title: string
  value: string
}

export function TabItem({ title, value }: TabItemProps) {
  return (
    <TabsTrigger className="group outline-none" value={value}>
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      <div className="absolute -bottom-px left-0 right-0 hidden h-0.5 bg-violet-700 group-data-[state=active]:block dark:bg-violet-300" />
    </TabsTrigger>
  )
}
