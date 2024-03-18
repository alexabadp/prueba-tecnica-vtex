import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { withRouter } from 'react-router-dom';
import styles from './productDetail.module.css'
import NotFound from "../NotFound/NotFound";

const ProductDetail = (props:any)=> {
  
  const { appInformation } = useContext(AppContext)
  const { name } = props.match.params;
  const [detailProduct, setDetailProduct] = useState([])

  useEffect(() => {
    const product = appInformation?.products?.filter(
      (product: any) => product.productName.toLowerCase().replace(/ /g, "-") === name.toLowerCase()
    );
    
    if (product) {
      setDetailProduct(product);
    } else {
      setDetailProduct([]);
    }
  }, [name, appInformation?.products]);
  

  return (
    <div>
      {
        detailProduct.length > 0 ?
        detailProduct?.map((element:any) => (
          <div className={styles.pdpWrapper}>
            <div className={styles.pdpContainer}>
              <div className={styles.pdpContainerLeft}>
                <img className={styles.pdpImagen} src={element?.items[0]?.images[0]?.imageUrl}/>
              </div>
              <div className={styles.separatorVertical}></div>
              <div className={styles.pdpContainerRight}>
                <div className={styles.pdpContainerRightTop}>
                  <div className={styles.brandAndSku}>
                    <p className={styles.pdpBrand}>{element?.brand}</p>
                    <p className={styles.pdpSku}>sku: {appInformation?.sku}</p>
                  </div>
                  <p className={styles.pdpProductName}>{element?.productName}</p>
                  <p className={styles.pdpDescription}>{element?.description}</p>
                </div>
                <div className={styles.separatorHorizontal}></div>
                <div className={styles.pdpContainerRightBottom}>
                  <div className={styles.pdpDataSheet}>
                    <p className={styles.pdpDataSheetTitle}>Ficha Técnica</p>
                    <ul>
                      {element?.['Ficha Técnica']?.map((item:any, index: number) => 
                        index <= 6 && (
                          <li>
                            {item}
                          <strong>
                            : {element[item]}
                          </strong>
                        </li>
                        ))
                      }
                      </ul>
                      <a href="#ficha-tecnica" className={styles.pdpSeeMore}>Ver todo</a>
                  </div>
                  <div className={styles.containerPrice}>
                    <div className={styles.containerCurrentPrice}>
                      <p className={styles.pdpCurrentPriceTitle}>Precio actual</p>
                      <p className={styles.pdpCurrentPrice}>S/. {element?.items[0]?.sellers[0]?.commertialOffer?.Price}</p>
                    </div>
                    <div className={styles.containerListPrice}>
                      <p>Precio regular</p>
                      <p className={styles.pdpListPrice}>S/. {element?.items[0]?.sellers[0]?.commertialOffer?.ListPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="ficha-tecnica" className={styles.tableContainer}>
              <h2 className={styles.tableTitle}>Ficha Técnica</h2>
              <table>
                <tbody>
                  {
                    element?.['Ficha Técnica'].map((data:any) => (
                      <tr>
                        <td><strong>{data}</strong></td>
                        <td>{element[data]}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        ))
        :
        <NotFound />
      }
    </div>
  )
}

export default withRouter(ProductDetail)