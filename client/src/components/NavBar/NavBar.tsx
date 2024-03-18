import React from "react";
import styles from './navBar.module.css';
import { Link } from 'react-router-dom'
import ProductSearch from "../ProductSearch/ProductSearch";
import logo from '../../assets/logo-e-commers.jpg'

const NavBar = ()=> {
  return (
    <>
      <div className={styles.navBackground}>
        <nav className={`${styles.navContainer} ${styles}`}>
          <div className={styles.containerLogoAndSearch}>
            <Link to='/'>
              <img src={logo} className={styles.logo}/>
            </Link>
            <ProductSearch />
          </div>
          <Link to='/products' className={styles.buttonProducts}>
            Productos Encontrados
          </Link>
        </nav>
      </div>
    </>
  )
}

export default NavBar