'use client'
import { getProductData, getProductDataMock } from "@/services/data.service";
import Product from "./product";
import {useState, useEffect} from 'react';
import styles from './products.module.css';

const Products = ({recommended, headline}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

      const getData = async () => {

        const data = await getProductData();

        let filteredData = recommended ? data.filter( (product) => product.recommended === true ) : data;

        setProducts(filteredData);

      } 

      getData();


    }, [recommended])


    return <div className={styles.products} id="selected">

        <div className={styles.header}>
            <h2>
              <span style={{color : headline.lineOne.color}}>{headline.lineOne.text} </span>
              <span style={{color : headline.lineTwo.color}}>{headline.lineTwo.text}</span>
            </h2>
        </div>
        {products.map((product) => {

            return <Product key={product._id} product={product}></Product>

        })}


    </div>

};

export default Products;