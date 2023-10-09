import styles from './page.module.css';
import Link from 'next/link';

const NotFound = () => {
    
    return <div className={`${styles.page} page-wrapper`}>404 Siden blev ikke fundet.  <span><Link href='/'>Til Forsiden</Link></span></div>

}

export default NotFound;