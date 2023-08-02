// 'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function Home() {
  // const router = useRouter()
  return (
    <div>Home

      <Link href={'/data'} >
      

      <h1 className='text-orange-700'>Data</h1>
      </Link>

      <Link href={'/form'} >
      

      <h1 className='text-orange-700'>FORM</h1>
      </Link>
    </div>

  )
}

export default Home