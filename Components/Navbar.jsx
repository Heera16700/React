import React from 'react'
import { TbShoppingCartHeart } from "react-icons/tb";
import { TbShoppingCartSearch } from "react-icons/tb";  
const Navbar = () => {
  return (
    <div className='Navbar'>
      <a href='#' className=''>
        <span className='logo'><TbShoppingCartHeart /></span>
        <span className='brand'>
          <span className='green'>C</span>
          <span className='green'>A</span>
          <span className='white'>RT.in</span>


        </span>
      </a>
      <a href="#">Home</a>
      <a href="#">Contact</a> 
      <a href="">Category</a>
      <a href="">Cart</a>
      <a href="">Products</a>
      <a href="">Login</a>
      <a href=""><TbShoppingCartSearch /></a>

    </div>
  )
}

export default Navbar