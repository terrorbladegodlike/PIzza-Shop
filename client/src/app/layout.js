// css
import './globals.css';

// Import Components
import Nav from './components/Nav';
import CartProvider from './context/CartContext';
import CartMobileIcon from './components/CartMobileIcon';

// Import next fonts
import { Bangers, Quicksand, Roboto_Condensed } from 'next/font/google'

const quickdsand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: ['400'],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-robotoCondensed',
  weight: ['300', '400', '700']
});

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang='en'>
        <body className={`${quickdsand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}>
          <Nav />
          <CartMobileIcon />
          {children}
        </body>
      </html>
    </CartProvider>
  );
}
