import styles from './intrucciones.module.css'

const Instrucciones =()=>{
  return (
    <>
      <h1 className={styles.informationTitle}>Bienvenidos a esta demo de búsqueda de productos</h1>
      <div className={styles.InformationContainer}>
        <h2>Descripción</h2>
        <p>Esta demostración está diseñada para buscar productos en la tienda promar.pe utilizando su SKU.</p>
        <p>La demo cuenta con un menú, una página que muestra los productos y una página que detalla cada producto.</p>

        <h3>Menú</h3>
        <ul>
          <li>Logo imagen: Regresa para volver a leer las instrucciones.</li>
          <li>Buscador: Ingresa el SKU del producto y presiona el botón de búsqueda.</li>
          <li>Botón de retorno: Regresa a los productos encontrados si has navegado a la página de detalles del producto.</li>
        </ul>

        <h3>Página de productos</h3>
        <ul>
          <li>Mostrando productos encontrados en tu búsqueda. Si no hay resultados, verás una página que indica que no se encontraron productos.</li>
          <li>Cada producto muestra un resumen con marca, nombre, descripción y precio.</li>
          <li>Botón de detalles: Redirecciona a la página de detalles del producto.</li>
        </ul>

        <h3>Detalle del producto</h3>
        <ul>
          <li>Detalles específicos del producto, incluyendo imagen, categoría, nombre, ficha técnica, precios y descripción.</li>
        </ul>
      </div>


    </>
  )
}

export default Instrucciones