import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import {navMenuItems, cart} from "../data.json"
import HeaderCart from './HeaderCart'

const Header = () => {
  return (
    <header className='border-b border-b-grayishBlue max-md:px-4 bg-white max-md:py-4 md:mt-4 flex max-lg:justify-between w-full md:items-start max-md:items-center max-md:shadow-lg'>
        <h1 className="font-bold text-3xl flex items-center">
        <label htmlFor="my-drawer" className=" translate-y-0.5">
            <AiOutlineMenu size={22} className='md:hidden mr-3 text-darkGrayishBlue hover:text-veryDarkBlue duration-75' />
        </label>
            sneakers
        </h1>

        <nav className='max-md:hidden flex items-center gap-3 lg:gap-6 xl:gap-8 lg:w-3/4 lg:pl-20 xl:pl-32 text-lg'>
            {navMenuItems.map(menuItem => {
                return (<a href="" key={menuItem} className='text-grayishBlue text-lg h-full block hover:text-veryDarkBlue duration-75 hover:border-b-4 border-b-primOrange hover:pb-5 pt-2 pb-6'>
                    {menuItem}
                </a>)
            })}
        </nav>

        <div className="flex items-center gap-6 md:gap-7 mr-3 lg:w-1/4 justify-end">
            <HeaderCart />
            <img src='/image-avatar.png' className='w-10 rounded-full hover:border-2 hover:scale-110 border-primOrange duration-75' />
        </div>
    </header>
  )
}

export default Header
