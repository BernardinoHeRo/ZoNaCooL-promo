import React from 'react'

export const TermsAndConditions = () => {
    return (
        <div className="mt-7 flex items-center flex-col">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Términos y condiciones</span>
            <ul className="text-xs sm:text-sm px-4">
                <li>
                    <p className="text-center">Las velocidades promedio de descarga pueden variar en hora pico.</p>
                </li>
                <li>
                    <p className="text-center">Paquetes y velocidades sujetas a cobertura de ZoNa CooL.</p>
                </li>
                <li>
                    <p className="text-center">Las velocidades mostradas en los paquetes corresponden a conexiones
                        asimétricas, siendo la
                        velocidad descarga la velocidad maxima alcanzable y la velocidad de subida siendo una velocidad
                        maxima de un megabits por segundo.</p>
                </li>
                <li>
                    <p className="text-center">Los Megabits por segundo (Mbps) corresponde a la velocidad máxima de
                        transferencia de datos
                        (Mbps)
                        de bajada ofrecida y alcanzable, la cual podrá variar en función de las condiciones técnicas de
                        equipo del suscriptor, condiciones atmosféricas, interferencia en el espectro radio eléctrico
                        correspondiente al canal de la conexión inalámbrica entre el CPE del suscriptor y la radio base
                        (AP)
                        de ZoNa CooL, asi como la distancia entre el domicilio del suscriptor y la la radio base (AP) de
                        ZoNa Cool.</p>
                </li>
            </ul>
        </div>
    )
}
export default TermsAndConditions