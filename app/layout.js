import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Austin Furlong Portfolio',
  description: 'Portfolio to show work created by Austin Furlong'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-main-bg-color text-main-text-color'>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
