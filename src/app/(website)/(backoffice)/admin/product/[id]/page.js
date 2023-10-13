import EditProduct from "@/components/admin/editProduct";

const ProductPage = ({params}) => {

    return <div className="admin-page-wrapper">

        <EditProduct id={params.id}></EditProduct>

    </div>

}

export default ProductPage;