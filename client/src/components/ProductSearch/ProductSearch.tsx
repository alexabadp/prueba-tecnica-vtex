import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import styles from './productSearch.module.css'
import { useHistory } from 'react-router-dom';

const ProductSearch = ()=>{
  
  const { setAppInformation } = useContext(AppContext)
  const history = useHistory();
  const [valueSku, setValueSku] = useState('')

  const handleChangeSku =(e: any)=>{
    const value = e.target.value
    setValueSku(value)
  }

  const handleClickSearch = () => {
    fetch(`https://prueba-tecnica-vtex.onrender.com/product?sku=156235`)
      .then(response => {
        if(!response.ok){
          throw new Error('La solicitud no fue exitosa')
        }
        return response.json()
      })
      .then(data => {
        setAppInformation((prevInfo:any) => ({
          ...prevInfo,
          products: data,
          sku: valueSku
        }));
        history.push('/products');
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
        setAppInformation((prevInfo:any) => ({
          ...prevInfo,
          products: [],
          sku: valueSku
        }));
        history.push('/products');
      });
  }
  

  return (
    <>
      <div className={styles.containerSearch}>
        <input placeholder="Ingresa el SKU del producto" type="text" onChange={(e) => handleChangeSku(e)} className={styles.inputSearch} />
        <button onClick={handleClickSearch} className={styles.buttonSearch}> Buscar </button>
      </div>
    </>
  )
}

export default ProductSearch