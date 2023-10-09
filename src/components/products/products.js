'use client'
import { getProductData, getProductDataMock } from "@/services/data.service";
import Product from "./product";
import {useState, useEffect} from 'react';
import styles from './products.module.css';

const Products = ({recommended}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        console.log('recommended vi kører igen', recommended)

      const getData = async () => {

        const data = await getProductData();

        let filteredData = recommended ? data.filter( (product) => product.recommended === true ) : data;

        setProducts(filteredData);

      } 

      getData();


    }, [recommended])


    return <div className={styles.products}>


        {products.map((product) => {

            return <Product key={product._id} product={product}></Product>

        })}


    </div>

};

export default Products;