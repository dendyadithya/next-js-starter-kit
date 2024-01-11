import { motion } from 'framer-motion'
import React from 'react'

import { SIDEBAR_ITEMS } from '@/common/constants/layout'

import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <div className="flex flex-col space-y-2">
      {SIDEBAR_ITEMS.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <MenuItem
            title={item.title}
            icon={item.icon}
            ishavechild={item.ishavechild}
            isParent={item.isParent}
            path={item.path}
          >
            {item.children?.map((child, index) => (
              <MenuItem
                key={index}
                title={child.title}
                icon={child.icon}
                ishavechild={child.ishavechild}
                path={child.path}
              >
                {child.children?.map((child, index) => (
                  <MenuItem
                    key={index}
                    title={child.title}
                    icon={child.icon}
                    ishavechild={child.ishavechild}
                    path={child.path}
                  />
                ))}
              </MenuItem>
            ))}
          </MenuItem>
        </motion.div>
      ))}
    </div>
  )
}
