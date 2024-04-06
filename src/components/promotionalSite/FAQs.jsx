import React, {useState} from 'react';
import {FaFileContract, FaTools} from "react-icons/fa";
import {TbAntenna} from "react-icons/tb";
import {BsFillInfoSquareFill} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";



const data = {
    "preguntas_respuestas": [
        {
            "id": 1,
            "categoria": "Contratación",
            "pregunta": "¿Cómo puedo contratar el servicio de internet?",
            "respuesta": "Para contratar nuestro servicio, puedes visitar nuestra página web y seguir los pasos de registro..."
        },
        {
            "id": 2,
            "categoria": "Contratación",
            "pregunta": "¿Cuáles son los requisitos para contratar el servicio?",
            "respuesta": "Para contratar nuestro servicio, necesitarás..."
        },
        {
            "id": 3,
            "categoria": "Contratación",
            "pregunta": "¿Hay algún contrato a largo plazo?",
            "respuesta": "Ofrecemos planes tanto a corto como a largo plazo. Puedes elegir el que mejor se adapte a tus necesidades..."
        },
        {
            "id": 4,
            "categoria": "Contratación",
            "pregunta": "¿Cuál es el procedimiento de cancelación del servicio?",
            "respuesta": "Para cancelar el servicio, por favor ponte en contacto con nuestro equipo de atención al cliente..."
        },
        {
            "id": 5,
            "categoria": "Contratación",
            "pregunta": "¿Puedo cambiar mi plan de servicio en cualquier momento?",
            "respuesta": "Sí, puedes cambiar tu plan de servicio en cualquier momento a través de nuestra plataforma en línea..."
        },
        {
            "id": 6,
            "categoria": "Instalación",
            "pregunta": "¿Cómo puedo programar una instalación?",
            "respuesta": "Para programar una instalación, por favor contacta a nuestro equipo de soporte y programaremos una cita conveniente..."
        },
        {
            "id": 7,
            "categoria": "Instalación",
            "pregunta": "¿Qué equipo necesito para la instalación?",
            "respuesta": "Para la instalación necesitarás..."
        },
        {
            "id": 8,
            "categoria": "Instalación",
            "pregunta": "¿Cuánto tiempo lleva completar la instalación?",
            "respuesta": "El tiempo necesario para la instalación puede variar dependiendo de varios factores..."
        },
        {
            "id": 9,
            "categoria": "Instalación",
            "pregunta": "¿Qué debo hacer si experimento problemas durante la instalación?",
            "respuesta": "Si experimentas problemas durante la instalación, por favor ponte en contacto con nuestro equipo de soporte técnico..."
        },
        {
            "id": 10,
            "categoria": "Instalación",
            "pregunta": "¿Puedo instalar el equipo yo mismo?",
            "respuesta": "Sí, proporcionamos instrucciones detalladas para que puedas instalar el equipo tú mismo..."
        },
        {
            "id": 11,
            "categoria": "Servicio",
            "pregunta": "¿Qué debo hacer si experimento una interrupción del servicio?",
            "respuesta": "Si experimentas una interrupción del servicio, primero verifica..."
        },
        {
            "id": 12,
            "categoria": "Servicio",
            "pregunta": "¿Cómo puedo mejorar la velocidad de mi conexión?",
            "respuesta": "Para mejorar la velocidad de tu conexión, puedes..."
        },
        {
            "id": 13,
            "categoria": "Servicio",
            "pregunta": "¿Ofrecen servicio de atención al cliente las 24 horas?",
            "respuesta": "Sí, nuestro equipo de atención al cliente está disponible las 24 horas del día..."
        },
        {
            "id": 14,
            "categoria": "Servicio",
            "pregunta": "¿Cómo puedo configurar mi correo electrónico?",
            "respuesta": "Puedes configurar tu correo electrónico siguiendo estos pasos..."
        },
        {
            "id": 15,
            "categoria": "Servicio",
            "pregunta": "¿Qué hago si olvido mi contraseña de Wi-Fi?",
            "respuesta": "Si olvidas tu contraseña de Wi-Fi, puedes restablecerla siguiendo estos pasos..."
        },
        {
            "id": 16,
            "categoria": "Otros",
            "pregunta": "¿Cuál es el alcance de la red inalámbrica?",
            "respuesta": "El alcance de nuestra red inalámbrica varía dependiendo de varios factores..."
        },
        {
            "id": 17,
            "categoria": "Otros",
            "pregunta": "¿Puedo compartir mi conexión con otros dispositivos?",
            "respuesta": "Sí, puedes compartir tu conexión con otros dispositivos siguiendo estos pasos..."
        },
        {
            "id": 18,
            "categoria": "Otros",
            "pregunta": "¿Hay alguna tarifa adicional por exceder el límite de datos?",
            "respuesta": "Sí, si excedes el límite de datos de tu plan, se te cobrará una tarifa adicional..."
        },
        {
            "id": 19,
            "categoria": "Otros",
            "pregunta": "¿Qué opciones de pago están disponibles?",
            "respuesta": "Aceptamos varios métodos de pago, incluyendo tarjetas de crédito, transferencias bancarias y PayPal..."
        },
        {
            "id": 20,
            "categoria": "Otros",
            "pregunta": "¿Cómo puedo solicitar una factura?",
            "respuesta": "Puedes solicitar una factura a través de nuestra plataforma en línea..."
        }
    ]
}

