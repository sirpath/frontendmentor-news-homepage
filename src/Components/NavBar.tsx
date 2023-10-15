import Image from 'next/image'
import Link from 'next/link'

const NavBars = () => (
  <div className="flex w-full justify-between px-6 py-3">
    <div className="self-center">
      <Image width={50} height={20} src="/images/logo.svg" alt="logo" />
    </div>
    <div className="hidden md:block">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/">News</Link>
        <Link href="/">Popular</Link>
        <Link href="/">Trending</Link>
        <Link href="/">Categories</Link>
      </div>
    </div>
    <div className="md:hidden">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="btn drawer-button border-0 bg-transparent"><Image width={40} height={40} src="/images/icon-menu.svg" alt="logo" /></label>
        </div>
        <div className="drawer-side">

          <ul className="menu min-h-full w-[70%] bg-base-200 p-4 text-base font-semibold text-hcolor [&_a]:py-3 [&_a]:pl-2">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay py-10"><Image width={40} height={40} src="/images/icon-menu-close.svg" alt="logo" /></label>
            <Link href="/">Home</Link>
            <Link href="/">News</Link>
            <Link href="/">Popular</Link>
            <Link href="/">Trending</Link>
            <Link href="/">Categories</Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default NavBars
