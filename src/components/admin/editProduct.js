'use client'

import { createProduct, updateProduct, getProductById } from "@/services/data.service";
import { useForm } from "react-hook-form";
import { useState, useEffect} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Product from "../products/product";
import styles from "./form.module.css";
import { get } from "mongoose";

const validationSchema = yup.object().shape({

    title: yup.string().required('Title is NEEEDED'),

})

const EditProduct = ({id}) => {

    const [product, setProduct] = useState({
        title: 'Create new title for Product',
        price: 999,
        recommended: true,
        discountInPercent: 10,
        image: '/products/dummy.jpg'
    });

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues : {
            title: product.title,
            price: product.price,
            recommended: product.recommended,
            discountInPercent: product.discountInPercent,
            image: product.image
        },
        resolver: yupResolver(validationSchema),
    });

    useEffect(() => {

        if(id) {

    
            getProductById(id).then((data) => {
          
                setProduct(data)
          
            })  
        }
    
      }, [id])
    
      useEffect(() => {

        if(id) {
            setValue('title', product.title)
            setValue('price', product.price)
            setValue('discountInPercent', product.discountInPercent)
            setValue('image', product.image)
            setValue('recommended', product.recommended)
    
        }
    
      }, [product, setValue, id])




    const onSubmit = async (data) => {

        console.log(id, data)

        if(id) {

            data._id = id;
            const result = await updateProduct(data);
            console.log('UPDATE', result)

        } else {

            const result = await createProduct(data);

        }
        


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

        <Product product={product} />
        
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

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
