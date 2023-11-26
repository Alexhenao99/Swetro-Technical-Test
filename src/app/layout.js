import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'William Henao Technical Test'
}

const RootLayout = ({ children, modal }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        {modal}
      </body>
    </html>
  )
}

export default RootLayout
