'use client';

import { Menu } from 'lucide-react';

const Sidebar = () => {
  return (
    <div>
      <div className='flex items-center justify-between gap-3 pt-8 md:justify-normal'>
        <div>logo</div>
        <h1 className='text-2xl font-extrabold'>
          AGESTOCK
        </h1>

        <button
          className='p-3 rounded-full md:hidden gb-gray-100 hover:bg-blue-100'
          onClick={() => { }}
        >
          <Menu className='w-4 h-4' />
        </button>
      </div>

      <div className='flex-grow mt-8'>
        {/* Links here */}
      </div>

      <div>
        <p className='text-xs text-center text-gray-500'>&copy; 2024 AGEStock</p>
      </div>
    </div>
  );
};

export default Sidebar;
