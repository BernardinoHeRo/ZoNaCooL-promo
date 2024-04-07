import React, {useState, useEffect} from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import RouterConfiguration from "../RouterConfiguration.jsx";
import FAQs from "../FAQs.jsx";

export const Help = () => {
   const location = useLocation();
   const [activeLink, setActiveLink] = useState("/faqs");

   useEffect(() => {
      // Recuperar el enlace activo almacenado
      const storedActiveLink = localStorage.getItem("activeLink");
      if (storedActiveLink) {
         setActiveLink(storedActiveLink);
      }
   }, []);

   useEffect(() => {
      // Almacenar el enlace activo en el almacenamiento del navegador
      localStorage.setItem("activeLink", activeLink);
   }, [activeLink]);

   const handleLinkClick = (path) => {
      setActiveLink(path);
   };

   return (
      <>
         <div
            className="flex flex-col md:flex-row md:gap-8 items-center justify-center bg-zc-first brightness-150 contrast-75"
         >
            <Link
               to={"faqs"}
               onClick={() => handleLinkClick("/faqs")}
               className={`text-zc-neutral-200 px-1 md:px-3 py-2 rounded-md font-medium hover:transition
               text-sm sm:text-base md:text-lg lg:text-xl 
               hover:text-zc-third hover:brightness-200 hover:saturate-200 hover:duration-300 hover:scale-125 ${
                  activeLink === "/faqs" || activeLink === "/help"
                     ? "text-zc-third brightness-200 saturate-200 transform scale-110"
                     : ""
               }`}
            >
               Preguntas Frecuentes
            </Link>
            <Link
               to={"routerconf"}
               onClick={() => handleLinkClick("/routerconf")}
               className={`text-zc-neutral-200 px-1 md:px-3 py-2 rounded-md font-medium hover:transition
               text-sm sm:text-base md:text-lg lg:text-xl 
               hover:text-zc-third hover:brightness-200 hover:saturate-200 hover:duration-300 hover:scale-125 ${
                  activeLink === "/routerconf"
                     ? "text-zc-third brightness-200 saturate-200 transform scale-110"
                     : ""
               }`}
            >
               Router wifi
            </Link>
         </div>
         <div>
            <Routes>
               <Route path={"/"} element={<FAQs/>}/>
               <Route
                  path={"/routerconf"}
                  element={<RouterConfiguration/>}
               />
               <Route path={"/faqs"} element={<FAQs/>}/>
            </Routes>
         </div>
      </>
   );
};

export default Help;
