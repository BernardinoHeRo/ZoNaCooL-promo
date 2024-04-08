import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber, message }) => {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      // Esto asegura que la animación se active cuando el componente se monte.
      setMounted(true);
   }, []);

   const handleClick = () => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
   };

   return (
      <div className={`fixed bottom-5 right-4 z-40 ${mounted ? 'animate-bounce' : ''}`}>
         <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-full p-3 shadow-md"
            onClick={handleClick}
         >
            <FaWhatsapp className="text-5xl text-green-400" />
         </a>
      </div>
   );
};

export default WhatsAppButton;
