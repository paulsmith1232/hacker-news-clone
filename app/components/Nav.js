import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav () {
  return (
    <nav className='row space-between'>
      <ul className='row nav'>
        <li>
          <NavLink 
            to='/'
            exact
            className='nav-link'>
              Top
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/new' 
            className='nav-link'>
              New
          </NavLink>
        </li>
      </ul>
      <button
        style={{fontSize: 30}}
        className='btn-clear'
      >
      </button>
    </nav>
  )
}