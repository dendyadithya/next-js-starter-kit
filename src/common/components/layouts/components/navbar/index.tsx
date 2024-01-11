import React from 'react'

import AvatarProfile from './components/AvatarProfile'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'

export default function Navbar() {
  return (
    <header className="mb-4 flex w-full flex-row items-center">
      <Logo />
      <div className="ml-20 w-full">
        <SearchBar />
      </div>
      <AvatarProfile />
    </header>
  )
}
