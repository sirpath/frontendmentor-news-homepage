'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const NavBars = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (

    <div className=" flex w-full items-center justify-center md:pt-7 lg:pt-14">
      <div className="flex w-full max-w-7xl items-center justify-between px-6 py-3">
        <div className="self-center">
          <Image width={50} height={20} src="./images/logo.svg" alt="logo" />
        </div>
        <div className="hidden md:block">
          <div className="flex gap-4 [&_a]:px-2">
            <Link className="hover:text-soft-red" href="/">Home</Link>
            <Link className="hover:text-soft-red" href="/">News</Link>
            <Link className="hover:text-soft-red" href="/">Popular</Link>
            <Link className="hover:text-soft-red" href="/">Trending</Link>
            <Link className="hover:text-soft-red" href="/">Categories</Link>
          </div>
        </div>
        <div className="md:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content z-10">
              <label htmlFor="my-drawer-4" className="btn swap drawer-button swap-rotate h-0 min-h-0 border-0 bg-transparent p-0">
                <input type="checkbox" />
                <Image onClick={handleClick} width={40} height={40} src={`${click ? './images/icon-menu-close.svg' : './images/icon-menu.svg'}`} alt="logo" />
              </label>
            </div>
            <div className="drawer-side">
              <ul className="menu min-h-full w-[70%] bg-base-200 p-4 text-base font-semibold text-hcolor [&_a]:py-3 [&_a]:pl-2">
                <Link className="mt-20 hover:text-soft-red" href="/">Home</Link>
                <Link className="hover:text-soft-red" href="/">News</Link>
                <Link className="hover:text-soft-red" href="/">Popular</Link>
                <Link className="hover:text-soft-red" href="/">Trending</Link>
                <Link className="hover:text-soft-red" href="/">Categories</Link>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBars
