import React from 'react'
import { Link } from 'react-router-dom'
import '../components/header.scss'
function Header() {
  return (
    <div className='header'>
      <div className='notary'>
        <h2>Notary</h2>
      </div>
      <div className='ul'>
        <ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link' to="/add">Add</Link></li>

        </ul>
      </div>
    </div>
  )
}

export default Header
