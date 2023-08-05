import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { timeZones } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input, InputPrefix, InputRoot } from '@/components/ui/input'
import * as FileInput from '@/components/ui/input-file'
import { Label } from '@/components/ui/label'
import * as Select from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { CountrySelect } from '@/components/country-select'
import { SettingsTabs } from '@/components/settings-tabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex  items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <Label htmlFor="firstName">Name</Label>

            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <Input id="firstName" defaultValue="Leandro" />
              </InputRoot>

              <InputRoot>
                <Input defaultValue="Rodrigues" />
              </InputRoot>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="email">Email address</Label>

            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <Input
                id="email"
                type="email"
                placeholder="leandro.rodrigues00@hotmail.com"
              />
            </InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="photo">
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </Label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="role">Role</Label>
            <InputRoot>
              <Input id="role" defaultValue="CTO" />
            </InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="country">Country</Label>

            <CountrySelect />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="timezone">Timezone</Label>

            <Select.Root name="timezone">
              <Select.Trigger>
                <Select.Value placeholder="Select your timezone..." />
              </Select.Trigger>

              <Select.Content>
                {timeZones.map((timeZone) => (
                  <Select.Item key={timeZone.value} value={timeZone.value}>
                    <Select.ItemText>
                      {timeZone.name}
                      <span className="text-sm text-zinc-500">
                        {timeZone.offset}
                      </span>
                    </Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="bio">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </Label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select.Root defaultValue="normal">
                  <Select.Trigger>
                    <Select.Value />
                  </Select.Trigger>

                  <Select.Content>
                    <Select.Item value="normal">
                      <Select.ItemText>Normal text</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="md">
                      <Select.ItemText>Markdown</Select.ItemText>
                    </Select.Item>
                  </Select.Content>
                </Select.Root>

                <div className="flex items-center gap-1">
                  <Button variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Link className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <List className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="projects">
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </Label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
