import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Contact Us - Agra Sound",
  description:
    "Get in touch with Agra Sound for event services, rentals, and inquiries.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  )
}
