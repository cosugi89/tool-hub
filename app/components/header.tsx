"use client";

import { Button } from "@/components/ui/button";
import { menuLinks } from "@/data/links";
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
        <Button onClick={toggleMenu} variant="ghost" className="lg:hidden">
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </Button>

        <div className="flex">
          <Link href="/">
            <Image
              src="https://interfaceingame.com/wp-content/themes/interface-in-game/dist/assets/static/images/logo.svg"
              alt=""
              width={100}
              height={100}
              className="h-8"
            />
          </Link>
          <div className="hidden lg:block">
            {menuLinks.map((links) => (
              <Button key={links.id} variant="ghost" asChild>
                <Link href={`/${links.id}`} className="font-semibold">
                  {links.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <Button variant="ghost" className="lg:hidden">
          <Search size={32} />
        </Button>

        <Button className="font-semibold hidden lg:block" variant="secondary">
          LOGIN
        </Button>
      </header>

      {/* ハンバーガーメニューの中身 */}
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
