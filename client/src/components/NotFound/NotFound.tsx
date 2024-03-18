import React from "react";
import styles from './notFound.module.css'
import image from '../../assets/not-found.png'

const NotFound=()=>{
  return (
    <>
      <div className={styles.notFoundContainer}>
        <img className={styles.image}src={image}/>
        <div className={styles.notFoundDetails}>
          <h2>No se ha encontrado ningun resultado</h2>
          <p>Ingresa un codigo SKU que este habilitado, o tenga stock.</p>
          <p>Ejemplo: 156235</p>
        </div>
      </div>
    </>
  )
}

export default NotFound