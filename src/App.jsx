import React from "react";
import NavigationBar from "./components/promotionalSite/NavigationBar.jsx";
import Footer from "./components/promotionalSite/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/promotionalSite/pages/Home.jsx";
import AboutUs from "./components/promotionalSite/pages/AboutUs.jsx";
import {Help} from "./components/promotionalSite/pages/Help.jsx";
import Support from "./components/promotionalSite/pages/Support.jsx";
import Contact from "./components/promotionalSite/pages/Contact.jsx";
import Plans from "./components/promotionalSite/pages/Plans.jsx";
import Store from "./components/promotionalSite/pages/Store.jsx";
import WhatsAppButton from "./components/promotionalSite/WhatsAppButton.jsx";


function App() {
   const phoneNumber = '9511398597'; // Número de teléfono al que deseas enviar el mensaje
   const message = '¡Hola! ¿Cómo estás?'; // Mensaje que deseas enviar
   return (
      <div>
         <NavigationBar/>
         <WhatsAppButton phoneNumber={phoneNumber} message={message}/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/help/*' element={<Help/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/plan' element={<Plans/>}/>
         </Routes>
         <Footer/>
      </div>
   )
}

export default App
