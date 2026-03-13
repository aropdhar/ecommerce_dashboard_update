import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Breadcrump from '../breadcrump/Breadcrump.jsx'

const Rootlayout = () => {
  return (
    <div className='flex'>
      <div>
        <Sidebar/>
      </div>
      <div className='w-full  p-6 text-[20px]'>
        <div className='mb-5'>
          <Breadcrump/>
        </div>
         <Outlet/>
      </div>
    </div>
  )
}

export default Rootlayout
