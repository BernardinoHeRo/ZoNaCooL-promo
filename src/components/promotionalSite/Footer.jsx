import React from 'react';
import {FaFacebookSquare, FaYoutube} from "react-icons/fa";

const Footer = () => {
    // Obtener el año actual
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                    <h2 className="text-lg font-bold">Soporte</h2>
                    <ul>
                        <li><a href="#" className="text-blue-200 hover:text-blue-400">Centro de ayuda Zona Cool</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-blue-400">Nosotros</a></li>
                        <br/>
                        <li><strong>E-mail: </strong><a href="#"
                                                        className="text-blue-200 hover:text-blue-400">zona@gmail.com</a>
                        </li>
                        <li><strong>Dirección: </strong> Aldama #0, Alemán, San Andrés Zautla, Oaxaca.</li>
                        <br/>
                        <li><strong>Teléfonos</strong></li>
                        <li>Principal: 951-232-56-51</li>
                        <li>Secundario: 951-212-25-25</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-bold">Legales</h2>
                    <ul>
                        <li><a href="#" className="text-blue-200 hover:text-blue-400">Código de ética</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-blue-400">Términos y condiciones del
                            servicio</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-blue-400">Velocidad promedio de descarga en
                            hora pico</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-blue-400">Elemento x</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-blue-400">Elemento x</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-blue-400">Elemento x</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-blue-400">Elemento x</a></li>
                        <li><a href="#" className="text-blue-200 hover:text-blue-400">Elemento x</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-bold">Conecta con Nosotros</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-blue-400"><FaFacebookSquare
                            className="text-white hover:text-blue-400" size={30}/></a>
                        <a href="#" className="text-white hover:text-blue-400"><FaYoutube
                            className="text-white hover:text-blue-400" size={30}/></a>
                    </div>
                </div>
            </div>
            <div className="bg-black text-center py-4 text-lg">
                <small>&copy; {currentYear} <b>Coffeandcode</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    );
};

export default Footer;
