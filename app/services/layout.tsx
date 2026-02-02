// app/Services/layout.tsx
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export const metadata = {
  title: "Our Services - Agra Sound",
  description: "Check out the services we provide for events and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
