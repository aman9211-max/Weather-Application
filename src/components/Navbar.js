import React from 'react'
import Logo from '../assets/Logo.jpg'
import './Navbar.css'
import bars from '../assets/bars.svg'
import { useState } from 'react'

const Navbar = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false)
  return (
    <div className='navbar p-4 flex h-28'>
        <div className="company flex h-16">
            <img src={Logo} alt="" className='w-16 h-12 mx-4'/>
            <div className="company_name flex">
                <span className='text-lg'>GlazTower</span>
                <span className='text-sm'>Weather Updates</span>
            </div>
        </div>
        <div className="nav-items">
        {(menu === false && mobile===true)?
          (
          <div className='p-1 rounded' style={{backgroundColor:"gray"}} onClick={()=>setMenu(true)}>
            <img src={bars} alt="" className='w-12 h-16' style={{filter:"invert(1)"}}/>
          </div>
          )
          :
          <div className="nav-buttons flex gap-x-16 text-center py-4">
            <a href="/" className='text-lg' onClick={()=>setMenu(false)}>Home</a>
            <a href="/about" className='text-lg' onClick={()=>setMenu(false)}>About Project</a>
            <a href="/run" className='text-lg' onClick={()=>setMenu(false)}>How to Run</a>
            <a href="/contact" className='text-lg' onClick={()=>setMenu(false)}>Contact</a>
          </div>
        }
        </div>
        
    </div>
  )
}

export default Navbar