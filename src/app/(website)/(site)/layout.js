import Footer from "@/components/footer/footer";
import Navigation from "@/components/navigation/navigation";

export default function SiteLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <>
        <Navigation logo={'smuknu_logo.png'}></Navigation>
        {children}
        <Footer></Footer>
      </>
    )
  }