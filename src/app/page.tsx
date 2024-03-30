'use client'
import React from 'react'
import Cursor from '../components/cursor/cursor'

export default function Page() {
  return <div className='cursor-area h-screen w-screen bg-black'>
    <Cursor />
    <div className='h-full w-full text-7xl text-white flex items-center justify-center'>404 NOT FOUND</div>
  </div>
}