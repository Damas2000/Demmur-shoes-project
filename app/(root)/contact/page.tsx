"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const address = "Mimar Hayrettin, Tatlıkuyu Sokağı No:10, 34130 Fatih/İstanbul";
  const phone = "+90 546 530 90 10";
  const email = "info@demmurshoes.com";
  const whatsappLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;

  return (
    <div className="flex flex-col gap-10 px-10 py-8 bg-light">
      <h1 className="text-heading1-bold text-primary">Contact Us</h1>

      {/* Google Maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.810056669401!2d28.964124476450134!3d41.00753041947023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9906562c271%3A0xb0118714c63df523!2zTWltYXIgSGF5cmV0dGluLCBUYXRsxLFrdXl1IFNva2HEn8SxIE5vOjEwLCAzNDEzMCBGYXRpaC_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1715227455013!5m2!1sen!2str"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-md"
      ></iframe>

      {/* İletişim Bilgileri */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-heading3-bold text-primary">Contact Information</h2>
          <ul className="space-y-2 text-base-medium text-primary">
            <li className="flex items-center gap-3">
              <MapPin className="text-accent" />
              <span>{address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-accent" />
              <a href={`tel:${phone}`} className="hover:text-accent-dark">
                {phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-accent" />
              <a href={`mailto:${email}`} className="hover:text-accent-dark">
                {email}
              </a>
            </li>
          </ul>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-200"
          >
            <MessageCircle />
            Chat via WhatsApp
          </motion.a>
        </div>

        {/* İletişim Formu */}
        <form className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-heading3-bold text-primary">Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-grey-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-grey-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-grey-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Send
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
