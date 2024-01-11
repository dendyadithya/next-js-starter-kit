import React from 'react'

import { Icon } from '@/common/components/elements/Icon'
import { Input } from '@/common/components/ui/input'
import { Label } from '@/common/components/ui/label'

export default function SearchBar() {
  return (
    <div className="flex w-full max-w-4xl flex-row items-center rounded-md border focus-within:outline-none focus-within:ring-1 focus-within:ring-ring">
      <Label htmlFor="search-bar">
        <Icon icon="tabler:search" className="ml-3 text-sm" />
      </Label>
      <Input id="search-bar" placeholder="Search..." className="border-none focus-visible:ring-0 h-10" />
    </div>
  )
}
