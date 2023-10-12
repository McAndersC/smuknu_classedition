import AdminNavigation from "@/components/navigation/admin/adminnavigation";

export default function AdminLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <>
        <AdminNavigation></AdminNavigation>
        {children}
      </>
    )
  }