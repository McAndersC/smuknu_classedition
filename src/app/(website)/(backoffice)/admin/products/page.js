'use client'
import {useState, useEffect} from "react"
import Link from "next/link";
import { getProductData } from "@/services/data.service";

const ProductsPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

      const getData = async () => {

        const data = await getProductData();

     

        setProducts(data);

      } 

      getData();


    }, [])

    const renderProducts = () => {

        return products.map((product) => {

            return <div key={product._id}>
                    <h2>{product.title}</h2>
                    <Link href={`/admin/product/${product._id}`}>Edit/Update</Link>
                    <br/>
                    <hr/>
            </div>
    
        })
    }

    return <div className="admin-page-wrapper">

        {renderProducts()}

    </div>

}

export default ProductsPage;