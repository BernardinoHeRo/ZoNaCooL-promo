import React, {useState, useEffect} from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import FAQs from "../FAQs.jsx";
import RouterConfig from "../RouterConfig.jsx";

export const Help = () => {
   const location = useLocation();
   const [activeLink, setActiveLink] = useState("/help");

   useEffect(() => {
      const storedActiveLink = localStorage.getItem("activeLink");
      if (storedActiveLink) {
         setActiveLink(storedActiveLink);
      }
   }, []);

   const handleLinkClick = (path) => {
      setActiveLink(path);
      localStorage.setItem("activeLink", path);
   };

   return (
      <>
         <div
            className="flex flex-col md:flex-row md:gap-8 items-center justify-center bg-zc-first brightness-150 contrast-75 sticky top-16 z-40">
            <Link
               to="faqs"
               onClick={() => handleLinkClick("/faqs")}
               className={`text-zc-neutral-200 px-1 md:px-3 py-2 rounded-md font-light hover:text-zc-third hover:saturate-200 hover:brightness-200 hover:transition
                  text-sm sm:text-base md:text-lg lg:text-xl
                  ${
                  location.pathname === "/help" || location.pathname === "/help/faqs"
                     ? "text-zc-third brightness-200 saturate-200 font-medium transform scale-110"
                     : ""
               }
               `}
            >
               Preguntas Frecuentes
            </Link>
            <Link
               to="routerconf"
               onClick={() => handleLinkClick("/routerconf")}
               className={`text-zc-neutral-200 px-1 md:px-3 py-2 rounded-md font-light hover:text-zc-third hover:saturate-200 hover:brightness-200 hover:transition
                  text-sm sm:text-base md:text-lg lg:text-xl
                  ${
                  location.pathname === "/help/routerconf"
                     ? "text-zc-third brightness-200 saturate-200 font-medium transform scale-110"
                     : ""
               }
               `}
            >
               Router wifi
            </Link>
         </div>

         <div>
            <Routes>
               <Route path="/" element={<FAQs/>}/>
               <Route path="/faqs" element={<FAQs/>}/>
               <Route path="/routerconf" element={<RouterConfig/>}/>
            </Routes>
         </div>
      </>
   );
};

export default Help;
