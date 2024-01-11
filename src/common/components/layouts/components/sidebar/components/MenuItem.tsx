'use client'

import { useRouter } from 'next/navigation'

import { motion } from 'framer-motion'
import React from 'react'

import { Icon } from '@/common/components/elements/Icon'
import { Button } from '@/common/components/ui/button'
import { Collapsible, CollapsibleContent } from '@/common/components/ui/collapsible'
import { cn } from '@/common/libs/cn'

interface MenuItemProps {
  title: string
  icon: string
  path?: string
  isHttp?: boolean
  ishavechild: boolean
  isParent?: boolean
  children?: React.ReactNode
}

export default function MenuItem({ title, icon, isParent, children, ishavechild, path }: MenuItemProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const router = useRouter()

  const handleClickButton = () => {
    setIsOpen(!isOpen)
    path ? router.push(path) : null
  }

  return ishavechild ? (
    <Collapsible open={isOpen} className={cn('w-full', !isParent ? 'pl-[10px] pt-2' : '')}>
      <div className="relative flex flex-row items-center justify-between rounded-md border shadow hover:bg-accent">
        <Button
          variant="ghost"
          className={cn(
            'flex h-fit w-full items-center justify-between truncate rounded-md p-0 py-2 px-3 text-base font-medium capitalize hover:bg-transparent'
          )}
          onClick={handleClickButton}
        >
          <span className="flex flex-row items-center w-full justify-between">
            <span className="flex flex-row items-center space-x-2">
              <Icon icon={icon} className="mr-2 h-4 w-4 text-primary" />
              {title}
            </span>
            <Icon
              icon="tabler:chevron-up"
              className={cn('h-4 w-4 text-primary transition-all delay-200', isOpen ? 'rotate-0' : 'rotate-180')}
            />
          </span>
        </Button>
      </div>
      <CollapsibleContent className={cn('w-full', isOpen ? 'border-l border-slate-300' : '')}>
        {children}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <div className={cn('w-full', !isParent ? 'pl-[10px] pt-2' : '')}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex flex-row items-center justify-between rounded-md border shadow hover:bg-accent"
      >
        <Button
          variant="ghost"
          className="flex h-fit w-full items-center justify-between truncate rounded-md px-3 py-2 text-base font-medium capitalize hover:bg-transparent"
          onClick={handleClickButton}
        >
          <span className="flex flex-row items-center">
            <Icon icon={icon} className="mr-2 h-4 w-4 text-primary" />
            {title}
          </span>
        </Button>
      </motion.div>
    </div>
  )
}
