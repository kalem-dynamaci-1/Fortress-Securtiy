import React from 'react'
import { Routes, Route } from "react-router-dom"
import Homepage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'

const RoutesList = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
    </Routes>
  )
}

export default RoutesList
