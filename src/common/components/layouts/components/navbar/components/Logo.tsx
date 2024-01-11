import Image from 'next/image'

import LogoRs from '@Public/img/rs_cideres.png'
import React from 'react'

export default function Logo() {
  return (
    <div className="w-full flex items-center space-x-2 h-[40px] max-w-[200px] rounded-md">
      <Image src={LogoRs} width={40} height={40} alt="logo" className="object-fill" />
      <div className="flex flex-col">
        <span className="text-base text-[#C73E43] font-semibold">
          <span className="text-[#8B8B8C]">RSUD</span> CIDERES
        </span>
        <span className="text-xs text-[#8B8B8C]">Smart Hospital</span>
      </div>
    </div>
  )
}