// Objeto de iconos por categoría
const iconosPorCategoria = {
    "Contratación": <FaFileContract/>,
    "Instalación": <FaTools/>,
    "Servicio": <TbAntenna/>,
    "Otros": <BsFillInfoSquareFill/>
};


export const FaQs = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Contratación");
    const [preguntaAbierta, setPreguntaAbierta] = useState(null);

    const seleccionarCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria === categoriaSeleccionada ? null : categoria);
        // Resetear la pregunta abierta al cambiar de categoría
        setPreguntaAbierta(null);
    };

    const togglePregunta = (id) => {
        setPreguntaAbierta(preguntaAbierta === id ? null : id);
    };

    return (
        <div className='w-[95%] mx-auto'>
            {/* Categorías */}
            <div>
                <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-center py-5'>Preguntas frecuentes</h1>
                <ul className="flex flex-row items-center justify-center gap-1 md:gap-4 lg:gap-8">
                    {Object.entries(iconosPorCategoria).map(([categoria, icono], index) => (
                        <li
                            className={`w-[250px] md:w-[320px] flex flex-col items-center border-2 py-4 rounded-2xl ${categoriaSeleccionada === categoria ? 'bg-zc-fourth' : ''}`}
                            key={index}
                            onClick={() => seleccionarCategoria(categoria)}
                            style={{cursor: 'pointer'}}
                        >
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{icono}</span>
                            <span className="text-sm sm:text-base md:text-lg lg:text-xl">{categoria}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Preguntas */}
            <div className='mx-auto px-1 md:px-6 lg:px-8 w-[99%] md:w-[99%] lg:w-[80%] mb-10'>
                {categoriaSeleccionada &&
                    <ul className='w-full md:w-[95%] lg:w-[85%] xl:w-[75%] mx-auto mt-8 space-y-2'>
                        {data.preguntas_respuestas
                            .filter(item => item.categoria === categoriaSeleccionada)
                            .map(item => (
                                <div key={item.id}
                                     className='w-full transition-all duration-200 bg-white border border-gray-400 shadow-lg hover:bg-zc-fourth
                                     rounded-xl'>
                                    <button type="button" className='w-full px-4 py-5 md:p-6' onClick={() => togglePregunta(item.id)}>
                                        <span className='flex flex-row items-center justify-between'>
                                            <p className='text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black '>{item.pregunta}</p>
                                            <strong className='ml-2 text-3xl font-bold text-zc-neutral-400'><IoIosArrowDown/></strong>
                                        </span>
                                    </button>
                                    {preguntaAbierta === item.id &&
                                        <div className='px-4 pb-4 md:px-6 sm:pb-6'>
                                            <p className='text-justify text-sm sm:text-base md:text-lg lg:text-xl'>{item.respuesta}</p>
                                        </div>
                                    }
                                </div>
                            ))}
                    </ul>
                }
            </div>
        </div>
    );
};

export default FaQs;