import Image from 'next/image'
import styles from './product.module.css';
import Link from 'next/link';


const PercentBox = ({ percent }) => {

    return percent ? <div className={styles.discount}>
    <div className={styles.discountText}>SPAR</div>
    <div className={styles.discountPercent}>{percent}%</div>
    </div> : ''

}
  
const Product = ({product, cls}) => {

    return (

        <div className={`${styles.product} ${cls ? cls : ''}`}>
        
            <div className={styles.header}>

                <PercentBox percent={product.discountInPercent ? product.discountInPercent : 0}></PercentBox>
                <Image src={product?.image} alt={product?.title} width={300} height={300}/>

            </div>
        
            <div className={styles.body}>
            
                <div>
                    <div className={styles.title}><Link href={`/produkter/${product._id}`}>{product.title}</Link></div>
                    
                </div>

                <div className={styles.footer}>

                    <div>

                        <div className={styles.price}>{product.price},00 kr.</div>
                     
                    </div>

                </div>

            </div>
        </div>
    
    )
    
  }
  
  export default Product;
  
  