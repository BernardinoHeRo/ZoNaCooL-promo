import React from 'react';

const Hero = () => {
   return (
      <div className="bg-zc-first border-t-[1px] border-t-zc-fourth text-zc-neutral-100 py-32">

         <div className="flex flex-col items-center md:flex-row md:justify-center">
            {/* Texto introductorio */}


            <div
               className="w-full sm:w-full px-4 md:px-0 md:w-[40%] lg:w-[30%] flex flex-col justify-center items-center">
               <h1 className="text-5xl sm:text-5xl p-2 text-zc-first-comp brightness-200 saturate-200 contrast-200
                    tracking-loose font-bold [text-shadow:_0_3px_0_rgb(0_0_256_/_50%)]
                    lg:text-[2.75rem] xl:text-6xl">
                  ZoNa CooL
               </h1>
               <h2
                  className=" text-2xl sm:text-2xl md:text-3xl [text-shadow:_0_3px_0_rgb(0_0_256_/_50%)]">
                  Tu conexión sin limites
               </h2>
               <p className="mt-1 text-center text-base sm:text-base md:text-lg lg:text-xl">
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


            {/* Imagenes*/}
            <div className="lg:w-[60%] xl:w-[67%]">
               <div className="h-48 flex flex-col lg:flex-row items-center justify-center mt-20 md:mt-0">
                  <div>
                     <img className="hidden lg:inline md:w-[14rem]"
                          src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                          alt="TechFest Image 1"/>
                  </div>
                  <div>
                     <img
                        className="w-[15rem] md:w-[20rem] "
                        src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                        alt="TechFest Image 2"/>
                  </div>
                  <div>
                     <img className=" hidden lg:inline md:w-[14rem]"
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