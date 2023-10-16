'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Test = () => {
  const [click, isClick] = useState(false)

  return (
    <div>
      <button className="text-3xl" type="button" onClick={() => isClick(!click)}>
        {click ? (<FiX />) : (<FiMenu />)}
      </button>
    </div>

  )
}

export default Test
