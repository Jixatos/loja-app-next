import { Inter } from 'next/font/google'
import './globals.css'
import Cabecalho from '@/components/Cabecalho/Cabecalho'
import Rodape from '@/components/Rodape/Rodape'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'APP',
  description: 'Developed by Juan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="reset">
        <Cabecalho/>
        {children}
        <Rodape/>
      </body>
    </html>
  )
}
