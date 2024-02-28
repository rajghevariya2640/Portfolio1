import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Extra from './Pages/Extra'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'
import { ThemeProviderComponent } from './Shared/ThemeProviderComponent'
import SideBar from './Presentation/Sidebar/SideBar'
import ThemeChangeSection from './Shared/ThemeChangeSection'

function App () {
  return (
    <ThemeProviderComponent>
      <SideBar />
      <ThemeChangeSection/>
      <Routes>
        <Route exect path='/' element={<About />} />
        <Route exect path='/resume' element={<Resume />} />
        <Route exect path='/portfolio' element={<Portfolio />} />
        <Route exect path='/blog' element={<Blog />} />
        <Route exect path='/contact' element={<Contact />} />
        <Route exect path='/extra' element={<Extra />} />
        <Route exect path='/get-it-now' element={<Resume />} />
      </Routes>
    </ThemeProviderComponent>
  )
}

export default App

