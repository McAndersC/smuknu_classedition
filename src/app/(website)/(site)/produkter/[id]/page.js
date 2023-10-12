'use client'
import { getProductById } from '@/services/data.service'
import Image from 'next/image'
import {useState, useEffect} from 'react'

const ProductLadingPage = ({params}) => {

  console.log(params)

  const [product, setProduct] = useState({})

  useEffect(() => {

    getProductById(params.id).then((data) => {
      
      setProduct(data)

    })  

  }, [params.id])

  return (
    <div className={`page-wrapper`} >
 

      <h1>{product.title}</h1>
      <Image src={product.image} alt={product.title} width={300} height={300}/>


    </div>
  )
}

export default ProductLadingPage

