"use client";

import { Button } from "@/components/ui/button";
import { menuLinks } from "@/lib/links";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center border-b  bg-background z-50">
        <div>
          <Button onClick={toggleMenu} variant="ghost" className="lg:hidden">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>

        <Link href="/">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={100}
            height={24}
            className="h-10"
          />
        </Link>

        <Button variant="ghost">
          <Search size={32} />
        </Button>
      </header>

      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-primary z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto">
          <div className="mb-[72px]"></div>
          <nav className="flex flex-col">
            {menuLinks.map((links) => (
              <Link
                key={links.id}
                href={`/${links.id}`}
                className="text-primary-foreground font-semibold text-lg px-10 py-6 border-b border-ring"
                onClick={toggleMenu}
              >
                {links.label}
              </Link>
            ))}
            <Button
              className="mt-8 mx-10 py-7 font-semibold text-lg "
              variant="secondary"
            >
              LOGIN
            </Button>
          </nav>
        </div>
      </div>
      <div className=" mb-[72px]"></div>
    </>
  );
}
