import React from 'react'
export { ContactUs } from './ContactUs'
import HeroSection from '../components/Home/Hero';
import Counter from '../components/Home/Counter';
import Offer from '../components/Home/Offer';
import HowItWork from '../components/Home/Howitwork';
import About from '../components/Home/about';
import Print from '../components/Home/Print-recipe';
import Popular from '../components/Home/Popular-recipe';
import CookBook from '../components/Home/Cookbook';
import CreateAcc from '../components/Home/CreateAccount';



const Index = () => {
    return (       
        <div className="bg-[#FBFCFE]">
            <HeroSection />
            <Counter />
            <Offer />
            <HowItWork />
            <About />
            <Print />
            <Popular />
            <CookBook />
            <CreateAcc />
       </div>     
    )
}


export default Index
