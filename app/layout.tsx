import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Bangle Store | Premium Handcrafted Lac Bangles from Sitamarhi",
  description:
    "Discover exquisite handcrafted lac and bridal bangles celebrating Mithila heritage. Premium quality, global delivery. Shop traditional Indian bangles online.",
  keywords:
    "handcrafted bangles, lac bangles, bridal bangles, Sitamarhi bangles, Mithila art, traditional Indian jewelry, wedding bangles",
  metadataBase: new URL("https://banglestore.com"),
  openGraph: {
    title: "The Bangle Store | Premium Handcrafted Lac Bangles",
    description:
      "Discover exquisite handcrafted lac and bridal bangles celebrating Mithila heritage. Premium quality, global delivery.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/gold-bridal-bangles-set.jpg",
        width: 1200,
        height: 630,
        alt: "The Bangle Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bangle Store | Premium Handcrafted Lac Bangles",
    description: "Discover exquisite handcrafted lac and bridal bangles celebrating Mithila heritage.",
    images: ["/gold-bridal-bangles-set.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'the-bangle-store'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
