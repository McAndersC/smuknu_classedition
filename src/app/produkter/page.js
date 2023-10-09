import Image from 'next/image'
import styles from './page.module.css'
import Product from '@/components/products/product'
import Products from '@/components/products/products'



const ProductPage = () => {





  return (
    <div className={`${styles['page-site']} page-wrapper`} >
 

      <h1>Produkter</h1>
      <Products recommended={false}></Products>


    </div>
  )
}

export default ProductPage

