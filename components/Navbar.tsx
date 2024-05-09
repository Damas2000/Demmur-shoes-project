"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [languageMenu, setLanguageMenu] = useState(false);

  const toggleDropdownMenu = () => {
    setDropdownMenu(!dropdownMenu);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenu(!languageMenu);
  };

  const handleSearch = () => {
    if (query) {
      router.push(`/search/${query}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <nav className="container mx-auto flex items-center justify-between p-4 max-sm:px-2 text-white">
        {/* Logo */}
        <Link href="/">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src="/logo.png"
              alt="DemmurShoes"
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium">
          <li>
            <Link
              href="/"
              className={`hover:text-accent transition-colors duration-200 ${
                pathname === "/" && "text-accent"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className={`hover:text-accent transition-colors duration-200 ${
                pathname === "/wishlist" && "text-accent"
              }`}
            >
              Wishlist
            </Link>
          </li>
          <li>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className={`hover:text-accent transition-colors duration-200 ${
                pathname === "/orders" && "text-accent"
              }`}
            >
              Orders
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <motion.div
          className="relative flex items-center w-full max-w-xs md:max-w-sm lg:max-w-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <input
            className="w-full px-4 py-2 text-primary rounded-full shadow-md outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            disabled={query === ""}
            onClick={handleSearch}
            className="absolute right-2 p-1 rounded-full bg-accent hover:bg-accent-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search className="h-5 w-5 text-white" />
          </button>
        </motion.div>

        {/* Right-Side Menu */}
        <div className="relative flex items-center gap-5">
          <Link
            href="/cart"
            className="hidden md:flex items-center gap-2 border border-accent rounded-full px-4 py-2 hover:bg-accent hover:text-white transition-all duration-200"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart ({cart.cartItems.length})</span>
          </Link>

          {/* Language Selector */}
          <div className="relative">
            <motion.button
              className="p-2 rounded-full border border-accent hover:bg-accent hover:text-white transition-all duration-200"
              onClick={toggleLanguageMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🌐
            </motion.button>
            {languageMenu && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-0 top-10 flex flex-col gap-2 p-2 bg-white text-primary border border-accent shadow-lg rounded-lg"
              >
                <li>
                  <button
                    className="hover:text-accent transition-colors duration-200"
                    onClick={() => setLanguageMenu(false)}
                  >
                    Türkçe
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-accent transition-colors duration-200"
                    onClick={() => setLanguageMenu(false)}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-accent transition-colors duration-200"
                    onClick={() => setLanguageMenu(false)}
                  >
                    العربية
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-accent transition-colors duration-200"
                    onClick={() => setLanguageMenu(false)}
                  >
                    Русский
                  </button>
                </li>
              </motion.ul>
            )}
          </div>

          <Menu
            className="cursor-pointer lg:hidden h-6 w-6"
            onClick={toggleDropdownMenu}
          />

          {dropdownMenu && (
            <motion.ul
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-12 right-0 flex flex-col gap-3 p-4 bg-white text-primary shadow-lg rounded-lg"
            >
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-colors duration-200"
                  onClick={() => setDropdownMenu(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={user ? "/wishlist" : "/sign-in"}
                  className="hover:text-accent transition-colors duration-200"
                  onClick={() => setDropdownMenu(false)}
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href={user ? "/orders" : "/sign-in"}
                  className="hover:text-accent transition-colors duration-200"
                  onClick={() => setDropdownMenu(false)}
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="flex items-center gap-3 border border-accent rounded-full px-4 py-2 hover:bg-accent hover:text-white transition-all duration-200"
                  onClick={() => setDropdownMenu(false)}
                >
                  <ShoppingCart />
                  <span>Cart ({cart.cartItems.length})</span>
                </Link>
              </li>
            </motion.ul>
          )}

          {user ? (
            <UserButton afterSignOutUrl="/sign-in" />
          ) : (
            <Link href="/sign-in">
              <motion.div
                className="p-2 rounded-full border border-accent hover:bg-accent hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
