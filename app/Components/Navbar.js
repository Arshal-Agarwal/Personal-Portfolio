import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex  list-none pr-10 pt-4 font-serif mb-4'>
      <p className='ml-40 mr-96 font-extrabold text-3xl'>Arshal.</p>
      <li className='mr-24 text-lg'><Link href="/">Home</Link></li>
      <li className='mr-24 text-lg'><Link href="/">Contact me</Link></li>
      <li className='mr-24 text-lg'><Link href="/">About me</Link></li>
      <li className='mr-24 text-lg'><Link href="/">Projects</Link></li>
    </div>
  )
}

export default Navbar
