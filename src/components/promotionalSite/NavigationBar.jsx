import React, {useEffect, useState} from 'react';
import {IoMdClose, IoMdMenu} from "react-icons/io";
import navLogo from './../../assets/react.svg';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Lista de menús
        const menuItems = [
            {id: 1, text: 'Inicio', url: '#'},
            {id: 2, text: 'Paquetes', url: '#'},
            {id: 3, text: 'Tienda', url: '#'},
            {id: 4, text: 'Nosotros', url: '#'},
            {id: 5, text: 'Ayuda', url: '#'},
            {id: 6, text: 'Soporte', url: '#'},
            {id: 7, text: 'Contacto', url: '#'},
        ];

        // Cargar la lista de menús
        setItems(menuItems);
    }, []);

    return (
        <nav className="bg-gray-900 sticky top-0 z-50">

            <div className="w-[99%] mx-auto pl-4 pr-2 sm:px-4 lg:px-4">
                <div className="flex items-center justify-between lg:justify-around h-16">

                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="block h-8 w-auto" src={navLogo} alt="Logo"/>
                        </div>

                        <div className=''>
                            <span className='mr-4 text-white text-2xl [text-shadow:_0_5px_0_rgb(0_0_0_/_50%)]'
                                  style={{}}>Zona Cool</span>
                        </div>

                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {items.map(item => (
                                    <a key={item.id} href={item.url}
                                       className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{item.text}</a>
                                ))}
                                <button
                                    className='text-gray-300 hover:text-white px-2 py-1 rounded-md text-base font-medium border-2 border-blue-700'>Iniciar
                                    sesión
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="-mr-2 flex lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out">
                            {isOpen ? <IoMdClose className="block h-6 w-6"/> : <IoMdMenu className="block h-6 w-6"/>}
                        </button>
                    </div>
                </div>
            </div>


            <div
                className={`${isOpen ? 'block' : 'hidden'} lg:hidden absolute top-16 inset-x-0 z-50 bg-gray-900 text-center h-screen`}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    {items.map(item => (
                        <a key={item.id} href={item.url}
                           className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{item.text}</a>
                    ))}
                    <button
                        className='text-gray-300 hover:text-white px-2 py-1 rounded-md text-base font-medium border-2 border-blue-700'>Iniciar
                        sesión
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;