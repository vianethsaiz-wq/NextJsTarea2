import { montserrat } from './ui/fonts'
import './ui/global.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${montserrat.className} antialiased'}>
        <h1>Este es un titulo </h1>
        <div style={{ border: '1px solid #000' }}> 
        {children}
          </div>
          <footer className='py-10 flex justify-center item'>
            Hecho con ❤️ por Kitto
          </footer>
        </body>
    </html>
  );
}
