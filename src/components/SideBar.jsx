import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {navMenuItems} from "../data.json"

const SideBar = () => {
  return (
    <div className="drawer-side md:drawer-end z-50">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <aside className="min-h-full bg-white p-6 min-w-72">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="">
                <AiOutlineClose className='text-darkGrayishBlue hover:text-veryDarkBlue duration-75' size={22} />
            </label>

            <main className='mt-8 flex flex-col gap-4'>
                {navMenuItems.map(menuItem => {
                    return (
                        <a key={menuItem} className='font-bold text-lg capitalize hover:text-darkGrayishBlue duration-75 cursor-pointer'>{menuItem}</a>
                    )
                })}
            </main>
        </aside>
    </div>
  )
}

export default SideBar
