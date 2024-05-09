"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-5 gap-8">
        {/* Logo ve Açıklama */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <img
                src="/logo.png"
                alt="DemmurShoes"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </motion.div>
          <p className="text-small-medium text-grey-2">
            Demmur Shoes: Premium quality footwear for all your fashion needs.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <h3 className="text-heading4-bold">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-accent transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/wishlist"
                className="hover:text-accent transition-colors duration-200"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="hover:text-accent transition-colors duration-200"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-accent transition-colors duration-200"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <h3 className="text-heading4-bold">Follow Us</h3>
          <ul className="flex gap-4">
            <li>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-accent transition-colors duration-200"
              >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12-6.627 0-12 5.373-12 12 0 6.014 4.388 10.986 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.641c0-3.016 1.791-4.688 4.533-4.688 1.313 0 2.686.236 2.686.236v2.953h-1.514c-1.491 0-1.956.927-1.956 1.876v2.263h3.328l-.532 3.469h-2.796v8.385c5.737-.868 10.125-5.84 10.125-11.854z"/></svg>

              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-accent transition-colors duration-200"
              >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.975.976 1.246 2.243 1.308 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.062 1.366-.332 2.633-1.308 3.608-.976.975-2.243 1.246-3.608 1.308-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.069c-1.366-.062-2.633-.332-3.608-1.308-.975-.976-1.246-2.243-1.308-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.069-4.849c.062-1.366.332-2.633 1.308-3.608.976-.975 2.243-1.246 3.608-1.308 1.265-.057 1.645-.069 4.849-.069m0-2.163c-3.259 0-3.667.014-4.947.072-1.272.058-2.136.247-2.879.528-.785.295-1.451.684-2.121 1.354-.67.67-1.059 1.336-1.354 2.121-.281.742-.47 1.606-.528 2.879-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.272.247 2.136.528 2.879.295.785.684 1.451 1.354 2.121.67.67 1.336 1.059 2.121 1.354.742.281 1.606.47 2.879.528 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.272-.058 2.136-.247 2.879-.528.785-.295 1.451-.684 2.121-1.354.67-.67 1.059-1.336 1.354-2.121.281-.742.47-1.606.528-2.879.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.272-.247-2.136-.528-2.879-.295-.785-.684-1.451-1.354-2.121-.67-.67-1.336-1.059-2.121-1.354-.742-.281-1.606-.47-2.879-.528-1.28-.058-1.688-.072-4.947-.072z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>

              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-accent transition-colors duration-200"
              >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.923 2.206-4.923 4.923 0 .386.043.762.127 1.124-4.092-.205-7.719-2.165-10.141-5.144-.424.729-.667 1.577-.667 2.482 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.031-.928-.088.627 1.956 2.444 3.379 4.6 3.419-1.684 1.32-3.808 2.108-6.115 2.108-.398 0-.79-.023-1.177-.069 2.179 1.397 4.768 2.212 7.548 2.212 9.051 0 14.002-7.498 14.002-13.986 0-.213-.005-.425-.015-.636.961-.695 1.797-1.562 2.457-2.549z"/></svg>

              </motion.a>
            </li>
          </ul>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.810056669401!2d28.964124476450134!3d41.00753041947023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9906562c271%3A0xb0118714c63df523!2zTWltYXIgSGF5cmV0dGluLCBUYXRsxLFrdXl1IFNva2HEn8SxIE5vOjEwLCAzNDEzMCBGYXRpaC_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1715227455013!5m2!1sen!2str" 
          width="100%" 
          height="200" 
          style={{ border: 0 }}
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <h3 className="text-heading4-bold">Contact Us</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-small-medium">
              <span className="font-semibold">Address:</span> Mimar Hayrettin, Tatlıkuyu Sokağı No:10, 34130 Fatih/İstanbul
            </li>
            <li className="text-small-medium">
              <span className="font-semibold">Phone:</span> +90 546 530 90 10
            </li>
            <li className="text-small-medium">
              <span className="font-semibold">Email:</span>{" "}
              info@demmurshoes.com
            </li>
          </ul>

        </div>
      </div>

      <hr className="my-8 border-t border-grey-1" />
      <div className="text-center text-small-medium text-grey-2">
        &copy; {year} Demmur Shoes. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
