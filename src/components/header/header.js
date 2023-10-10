import Image from 'next/image'
import styles from './header.module.css'
const Header = ({config}) => {

    return <div className={styles.header}>
  
      <h1 style={{color : config.headline.color}}>{config.headline.text}</h1>
      <Image src={config.image} width={4989} height={1349} alt="asdasd"></Image>
    </div>
  
  }

  export default Header;