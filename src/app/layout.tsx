
import './globals.css'
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';


export const metadata = {
  title: 'Social OOP',
  description: 'AI-powered social content platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="bg-gray-50 text-gray-900 overflow-x-hidden max-w-full">
        <Navbar />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
