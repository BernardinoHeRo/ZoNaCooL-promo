import React from 'react';

const CompanyHistory = ({logo, companyName, companyDescription}) => {
   return (
      <div
         className="mx-auto w-[100%] px-4 md:max-w-5xl lg:max-w-6xl flex flex-col md:flex-row items-center justify-center md:gap-8">
         <div className="image object-center text-center w-[40%] md:w-[50%]">
            <img src={logo} alt="Logo empresa"/>
         </div>

         <div className="w-[95%] md:w-[80%] md:px-4 mb-4">
            <h2
               className="my-2 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center md:text-start text-zc-first brightness-200 contrast-150">
               {companyName}
            </h2>
            <p className="text-gray-700 text-center sm:text-center md:text-justify
            text-base md:text-lg lg:text-xl">
               {companyDescription}
            </p>
         </div>
      </div>
   );
};

export default CompanyHistory;
