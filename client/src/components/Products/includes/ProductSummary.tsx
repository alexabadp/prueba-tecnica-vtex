import React from "react";
import { Link } from "react-router-dom";
import styles from './productSummary.module.css';
import { toDiscount } from "../../../utils/format";

interface ProductFormat {
  id: string
  productId: string
  quantity: number
  seller: string
  linkText: string
  imageUrl: string
  productName: string
  brand: string
  price: number
  listPrice: number
}

const ProductSummary =({
  id,
  imageUrl,
  brand,
  productName,
  price,
  listPrice,
  linkText,
  seller
}: ProductFormat)=> {

  console.log(id, seller, linkText, imageUrl, brand, productName, price, listPrice)
  return (
    <>
      <div className={styles.containerSummary}>
        {price !== listPrice && (
          <span className={styles.discountSummary}>
            -{toDiscount(price, listPrice)}%
          </span>
        )}
        <img className={styles.imageSummary} src={imageUrl} alt="" />
        <div className={styles.brandSummary}>{brand}</div>
        <div className={styles.informationSummary}>
          <p className={styles.nameSummary}>{productName}</p>
          <div className={styles.pricesSummary}>
            <span className={styles.priceSummary}>S/. {price}</span>
            {price !== listPrice && (
              <span className={styles.listPriceSummary}>
                S/. {listPrice}
              </span>
            )}
          </div>
        </div>
          <Link
            to={`/${linkText}/p`}
            rel="noreferrer"
            className={styles.buttonSummary}
          >
            Ver detalles
          </Link>
      </div>
    </>
  )
}

export default ProductSummary