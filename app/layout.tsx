import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Tiny Treasures - Handcrafted Photo Products & Accessories",
  description:
    "Handcrafted photo products, keychains, pins, and more. Turn your special moments into treasured keepsakes.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,300,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'Satoshi, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
