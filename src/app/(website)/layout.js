import './globals.css'
import { quickFont } from '@/utils/fonts';

export const metadata = {
  title: 'MCDM - BOILERPLATE',
  description: 'En ren NextJS template med alt det nødvendige for at komme i gang med at lave en ny hjemmeside.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={quickFont.className}>

        {children}
  
      </body>
    </html>
  )
} 

