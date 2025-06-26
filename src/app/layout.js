// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio Home',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            {/* Add more links here */}
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
