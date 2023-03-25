import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className='navbar-brand' to={'/'}>Use Context</Link>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul>
                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'active':''}`} to={'Login'}>
                        Login
                    </NavLink>
                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'active':''}`} to={'About'}>
                        About
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>

    <div className='container-fluid'>
    <Outlet/>        
    </div>
    </div>
  )
}
