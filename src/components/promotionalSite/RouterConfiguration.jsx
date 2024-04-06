import React from 'react';
import { FaYoutube } from "react-icons/fa";
import TableRouterConfig from "./TableRouterConfig.jsx";

const RouterConfiguration = () => {
    const data = [
        {
            "idDispositivo": 1,
            "nombreDispositivo": "Router WiFi",
            "fabricante": "TP-Link",
            "modelo": "Archer C7",
            "descripción": "Router inalámbrico de doble banda",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 2,
            "nombreDispositivo": "Switch Gigabit",
            "fabricante": "Cisco",
            "modelo": "SG350-28",
            "descripción": "Switch de red de 28 puertos",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 3,
            "nombreDispositivo": "Firewall",
            "fabricante": "Fortinet",
            "modelo": "FortiGate 60F",
            "descripción": "Dispositivo de seguridad de red",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 4,
            "nombreDispositivo": "Access Point",
            "fabricante": "Ubiquiti",
            "modelo": "UniFi AP AC LR",
            "descripción": "Punto de acceso WiFi de largo alcance",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 5,
            "nombreDispositivo": "Router Empresarial",
            "fabricante": "Juniper Networks",
            "modelo": "SRX320",
            "descripción": "Router de seguridad para empresas",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 6,
            "nombreDispositivo": "Router WiFi",
            "fabricante": "TP-Link",
            "modelo": "Archer C7",
            "descripción": "Router inalámbrico de doble banda",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 7,
            "nombreDispositivo": "Switch Gigabit",
            "fabricante": "Cisco",
            "modelo": "SG350-28",
            "descripción": "Switch de red de 28 puertos",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 8,
            "nombreDispositivo": "Firewall",
            "fabricante": "Fortinet",
            "modelo": "FortiGate 60F",
            "descripción": "Dispositivo de seguridad de red",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 9,
            "nombreDispositivo": "Access Point",
            "fabricante": "Ubiquiti",
            "modelo": "UniFi AP AC LR",
            "descripción": "Punto de acceso WiFi de largo alcance",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 10,
            "nombreDispositivo": "Router Empresarial",
            "fabricante": "Juniper Networks",
            "modelo": "SRX320",
            "descripción": "Router de seguridad para empresas",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 11,
            "nombreDispositivo": "Router WiFi",
            "fabricante": "TP-Link",
            "modelo": "Archer C7",
            "descripción": "Router inalámbrico de doble banda",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 12,
            "nombreDispositivo": "Switch Gigabit",
            "fabricante": "Cisco",
            "modelo": "SG350-28",
            "descripción": "Switch de red de 28 puertos",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 13,
            "nombreDispositivo": "Firewall",
            "fabricante": "Fortinet",
            "modelo": "FortiGate 60F",
            "descripción": "Dispositivo de seguridad de red",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 14,
            "nombreDispositivo": "Access Point",
            "fabricante": "Ubiquiti",
            "modelo": "UniFi AP AC LR",
            "descripción": "Punto de acceso WiFi de largo alcance",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
        {
            "idDispositivo": 15,
            "nombreDispositivo": "Router Empresarial",
            "fabricante": "Juniper Networks",
            "modelo": "SRX320",
            "descripción": "Router de seguridad para empresas",
            "linkPdf":"ubicaciónpdfparadescargar",
            "linkYouTube": "https://www.youtube.com/embed/Vejlyg8Y8QY?si=x9tHu3zzRcmvKxkJ"
        },
    ];

    return (
        <div className="bg-gray-900">
          <TableRouterConfig data={data}/>
        </div>
    )
}

export default RouterConfiguration;
