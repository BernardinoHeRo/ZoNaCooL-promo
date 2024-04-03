import React from 'react'
import Hero from "../Hero.jsx";
import PromotionalPlans from "../PromotionalPlans.jsx";
import TermsAndConditions from "../TermsAndConditions.jsx";

export const Home = () => {
    return (
        <>
            <Hero/>
            <PromotionalPlans/>
            <TermsAndConditions/>
        </>
    )
}
export default Home