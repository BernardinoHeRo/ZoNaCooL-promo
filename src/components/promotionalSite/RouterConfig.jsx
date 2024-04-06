import React from 'react';

const RouterConfig = () => {
    const data = [
        {
            "idDispositivo": 1,
            "nombreDispositivo": "Router WiFi",
            "fabricante": "TP-Link",
            "modelo": "Archer C7",
            "descripción": "Router inalámbrico de doble banda",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 2,
            "nombreDispositivo": "Switch Gigabit",
            "fabricante": "Cisco",
            "modelo": "SG350-28",
            "descripción": "Switch de red de 28 puertos",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 3,
            "nombreDispositivo": "Firewall",
            "fabricante": "Fortinet",
            "modelo": "FortiGate 60F",
            "descripción": "Dispositivo de seguridad de red",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 4,
            "nombreDispositivo": "Access Point",
            "fabricante": "Ubiquiti",
            "modelo": "UniFi AP AC LR",
            "descripción": "Punto de acceso WiFi de largo alcance",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 5,
            "nombreDispositivo": "Router Empresarial",
            "fabricante": "Juniper Networks",
            "modelo": "SRX320",
            "descripción": "Router de seguridad para empresas",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        }
    ];

    return (
        <div className="bg-gray-900">

            {/* Contenedor */}
            {data.map((dispositivo, index) => (
                <div key={dispositivo.idDispositivo}
                     className={`w-full md:w-[75%] grid mx-auto grid-cols-1 lg:grid-cols-12 lg:pt-28 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Texto descriptivo */}
                        <div className="place-self-center lg:col-span-5">
                            <div className='text-center'>
                                <p className="max-w-2xl text-2xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl dark:text-white">{dispositivo.fabricante} {dispositivo.modelo}</p>
                                <p className="max-w-2xl text-lg font-extrabold leading-none tracking-tight md:text-xl xl:text-2xl dark:text-white">{dispositivo.nombreDispositivo}</p>
                            </div>
                            <p className="mt-3 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">{dispositivo.descripción}</p>
                        </div>

                        {/* Video */}
                        <div className="lg:mt-0 lg:col-span-7 lg:flex justify-center">
                            <div className="video-container">
                                <iframe
                                    width="560"
                                    height="315"
                                    src={dispositivo.linkYouTube}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default RouterConfig;
