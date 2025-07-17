import React from 'react'
import { TbShoppingCartHeart } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className='Navbar'>
      <a href='#' className='Logo'><TbShoppingCartHeart />CaRt.in</a>
      <a href="#">Home</a>
      <a href="#">Contact</a> 
      <a href="">Category</a>
      <a href="">Cart</a>
      <a href="">Products</a>
      <a href="">Login</a>
      <a href="">Search</a>

    </div>
  )
}

export default Navbar