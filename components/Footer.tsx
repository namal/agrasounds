"use client"

import { Phone } from "lucide-react";
import Image from "next/image"
import React from "react"

export default function Footer() {

    const whatsappNumber = '971528211284';

  return (
    <footer className="bg-zinc-600 text-zinc-300 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Section 1: Logo & Description */}
        <div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
              src="/img/Logo.png"
              width={120}
              height={120}
              alt="Agra Sound Logo"
            />

            <p className="text-sm mt-4 leading-relaxed">
              When you need great sound at the right price for an important
              event, contact us for a quick quote. We provide reliable delivery
              services across the UAE and specialize in renting high-end audio
              and video equipment in Dubai.
            </p>
          </div>
          <div className="flex flex-raw space-x-4 mt-6 justify-center md:justify-start">
            <Image
              src="/img/icon/facebook.png"
              width={60}
              height={60}
              alt="facebook"
              className="mt-6"
            />
            <Image
              src="/img/icon/instagram(1).png"
              width={60}
              height={60}
              alt="Instagram"
              className="mt-6"
            />
            <Image
              src="/img/icon/tiktok.png"
              width={60}
              height={60}
              alt="Ticket Icon"
              className="mt-6"
            />
            <Image
              src="/img/icon/youtube.png"
              width={60}
              height={60}
              alt="Ticket Icon"
              className="mt-6"
            />
                     <Image
              src="/img/icon/whatsapp.png"
              width={60}
              height={60}
              alt="WhatsApp Icon"
              className="mt-6"
            />
          </div>
        </div>

        {/* Section 2: Privacy */}
        <div className="md:text-start text-center pt-6 md:pt-0">
          <h4 className="text-white font-semibold mb-12 text-2xl uppercase">
            Quick Links
          </h4>

          <div className="space-y-2 uppercase">
            <a
              href="/services"
              className="text-2xl hover:text-amber-400 block border-b-4 border-zinc-500 pb-6"
            >
              Service
            </a>

            <a
              href="/privacy"
              className="text-2xl hover:text-amber-400 block border-b-4 border-zinc-500 pb-6"
            >
              Equipment
            </a>

            <a
              href="/privacy"
              className="text-2xl hover:text-amber-400 block border-b-4 border-zinc-500 pb-6"
            >
              Events
            </a>

            <a href="/privacy" className="text-2xl hover:text-amber-400 block">
              Contact
            </a>
          </div>
        </div>

        {/* Section 3: Terms */}
        <div className="md:text-start  pt-6 md:pt-0">
          <h4 className="text-white font-semibold mb-3 text-2xl uppercase text-center">
            CONTACT US
          </h4>
          <div className="space-y-2 flex items-center flex-row justify-start md:justify-start gap-6">
            <Image
              src="/img/icon/whatsapp.png"
              width={40}
              height={60}
              alt="Phone Icon"
              className="mt-6"
            />
  
            <p className="text-2xl mt-4 items-center justify-start hover:text-amber-400 cursor-pointer">          
              <a href={`tel:+${whatsappNumber}`} >
                  <div>
                    <div className="  hover:text-amber-400">+971 52 821 1284</div>
                  </div>
                </a></p>
          </div>
          <div className="space-y-2 flex items-center flex-row justify-start md:justify-start gap-6">
            <Image
              src="/img/icon/email.png"
              width={40}
              height={60}
              alt="Phone Icon"
              className="mt-6"
            />
            <p className="text-2xl mt-4 items-center justify-start hover:text-amber-400 cursor-pointer">agrapulathisi@gmail.com</p>
          </div>
          <div className="space-y-2 flex items-center flex-row justify-start md:justify-start gap-6">
            <Image
              src="/img/icon/location.png"
              width={40}
              height={60}
              alt="Phone Icon"
              className="mt-6"
            />
            <p className="text-2xl mt-4 items-start justify-start">Rolla Streat, Burdubai, Dubai, UAE.</p>
          </div>
          <div className="space-y-2 flex items-center flex-row justify-start md:justify-start gap-6">
               <Image
              src="/img/icon/phone-call.png"
              width={40}
              height={60}
              alt="WhatsApp Icon"
              className="mt-6"
            />
             <p className="text-2xl mt-4 items-center justify-center hover:text-amber-400 cursor-pointer">+971 50 123 4567</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
