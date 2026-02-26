import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div className='flex'>
      <div>
        <Sidebar/>
      </div>
      <div>
         <Outlet/>
      </div>
    </div>
  )
}

export default Rootlayout
