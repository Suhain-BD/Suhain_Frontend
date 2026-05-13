"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiShoppingBag, FiSearch, FiMenu, FiX, FiUser } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop All", href: "/products" },

    { name: "Collections", href: "/collections" },
    { name: "Our Story", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FiMenu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="relative h-12 w-40 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/Suhain png.png"
            alt="SUHAIN"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-accent",
                pathname === link.href ? "text-accent" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* <button className="text-foreground/80 hover:text-accent transition-colors hidden sm:block">
            <FiSearch className="w-5 h-5" />
          </button> */}
          <Link href="/account" className="text-foreground/80 hover:text-accent transition-colors hidden sm:block">
            <FiUser className="w-5 h-5" />
          </Link>
          <Link href="/cart" className="relative group">
            <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
              <FiShoppingBag className="w-5 h-5 text-accent" />
            </div>
            <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-60 lg:hidden transition-transform duration-500",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-12">
            <div className="relative h-10 w-32">
              <Image
                src="/Suhain png.png"
                alt="SUHAIN"
                fill
                className="object-contain"
              />
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <FiX className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-medium tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col gap-6">
            <Link href="/account" className="flex items-center gap-3 text-lg font-medium">
              <FiUser className="w-6 h-6" /> Account
            </Link>
            <Link href="/search" className="flex items-center gap-3 text-lg font-medium">
              <FiSearch className="w-6 h-6" /> Search
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
