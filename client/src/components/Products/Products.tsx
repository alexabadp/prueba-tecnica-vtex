import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ProductSummary from './includes/ProductSummary'
import styles from './products.module.css'
import NotFound from "../NotFound/NotFound";

const Products = () => {
  const { appInformation } = useContext(AppContext)

  console.log("productos", appInformation?.products)
  
  return (
    <>
    {
      appInformation?.products?.length > 0 ? 
      <div>
        <h2>Productos encontrados</h2>
        <div className={styles.productContainer}>
          {
            appInformation?.products?.map((element:any) => (
              <ProductSummary 
                key={element?.productId}
                id={element?.items[0]?.itemId}
                productId={element?.productId}
                quantity={1}
                seller={element?.items[0]?.sellers[0]?.sellerId}
                linkText={element?.linkText}
                imageUrl={element?.items[0]?.images[0]?.imageUrl}
                productName={element?.productName}
                brand={element?.brand}
                price={element?.items[0]?.sellers[0]?.commertialOffer?.Price}
                listPrice={element?.items[0]?.sellers[0]?.commertialOffer?.ListPrice}
                />
            ))
          }
        </div>
      </div>
      :
      <NotFound />
    }
    </>
  )
}

export default Products
