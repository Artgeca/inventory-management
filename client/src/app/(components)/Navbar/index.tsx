'use client';

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/app/state';
import { Bell, Menu, Moon, Settings, Sun } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className='flex items-center justify-between w-full mb-7'>
      <div className='flex items-center justify-between gap-5'>
        <button
          className='p-3 bg-gray-100 rounded-full hover:bg-blue-100'
          onClick={toggleSidebar}
        >
          <Menu className='w-4 h-4' />
        </button>
        <div className='relative'>
          <input
            type="search"
            placeholder='Start type to search groups and products'
            className='py-2 pl-10 pr-4 bg-white border-2 border-gray-300 rounded-lg w-50 md:w-60 focus:outline-none focus:border-blue-500'
          />
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <Bell className='text-gray-500' size={20} />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between gap-5'>
        <div className='items-center justify-between hidden gap-5 md:flex'>
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className='text-gray-500 cursor-pointer' size={24} />
              ) : (
                <Moon className='text-gray-500 cursor-pointer' size={24} />
              )}
            </button>
          </div>
          <div className='relative'>
            <Bell className='text-gray-500 cursor-pointer' size={24} />
            <span className='absolute -top-2 -right-2 inline-flex item-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
              3
            </span>
          </div>
          <hr className='w-0 mx-3 border-l border-gray-300 border-solid h-7' />
          <div className='flex items-center gap-3 cursor-pointer'>
            <div className='w-9 h-9'>
              image
            </div>
            <span className='font-semibold'>
              AGE
            </span>
          </div>
        </div>
        <Link href='/settings'>
          <Settings className='text-gray-500 cursor-pointer' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
