"use client"
import Accordion from '@/components/accordions/accordion'
import styles from './page.module.css'
import Accordions from '@/components/accordions/accordions'
import Products from '@/components/products/products'
import {useState, useEffect} from "react";
import Link from 'next/link'
import { scrollTo } from "next/router";
const h1a = ({children}) => {

  return <div className={'WRAPPER'}>[{children}]</div>

}

export default function Home() {

  const [visSorteret, setVisSorteret] = useState(false)


  return (
    <div className={`${styles.page} page-wrapper`} >
      
      <h1>TEASER</h1>
      <Link href='#scrollto_products'>Produkts</Link>

      <h1 onClick={() => setVisSorteret(!visSorteret)}>Forside</h1>

      <div id="scrollto_products">
        <Products recommended={visSorteret}></Products>
      </div>
     
    </div>
  )
}


