"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  console.log(">pathname", pathname);

  useEffect(() => {
    if (pathname !== "/") {
      setIsScrolled(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    if (pathname && pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    { label: "Sobre", href: "/#sobre" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Galeria", href: "/#galeria" },
    { label: "Contacto", href: "/#contacto" },
  ];

  const NavLinks = ({ className = "" }) => (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`transition-colors ${
            isScrolled
              ? "text-stone-800 hover:text-stone-600"
              : "text-white hover:text-stone-200"
          } ${className}`}
        >
          {item.label}
        </a>
      ))}
    </>
  );

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
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${!isScrolled ? "text-white" : ""}`}
              >
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
            <a href="/">
              <Image
                src="/photos/logo.png"
                alt="Raiz Barber Studio Logo"
                width={120}
                height={40}
                className={`transition-all duration-300 ${
                  isScrolled ? "brightness-0" : "brightness-100 filter invert"
                }`}
              />
            </a>
          </div>

          {/* Book Now Button */}
          <Link href="https://noona.pt/raizbarberstudio" target="_blank">
            <Button
              variant={isScrolled ? "default" : "outline"}
              className={
                !isScrolled
                  ? "text-black border-white bg-white hover:bg-transparent hover:text-white"
                  : ""
              }
            >
              Reservar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
