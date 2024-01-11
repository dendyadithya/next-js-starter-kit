import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/common/components/ui/avatar'

export default function AvatarProfile() {
  return (
    <div className="flex ml-4 justify-end">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
