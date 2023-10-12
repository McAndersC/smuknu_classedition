import Link from "next/link";


const AdminNavigation = () => {

    return (
        <nav>
            <Link href="/admin">Admin</Link> | <Link href="/admin/product">Product</Link> | <Link href="/admin/review">Review</Link>
        </nav>
    )

}

export default AdminNavigation;