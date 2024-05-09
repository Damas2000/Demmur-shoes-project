// components/WhatsappButton.tsx
"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const WhatsappButton = () => {
  const whatsappNumber = "905465309010"; // Numara yalnızca rakamlarla yazılmalı
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Link href={whatsappLink} target="_blank">
      <motion.div
        className="fixed bottom-8 right-8 z-50 bg-green-600 rounded-full p-4 shadow-lg cursor-pointer hover:bg-green-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="WhatsApp Support"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </motion.div>
    </Link>
  );
};

export default WhatsappButton;
