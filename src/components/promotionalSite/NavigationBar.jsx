import React, {useEffect, useState, useRef} from 'react';
import {IoMdClose, IoMdMenu} from 'react-icons/io';
import navLogo from './../../assets/react.svg';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [items, setItems] = useState([]);
   const [activeLink, setActiveLink] = useState(null);

   const menuRef = useRef();

   useEffect(() => {
      const menuItems = [
         {id: 1, text: 'Inicio', url: '/'},
         {id: 2, text: 'Paquetes', url: '/plan'},
         {id: 3, text: 'Tienda', url: '/store'},
         {id: 4, text: 'Nosotros', url: '/about'},
         {id: 5, text: 'Ayuda', url: '/help'},
         {id: 6, text: 'Soporte', url: '/support'},
         {id: 7, text: 'Contacto', url: '/contact'},
      ];

      setItems(menuItems);

      const handleClickOutside = (event) => {
         if (menuRef.current && !menuRef.current.contains(event.target)) {
            // Verifica si isOpen es true para asegurarnos de que estamos cerrando un menú abierto
            if (isOpen) {
               setIsOpen(false);
            }
         }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [isOpen]);

   useEffect(() => {
      // Recuperar el enlace activo almacenado
      const storedActiveLink = localStorage.getItem('activeLink');
      if (storedActiveLink) {
         setActiveLink(parseInt(storedActiveLink));
      }
   }, []);

   useEffect(() => {
      // Almacenar el enlace activo en el almacenamiento del navegador
      localStorage.setItem('activeLink', activeLink);
   }, [activeLink]);

   const handleLinkClick = (id) => {
      setActiveLink(id);
      setIsOpen(false); // Cerrar el menú al hacer clic en un enlace
   };

   return (
      <nav className="bg-zc-first sticky top-0 z-50">
         <div className="w-[99%] mx-auto pl-4 pr-2 sm:px-4 lg:px-4">
            <div className="flex items-center justify-between lg:justify-around h-16">
               <div className="flex items-center">
                  <Link to="/" className='flex flex-row gap-4 items-center'>
                     <img className="block h-8 w-auto" src={navLogo} alt="Logo"/>
                     <span className="mr-4 text-white text-2xl hover:text-zc-third hover:saturate-200 brightness-200">Zona Cool</span>
                  </Link>
                  <div className="hidden lg:block">
                     <div className="ml-10 flex items-baseline space-x-4">
                        {items.map((item) => (
                           <Link
                              key={item.id}
                              to={item.url}
                              className={`text-sm sm:text-base md:text-lg lg:text-xl font-medium px-3 py-2 rounded-md ${
                                 activeLink === item.id
                                    ? 'text-zc-third saturate-200 brightness-200'
                                    : 'text-zc-neutral-200 hover:text-zc-third hover:saturate-200 brightness-200'
                              }`}
                              onClick={() => handleLinkClick(item.id)}
                           >
                              {item.text}
                           </Link>
                        ))}
                        <button
                           className="text-zc-neutral-200 hover:text-white px-2 py-1 rounded-md text-base font-medium border-2 border-blue-600">
                           Iniciar sesión
                        </button>
                     </div>
                  </div>
               </div>
               <div className="-mr-2 flex lg:hidden">
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                     {isOpen ? <IoMdClose className="block h-6 w-6"/> : <IoMdMenu className="block h-6 w-6"/>}
                  </button>
               </div>
            </div>
         </div>
         <div ref={menuRef}
              className={`${isOpen ? 'block' : 'hidden'} lg:hidden absolute top-16 inset-x-0 z-50 bg-gray-900 text-center h-screen`}>
            <div className="px-2 pt-2 pb-3 sm:px-3">
               {items.map((item) => (
                  <Link
                     key={item.id}
                     to={item.url}
                     className="text-gray-300 hover:text-zc-third hover:saturate-200 hover:brightness-200 block px-3 py-2 rounded-md text-base font-medium"
                     onClick={() => handleLinkClick(item.id)}
                  >
                     {item.text}
                  </Link>
               ))}
               <button
                  className="text-gray-300 hover:text-zc-third hover:saturate-200 hover:brightness-200 px-2 py-1 rounded-md text-base font-medium border-2 border-blue-700">
                  Iniciar sesión
               </button>
            </div>
         </div>
      </nav>
   );
};

export default NavigationBar;
