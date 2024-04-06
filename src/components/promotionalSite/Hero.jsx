import React from 'react';
import {Link} from "react-router-dom";

const Hero = () => {
   return (
      <div className="bg-zc-first border-t-[1px] border-t-zc-fourth text-zc-neutral-100 py-8">
         <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-center p-8">
               <h1 className="text-5xl sm:text-5xl p-2 text-zc-first-comp brightness-200 saturate-200 contrast-200
                    tracking-loose font-bold [text-shadow:_0_3px_0_rgb(0_0_0_/_50%)]
                    lg:text-6xl">
                  ZoNa CooL
               </h1>
               <h2 className="text-xl sm:text-2xl md:text-3xl leading-relaxed md:leading-snug mb-2 text-center">
                  Tu conexión sin limites
               </h2>
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-50 mb-4 text-center">
                  La velocidad, confiabilidad e innovación se unen para
                  ofrecerte una conexión a Internet que redefine lo que significa ser 'CooL'.
               </p>
               {/*<Link to={'/about'}
                          className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black
                       rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                        Explorar ahora
                    </Link>
                    */}
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-20 lg:w-2/3  justify-center">
               <div className="h-48 flex flex-wrap content-center">
                  <div>
                     <img className="lg:inline-block mt-28 hidden xl:block"
                          src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                          alt="TechFest Image 1"/>
                  </div>
                  <div>
                     <img
                        className="md:inline-block mt-24 md:mt-0 p-8 md:p-0 w-[20rem] md:w-[40rem] lg:w-[20rem]"
                        src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                        alt="TechFest Image 2"/>
                  </div>
                  <div>
                     <img className="lg:inline-block mt-28 hidden xl:block"
                          src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                          alt="TechFest Image 3"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
