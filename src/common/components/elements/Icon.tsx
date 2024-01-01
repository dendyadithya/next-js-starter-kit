'use client'

import { IconProps, Icon as Iconify } from '@iconify/react'

export const Icon = ({ icon, ...rest }: IconProps) => {
  return <Iconify icon={icon} fontSize="1.375rem" {...rest} />
}
