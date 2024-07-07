'use client';
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export default function SideBar({user}: SiderbarProps) {
  const pathName = usePathname();
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/'
        className='mb-12 cursor-pointer items-center gap-2'>
          <Image src='/icons/logo.svg' width={34} height={34} alt='logo' />
        </Link>
        <h1>Horizon</h1>
      </nav>
      {sidebarLinks.map((item) => {
        const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`);
        return (
        <Link className={cn('sidebar-link', {'bg-bank-gradient': isActive})} href={item.route} key={item.label}>
          {item.label}
        </Link>
      )
      })}
    </section>
  )
}
