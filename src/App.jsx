import NavigationBar from "./components/promotionalSite/NavigationBar.jsx";
import Footer from "./components/promotionalSite/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/promotionalSite/pages/Home.jsx";
import AboutUs from "./components/promotionalSite/pages/AboutUs.jsx";
import FAQs, {Help} from "./components/promotionalSite/pages/Help.jsx";
import Support from "./components/promotionalSite/pages/Support.jsx";
import Contact from "./components/promotionalSite/pages/Contact.jsx";
import Plans from "./components/promotionalSite/pages/Plans.jsx";
import Store from "./components/promotionalSite/pages/Store.jsx";


function App() {

    return (
        <div>
            <NavigationBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/help' element={<Help/>}/>
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
