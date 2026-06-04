'use client';

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = '1234567890',
  message = 'Hello! I would like to know more about your services.',
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?${new URLSearchParams({ text: message }).toString()}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[var(--z-sticky)] flex items-center justify-center shadow-lg"
      style={{
        bottom: 'var(--space-6)',
        right: 'var(--space-6)',
        width: '56px',
        height: '56px',
        background: '#25D366',
        borderRadius: 'var(--radius-full)',
        boxShadow: 'var(--shadow-lg)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: 1.5,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </motion.a>
  );
}
