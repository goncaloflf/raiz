"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ]

  const NavLinks = ({ className = "" }) => (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`transition-colors ${
            isScrolled ? "text-stone-800 hover:text-stone-600" : "text-white hover:text-stone-200"
          } ${className}`}
        >
          {item.label}
        </a>
      ))}
    </>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`md:hidden ${!isScrolled ? "text-white" : ""}`}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col gap-4">
              <NavLinks className="text-stone-800" />
            </SheetContent>
          </Sheet>

          {/* Desktop Left Links */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/465200842_905813771543059_5541720441830737607_n-removebg-preview-CgqDM8mIsnTW5B4GqcvMwmTRlKJ70Y.png"
              alt="Raiz Barber Studio Logo"
              width={120}
              height={40}
              className={`transition-all duration-300 ${isScrolled ? "brightness-0" : "brightness-100 filter invert"}`}
            />
          </div>

          {/* Book Now Button */}
          <Button
            variant={isScrolled ? "default" : "outline"}
            className={!isScrolled ? "text-black border-white bg-white hover:bg-transparent hover:text-white" : ""}
          >
            Reservar
          </Button>
        </div>
      </div>
    </header>
  )
}

