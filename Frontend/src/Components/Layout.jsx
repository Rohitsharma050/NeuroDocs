import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
const Layout = () => {
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Dynamic Page Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout