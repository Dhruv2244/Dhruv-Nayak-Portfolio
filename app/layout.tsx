import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Dhruv Nayak | Full-Stack Developer",
  description:
    "Portfolio of Dhruv Nayak, a Full-Stack Developer specializing in HTML, CSS, JavaScript, React, Next.js, Node.js, PHP, and .NET.",
  keywords: [
    "Dhruv Nayak",
    "Full-Stack Developer",
    "Web Developer",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "PHP",
    ".NET",
  ],
  authors: [{ name: "Dhruv Nayak" }],
  creator: "Dhruv Nayak",
icons: {
  icon: [
    { url: "/icon.png", type: "image/png", sizes: "512x512" },
    { url: "/favicon.ico", sizes: "any" }
  ],
  apple: [{ url: "/apple-touch-icon.png" }],
},
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhruvnayak.com",
    title: "Dhruv Nayak | Full-Stack Developer",
    description:
      "Portfolio of Dhruv Nayak, a Full-Stack Developer specializing in HTML, CSS, JavaScript, React, Next.js, Node.js, PHP, and .NET.",
    siteName: "Dhruv Nayak Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Dhruv Nayak Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Nayak | Full-Stack Developer",
    description:
      "Portfolio of Dhruv Nayak, a Full-Stack Developer specializing in HTML, CSS, JavaScript, React, Next.js, Node.js, PHP, and .NET.",
    creator: "@dhruvnayak2244",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'