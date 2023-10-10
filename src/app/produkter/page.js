import Image from 'next/image'
import styles from './page.module.css'
import Product from '@/components/products/product'
import Products from '@/components/products/products'



const ProductPage = () => {


  let headlineObj = { 
    lineOne : {
      text : 'UDVALGT',
      color : 'pink'
    },
    lineTwo : {
      text : 'SKØNHED',
      color : 'green'
    }
  }

  return (
    <div className={`${styles['page-site']} page-wrapper`} >
 
      <h1>Produkter</h1>
      <Products recommended={false} headline={headlineObj}></Products>


    </div>
  )
}

export default ProductPage

