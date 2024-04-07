import React from 'react';

const CompanyMission = ({title, pathImage, nameImage, missionStatement}) => {

   // Función para obtener la URL completa de la imagen dinámica pasando nombre de la imagen
   const getImageUrl = (imageName) => {
      const imageUrl = new URL(`${pathImage}${imageName}`, import.meta.url).href;
      return imageUrl;
   };

   const imageUrl = getImageUrl(nameImage);

   return (<div className="bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-2 mx-auto gap-8 lg:grid-cols-12">
         <div className="mr-auto place-self-center lg:col-span-7">
            <h1
               className="max-w-2xl mb-2 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white text-center lg:text-start">
               {title}
            </h1>
            <p className="max-w-3xl text-center lg:text-start mb-2 font-light
            text-base md:text-lg lg:text-xl text-gray-400">
               {missionStatement}
            </p>
         </div>
         <div className="mt-0 lg:col-span-5 lg:flex flex flex-col items-center">
            <img src={imageUrl} alt={nameImage} className="w-1/2 lg:w-[100%]"/>
         </div>
      </div>
   </div>);
};

export default CompanyMission;
