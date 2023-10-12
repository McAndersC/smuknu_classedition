'use client'

import { createProduct } from "@/services/data.service";
import { useForm } from "react-hook-form";
import { useState} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Product from "../products/product";

const validationSchema = yup.object().shape({

    title: yup.string().required('Title is NEEEDED'),

})

const EditProduct = () => {

    const [product, setProduct] = useState({
        title: 'Default Product',
        price: 999,
        recommended: true,
        discountInPercent: 10,
        image: '/products/dummy.jpg'
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues : {
            title: 'My New Product',
            price: 999,
            recommended: true,
            discountInPercent: 10,
            image: '/products/dummy.jpg'
        },
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {

        console.log(data)
        // const result = await createProduct(data);


    }

    const onChangeHandler = (e, field) => {

        let p = product;

        if(field === 'recommended') {
            p[field] = e.target.checked;
        } else {
            p[field] = e.target.value;
        }
      

        setProduct({...p});

    }
    
    return <div>
        
        <h1>Edit Product</h1>

        {/* <h2>Product {product.title} - {product.recommended ? 'Anbefalet' : 'Ikke anbefalet'} - {product.price} - {product.image}</h2> */}
        <Product product={product} />
        
        <form onSubmit={handleSubmit(onSubmit)}>

            <label> Title

                <input {...register("title", {
                    onChange: (e) => onChangeHandler(e, 'title'),
                })} style={{ borderColor : errors.title?.message ? 'red' : 'green'}}/>

            </label>
            {errors.title?.message && <p>{errors.title?.message}</p>}
            
            <label> Image
                <input {...register("image", {
                    onChange: (e) => onChangeHandler(e, 'image'),
                })} />
            </label>

            <label> Price
                <input {...register("price", {
                    onChange: (e) => onChangeHandler(e, 'price'),
                })} />
            </label>
            <label> Recommeded
                <input type='checkbox' {...register("recommended", {
                    onChange: (e) => onChangeHandler(e, 'recommended'),
                })} />
            </label>
            <label> Discount In Percent
                <input {...register("discountInPercent", {
                    onChange: (e) => onChangeHandler(e, 'discountInPercent'),
                })} />
            </label>
            <input type="submit" />

       

        </form>

    </div>

};

export default EditProduct;
