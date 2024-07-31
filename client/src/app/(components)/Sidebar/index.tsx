'use client';

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/app/state';
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === '/' && href === '/dashboard');

  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center ${isCollapsed ? 'justify-center py-4' : 'justify-start px-8 py-4'} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? 'bg-blue-200 text-white' : ''}`}>
        <Icon className='w-6 h-6 !text-gray-700' />

        <span className={`${isCollapsed ? 'hidden' : 'block'} font-medium text-gray-700`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      <div className={`flex items-center justify-between gap-3 pt-8 md:justify-normal ${isSidebarCollapsed ? 'px-5' : 'px-8'}`}>
        <div>logo</div>
        <h1 className={`${isSidebarCollapsed ? 'hidden' : 'block'} text-2xl font-extrabold`}>
          AGESTOCK
        </h1>

        <button
          className='p-3 rounded-full md:hidden gb-gray-100 hover:bg-blue-100'
          onClick={toggleSidebar}
        >
          <Menu className='w-4 h-4' />
        </button>
      </div>

      <div className='flex-grow mt-8'>
        <SidebarLink href='/dashboard' icon={Layout} label='Dashboard' isCollapsed={isSidebarCollapsed} />
        <SidebarLink href='/inventory' icon={Archive} label='Inventory' isCollapsed={isSidebarCollapsed} />
        <SidebarLink href='/products' icon={Clipboard} label='Products' isCollapsed={isSidebarCollapsed} />
        <SidebarLink href='/users' icon={User} label='Users' isCollapsed={isSidebarCollapsed} />
        <SidebarLink href='/settings' icon={SlidersHorizontal} label='Settings' isCollapsed={isSidebarCollapsed} />
        <SidebarLink href='/expenses' icon={CircleDollarSign} label='Expenses' isCollapsed={isSidebarCollapsed} />
      </div>

      <div className={`${isSidebarCollapsed ? 'hidden' : 'block'} mb-10`}>
        <p className='text-xs text-center text-gray-500'>&copy; 2024 AGEStock</p>
      </div>
    </div>
  );
};

export default Sidebar;
