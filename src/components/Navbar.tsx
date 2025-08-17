import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div><nav>
          <div className="flex bg-amber-500 ">
             <Link href="/">
             <h1 className="px-6">HOME</h1>
             </Link>
             <Link href="/performance">
              <h1 className="px-6">performance</h1>
              </Link>
              <Link href="/reliablity">
              <h1 className="px-6">about</h1>
              </Link>
          </div>
        </nav></div>
  )
}

export default Navbar