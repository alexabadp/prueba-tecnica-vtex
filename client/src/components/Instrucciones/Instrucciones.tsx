import React from "react";
import styles from './intrucciones.module.css'

const Instrucciones =()=>{
  return (
    <>
      <h1 className={styles.informationTitle} >Bienvenidos a esta demo de búsqueda de productos</h1>
      <div className={styles.InformationContainer}>
        <h2>Descripción</h2>
        <p>Esta DEMO está desarrollada para la busqueda de productos de la tienda promar.pe utilizando su SKU. 
          El demo cuenta con un Menú, una página que mostrará los productos y una página que mostrará los detalles del producto</p>
        <h3>Menú</h3>
        <ul>
          <li>Cuenta con un botón de inicio para regresar y poder volver a leer las instrucciones</li>
          <li>Tiene un buscador en el que deberás ingresar el sku del producto que quiere buscar, y luego de ingresarlo deberás presionar el boton de búsqueda</li>
          <li>Tiene un boton para retornar a los productos previamente encontrados si ya nanvegaste a la página de detalles del producto</li>
        </ul>
        <h3>Página de productos</h3>
        <ul>
          <li>En la página de productos se mostrará los productos encontrados en tu busqueda, en caso no exista el producto te mostrará una pagina que te indicará que no encontró el producto</li>
          <li>Cada producto encontrado mostrará un sumamary que tendrá la marca, el nombre, la descripcion y el precio del procducto</li>
          <li>En cada producto tendrá un botón que te redireccionará a la página de detalle del producto</li>
        </ul>
        <h3>Detalle del producto</h3>
        <ul>
          <li>En esta página encontrarás detalles más específicos del productos</li>
          <li>Mostrará image, categoría, nombre, ficha técnica, precios y descripción del producto</li>
        </ul>
      </div>

    </>
  )
}

export default Instrucciones