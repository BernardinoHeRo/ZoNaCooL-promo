import React from 'react';
import YouTubePlayer from "react-player/youtube";

const RouterConfig = () => {
   const data = [
      {
         "idDispositivo": 1,
         "nombreDispositivo": "Router WiFi",
         "fabricante": "TP-Link",
         "modelo": "Archer C7",
         "descripción": "Router inalámbrico de doble banda",
         "linkYouTube": "https://youtu.be/Vejlyg8Y8QY?si=gyXLEc0cFRXNmc3Y"
      },
      {
         "idDispositivo": 2,
         "nombreDispositivo": "Switch Gigabit",
         "fabricante": "Cisco",
         "modelo": "SG350-28",
         "descripción": "Switch de red de 28 puertos",
         "linkYouTube": "https://youtu.be/x91MPoITQ3I?si=1ynk4PFWgFdbwgW_"
      },
      {
         "idDispositivo": 3,
         "nombreDispositivo": "Firewall",
         "fabricante": "Fortinet",
         "modelo": "FortiGate 60F",
         "descripción": "Dispositivo de seguridad de red",
         "linkYouTube": "https://youtu.be/k7dy1B6bOeM?si=tLUy8GwxayZ8jNVX"
      },
      {
         "idDispositivo": 4,
         "nombreDispositivo": "Access Point",
         "fabricante": "Ubiquiti",
         "modelo": "UniFi AP AC LR",
         "descripción": "Punto de acceso WiFi de largo alcance",
         "linkYouTube": "https://youtu.be/WO2b03Zdu4Q?si=Sem4a-oQ5p9rVtPx"
      },
      {
         "idDispositivo": 5,
         "nombreDispositivo": "Router Empresarial",
         "fabricante": "Juniper Networks",
         "modelo": "SRX320",
         "descripción": "Router de seguridad para empresas",
         "linkYouTube": "https://youtu.be/qC0vDKVPCrw?si=eg3DBxdbCW1ZKyMd"
      }
   ];

   return (
      <div className="bg-gray-900">
         <h1
            className="pt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-neutral-50 font-medium mb-2">
            Configura la contraseña de tu router
         </h1>

         {data.map((dispositivo, index) => (
            <div key={dispositivo.idDispositivo}
                 className={`w-full sm:w-full md:w-[95%] lg:w-[85%] mx-auto flex flex-col md:flex-row items-center justify-center
                             bg-zc-first saturate-50 mb-4 rounded-2xl py-4 px-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
               {/* Texto descriptivo */}
               <div className="w-full md:w-[50%] mx-auto text-center">
                  <p className="font-extrabold text-xl sm:text-xl md:text-2xl xl:text-3xl text-zc-first-comp saturate-200 brightness-200 contrast-200">{dispositivo.fabricante} {dispositivo.modelo}</p>
                  <p className="font-extrabold text-lg sm:text-lg md:text-xl xl:text-2xl text-white">{dispositivo.nombreDispositivo}</p>
                  <p className="font-light text-base sm:text-base md:text-lg lg:text-xl text-gray-400 text-center pb-4 md:pb-0">{dispositivo.descripción}</p>
               </div>
               {/* Video */}
               <div className="w-full md:w-[50%] mx-auto flex items-center justify-center">
                  <YouTubePlayer
                     url={dispositivo.linkYouTube}
                     controls={true}
                     width='100%'
                  />
               </div>
            </div>
         ))}
      </div>
   );
}

export default RouterConfig;