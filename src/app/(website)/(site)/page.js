"use client"
import Accordion from '@/components/accordions/accordion'
import styles from './page.module.css'
import Accordions from '@/components/accordions/accordions'
import Products from '@/components/products/products'
import {useState, useEffect} from "react";
import Link from 'next/link'
import { scrollTo } from "next/router";
import Header from '@/components/header/header'
import FullTeaser from '@/components/ctas/fullteaser/fullteaser'

const h1a = ({children}) => {

  return <div className={'WRAPPER'}>[{children}]</div>

}

export default function Home() {

  const [visSorteret, setVisSorteret] = useState(false)

  const teaserConfig = { 
    link: {
      url : '#selected',
      text : 'Se udvalgte produkter'
    },
    headline: {
        one: {
          text : 'SKØNHED',
          color : '#000'
        },
        two: {
          text : 'FOR ALLE',
          color : '#000'
        }
      },
      image: '/front.jpg',
      body: {
        text : `<p>Herunder har vi samlet spørgsmål og svar om sundhed.</p><p>Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion</p>`,
        color : '#000'
      },
      bodyBackground : '#f7f0f2'
  }

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
    <div className={`${styles.page} page-wrapper`} >
    
    <FullTeaser config={teaserConfig}></FullTeaser>

     

      <div id="scrollto_products">
        <Products recommended={visSorteret} headline={headlineObj}></Products>
      </div>
     
    </div>
  )
}


