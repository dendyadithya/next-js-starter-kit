import React from 'react'

import Menu from './components/Menu'

export default function Sidebar() {
  return (
    <div className="col-span-1 flex max-w-[250px] flex-col overflow-y-auto pt-2">
      <Menu />
    </div>
  )
}
