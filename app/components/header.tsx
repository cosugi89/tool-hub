"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { itemlist } from "@/data/item";
import { menuLinks } from "@/data/links";
import { Menu, SearchIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    setIsSearchMenuOpen(false);
  };

  const toggleSearchMenu = () => {
    setIsSearchMenuOpen(!isSearchMenuOpen);
    setIsHamburgerMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsHamburgerMenuOpen(false);
    setIsSearchMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 p-4 items-center border-b bg-background z-50">
        <div className="flex justify-between w-[95%] mx-auto">
          <Button
            onClick={toggleHamburgerMenu}
            variant="ghost"
            className="lg:hidden"
          >
            {isHamburgerMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </Button>

          <div className="flex space-x-8">
            <Link href="/" onClick={closeAllMenus}>
              <Image
                src="https://interfaceingame.com/wp-content/themes/interface-in-game/dist/assets/static/images/logo.svg"
                alt=""
                width={30}
                height={100}
                className="h-8"
              />
            </Link>
            <div className="hidden lg:block">
              {menuLinks.map((links) => (
                <Button
                  key={links.id}
                  variant="ghost"
                  asChild
                  onClick={closeAllMenus}
                >
                  <Link href={`/${links.id}`} className="font-semibold">
                    {links.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex space-x-8">
            <Button onClick={toggleSearchMenu} variant="ghost">
              {isSearchMenuOpen ? <X /> : <SearchIcon />}
            </Button>

            <Button
              className="font-semibold hidden lg:block"
              variant="secondary"
              onClick={closeAllMenus}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </header>

      {/* ハンバーガーメニューの中身 */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-primary z-40 transform transition-transform duration-300 ease-in-out ${
          isHamburgerMenuOpen ? "translate-y-0" : "-translate-y-full"
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
                onClick={closeAllMenus}
              >
                {links.label}
              </Link>
            ))}
            <Button
              className="mt-8 mx-10 py-7 font-semibold text-lg "
              variant="secondary"
              onClick={closeAllMenus}
            >
              LOGIN
            </Button>
          </nav>
        </div>
      </div>

      {/* 検索メニューの中身 */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-primary z-40 transform transition-transform duration-300 ease-in-out mt-[40px] ${
          isSearchMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Command className="p-8">
          <CommandInput
            placeholder="気になるキーワードで検索"
            className="h-20"
          />
          <CommandList className="border-none">
            <CommandEmpty>他のキーワードをお試し下さい。</CommandEmpty>
            <CommandGroup className="mt-4">
              {itemlist.map((item) => (
                <CommandItem
                  key={item.label}
                  value={item.label}
                  className="font-semibold text-lg"
                  // クリックしたらメニューが閉じ、リンクに跳ぶ機能を追加する
                >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </div>
      <div className="mb-[72px]"></div>
    </>
  );
}
