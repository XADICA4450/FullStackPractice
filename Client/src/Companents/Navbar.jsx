import React from 'react'
import styles from "../Companents/Navbar.module.scss"
import { IoMdContact } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import {NavLink} from "react-router-dom"



const Navbar
 = () => {
  return (
    <div className={styles.container}>


        <div className={styles.navbar}>
       
        <input className={styles.search} type="search" placeholder='search' />
            <button className={styles.Shoppers}>S H O P P E R S</button>
         <div className={styles.icons}>   <IoMdContact />
              <FaRegHeart />
               <SlBasket /></div>
           

   
        </div>
        <hr/>
        <nav>
            <ul>
                <li><NavLink to="/" end >HOME</NavLink></li>
                <li><NavLink to="/about" end >ABOUT</NavLink></li>
                <li><NavLink to="/shop" end >SHOP</NavLink></li>
                <li><NavLink to="/catalogue" end >CATALOGUE</NavLink></li>
                <li><NavLink to="/newarrivals" end >NEW ARRIVALS</NavLink></li>
                <li><NavLink to="/contact" end >CONTACT</NavLink></li>


            </ul>
        </nav>

   
    </div>
  )
}

export default Navbar
