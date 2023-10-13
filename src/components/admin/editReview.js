'use client'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createReview } from "@/services/data.service";
import styles from "./form.module.css"
const validationSchema = yup.object().shape({

    name: yup.string().required('Name is required'),
    byline: yup.string().required('Byline is required'),
    description: yup.string().required('Description is required'),
    
})

const EditReview = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues : {
            name: 'Anders',
            byline: 'Byline',
            description: 'Description'
        },
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {

        console.log(data)
        const result = await createReview(data);

    }

    return <div className="admin-page-wrapper">

        <h1>Create Review</h1>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

            <label> Name
                <input {...register("name")} />
            </label>
            {errors.title?.message && <p>{errors.title?.message}</p>}

            <label> Byline
                <input {...register("byline")} />
            </label>
            {errors.byline?.message && <p>{errors.byline?.message}</p>}

            <label> Description
                <input {...register("description")} />
            </label>
            {errors.description?.message && <p>{errors.description?.message}</p>}

            <input type="submit" />



        </form>

    </div>

}

export default EditReview;