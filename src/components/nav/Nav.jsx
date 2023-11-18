// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from '../../img/icons/logo.svg'
import bell from '../../img/icons/bell.png'
import gift from '../../img/icons/gift.png'
import search from '../../img/icons/search.png'
import user from '../../img/icons/user.png'
function Nav() {
    const [show, Setshow] = useState(false);
    useEffect(() => {
      function display() {
        if (scrollY > 100) {
          Setshow(true);
        }
        else {
          Setshow(false);
        }
      }
      window.addEventListener('scroll', display);
      return () => {
        window.removeEventListener('scroll', display);
      }
    },[])
  return (
    <div className={`nav-wrapper ${show && "nav-black"}`}>
          <div className='nav-link-wrapper ' >
            <ul className='link-list '>
            <a href=""><img className='logo ' src={logo} alt="" /></a>
              <li className='d-none d-lg-block'><a href="">Home</a></li>
              <li className='d-none d-lg-block'><a href="">TV Shows</a></li>
              <li className='d-none d-lg-block'><a href="">Movies</a></li>
              <li className='d-none d-lg-block'><a href="">Latest</a></li>
              <li className='d-none d-lg-block'><a href="">My List</a></li>
            </ul>
            <ul className='link-list2'>
            <li className='d-none d-lg-block'><a href=""><img src={search} alt="" /></a></li>
            <li className='d-none d-lg-block'><a href="">DVD</a></li>
            <li className='d-none d-lg-block'><a href=""><img src={gift} alt="" /></a></li>
            <li className='d-none d-lg-block'><a href=""><img src={bell} alt="" /></a></li>
            <li className='d-none d-lg-block'><a href=""><img src={user} alt="" /></a></li>

            </ul>
          </div>
    </div>

  )
}

export default Nav