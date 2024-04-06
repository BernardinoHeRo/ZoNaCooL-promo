import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const examplePackagesData = {
    packages: [
        {
            idPlan: 1,
            title: "Básico",
            folio: "xxxxxxxxxxx",
            speed: "2 Mb/s",
            features: ["Navega por internet", "Redes Sociales", "Ver videos en calidad estandar"],
            price: "150",
            actionText: "Seleccionar",
            color: {
                primary: "#F9A825",
                secondary: "#23a3af"
            }
        },
        {
            idPlan: 2,
            title: "Estandar",
            folio: "xxxxxxxxxxx",
            speed: "4 Mb/s",
            features: ["Navega por internet", "Redes Sociales", "Ver videos en calidad HD", "Estudia/Trabaja en linea", "Streaming (Calidad media) 1 TV"],
            price: "$280",
            actionText: "Seleccionar",
            color: {
                primary: "#2F80ED",
                secondary: "#000000"
            }
        },
        {
            idPlan: 3,
            title: "Plus",
            folio: "xxxxxxxxxxx",
            speed: "6 Mb/s",
            features: ["Navega por internet", "Redes Sociales", "Ver videos en calidad HD", "Estudia/Trabaja en linea", "Streaming (Calidad media) 1 TV"],
            price: "$280",
            actionText: "Seleccionar",
            color: {
                primary: "#4CAF50",
                secondary: "#000000"
            }
        },
        {
            idPlan: 4,
            title: "Pro",
            folio: "xxxxxxxxxxx",
            speed: "8 Mb/s",
            features: ["Navega por internet", "Redes Sociales", "Ver videos en calidad HD", "Estudia/Trabaja en linea", "Streaming (Calidad media) 1 TV"],
            price: "$280",
            actionText: "Seleccionar",
            color: {
                primary: "#7B1FA2",
                secondary: "#000000"
            }
        },
        {
            idPlan: 5,
            title: "Ultimate",
            folio: "xxxxxxxxxxx",
            speed: "10 Mb/s",
            features: ["Navega por internet", "Redes Sociales", "Ver videos en calidad HD", "Estudia/Trabaja en linea", "Streaming (Calidad media) 1 TV"],
            price: "$280",
            actionText: "Seleccionar",
            color: {
                primary: "#33691E",
                secondary: "#000000"
            }
        },
        // Otros paquetes aquí...
    ]
};

const PromotionalPlans = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Número de elementos a mostrar en un carrusel
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // Cambia a 1024px o menos
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // Cambia a 600px o menos
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="mt-6 w-[98%] mx-auto px-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">Nuestros
                mejores paquetes</h1>
            <p className="text-blue-500 font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] mb-8">basados en tus necesidades</p>

            <Slider {...settings}>
                {examplePackagesData.packages.map((pkg) => (

                    <div key={pkg.idPlan}
                         className="bg-white rounded-3xl drop-shadow-lg flex justify-between flex-col mb-3 border-x-transparent border-x-4">
                        <div className="w-full pt-2 rounded-t-2xl overflow-hidden"
                             style={{backgroundColor: pkg.color.primary}}>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center [text-shadow:_0_3px_0_rgb(0_0_0_/_50%)]">{pkg.title}</h3>
                            <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-2 text-center">
                                <strong>Folio:</strong> {pkg.folio}
                            </h5>
                        </div>
                        <div className="bg-black text-white py-2 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            <sup className="text-xs sm:text-sm md:text-base lg:text-lg">Hasta</sup> {pkg.speed}
                        </div>
                        <ul className="list-disc list-inside mb-4">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="list-none px-6 text-center text-base sm:text-lg md:text-xl">{feature}</li>
                            ))}
                            {Array.from({length: 6 - pkg.features.length}, (_, i) => (
                                <li key={pkg.features.length + i}
                                    className="list-none px-6 text-center text-base sm:text-lg md:text-xl">x</li>
                            ))}
                        </ul>
                        <div className="mt-4 text-center">
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-500 mb-6">
                                {pkg.price}
                                <sup className="text-base sm:text-lg md:text-xl lg:text-2xl">/mes</sup>
                            </p>
                            <button className="px-4 text-2xl sm:text-3xl rounded-2xl mb-2 font-bold text-white"
                                    style={{backgroundColor: pkg.color.primary}}>
                                {pkg.actionText}
                            </button>
                        </div>
                    </div>

                ))}
            </Slider>
        </div>
    );
};

export default PromotionalPlans;