import React from 'react'
import Navbar from '../Companents/Navbar'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layouts