"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import ThemeToggleButton from "./ThemeToggleButton"

export default function MobileNavigationSheet() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent className="flex h-full max-w-[300px] flex-col justify-between">
        <ul className='mt-2 flex flex-col gap-1'>
          <li className="flex w-full border-b">
            <SheetClose asChild>
              <Link href='/' className={`${pathname === '/' && "text-primary"} w-full py-2 text-lg  font-medium`}>Home </Link>
            </SheetClose>
          </li>
          <li className="flex w-full border-b">
            <SheetClose asChild>
              <Link href='/blogs' className={`${pathname.indexOf("/blog") > -1 && "text-primary"} w-full py-2 text-lg font-medium`}>Blog </Link>
            </SheetClose>
          </li>
          <li className="flex w-full border-b">
            <SheetClose asChild>
              <Link href='/portfolio' className={`${pathname === '/portfolio' && "text-primary"} w-full py-2 text-lg font-medium`}>Portfolio </Link>
            </SheetClose>
          </li >
        </ul >

            <ThemeToggleButton/>
      </SheetContent>
    </Sheet>
  )
}
