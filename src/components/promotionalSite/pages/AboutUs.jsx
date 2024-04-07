import React from 'react';
import CompanyHistory from '../CompanyHistory.jsx';
import CompanyVision from '../CompanyVision.jsx';
import CompanyMision from "../CompanyMission.jsx";

const AboutUs = () => {
   // Definición del JSON directamente en el componente
   const companyAbout = {
      history: {
         logo: 'https://i.imgur.com/WbQnbas.png',
         companyName: 'ZoNa CooL',
         companyDescription:
            'ZoNa CooL es fundada en el valle Eteco en el año 2010, para cubrir las ' +
            'necesidades de la población y del público en general de poder contar con un medio que les ' +
            'proporcione una conexión de calidad a internet y otros servicios. Porque sabemos que la parte ' +
            'más importante de la comunicación es el contacto con las personas, en este sentido lo hacemos ' +
            'posible de manera digital haciendo uso de las más sofisticadas tecnologías inalámbricas con el solo ' +
            'fin de mantener comunicado al público en general con todo aquello que más le importa de una manera ' +
            'cada vez más rápida y eficiente.',
      },
      mission: {
         title: 'Misión',
         pathImage: '../../assets/',
         nameImage: 'Mision.png',
         missionStatement:
            'Ser un equipo de trabajo líder y comprometido que proporcione servicios y soluciones integrales en ' +
            'telecomunicaciones con los más altos estándares de calidad, ofreciendo al consumidor y a la comunidad, ' +
            'servicios de gran valor necesarios para la vida actual, proponiendo e innovando por medio de la ' +
            'administración de personal calificado y equipo de punta con calidad internacional.',
      },
      vision: {
         pathImage: '../../assets/',
         nameImage: 'vision.png',
         title: 'Visión',
         visionStatement:
            'Consolidar el liderazgo de ZoNa CooL en primer y a corto plazo a nivel regional y posteriormente a nivel ' +
            'estatal como un gran proveedor de servicios y soluciones en telecomunicaciones penetrando proactivamente en ' +
            'zonas y comunidades que difícilmente cuentan con estos servicios de gran valor.',
      },
   };

   return (
      <div className="bg-gray-100 py-4">
         {/* Pasamos los datos de historia (history) como props a CompanyHistory */}
         <CompanyHistory
            logo={companyAbout.history.logo}
            companyName={companyAbout.history.companyName}
            companyDescription={companyAbout.history.companyDescription}
         />

         {/* Pasamos los datos de misión (mission) como props a CompanyMission */}
         <CompanyMision
            title={companyAbout.mission.title}
            pathImage={companyAbout.mission.pathImage}
            nameImage={companyAbout.mission.nameImage}
            missionStatement={companyAbout.mission.missionStatement}
         />

         {/* Pasamos los datos de visión (vision) como props a CompanyVision */}
         {/* Pasamos los datos de visión (vision) como props a CompanyVision */}
         <CompanyVision
            title={companyAbout.vision.title}
            visionStatement={companyAbout.vision.visionStatement}
            nameImage={companyAbout.vision.nameImage}
            pathImage={companyAbout.vision.pathImage}
         />
      </div>
   );
};

export default AboutUs;
