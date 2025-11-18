import React from 'react'
import HeroImage from '../assets/images/hero.svg';
import { Contact } from 'lucide-react';
import ContactForm from './ContactForm';

const Hero = () => {
    return (
        <section className="py-0">
            <div
                className="
      relative 
      h-screen 
      w-full 
      bg-center 
      bg-no-repeat 
      bg-contain 
      md:bg-cover
    "
                style={{ backgroundImage: `url(${HeroImage})` }}
            >
                <div
                    className="
        absolute

        top-[8%] sm:top-[10%] md:top-[15%]
        right-[4%] sm:right-[8%] md:right-[15%]

        w-[92%] 
        sm:w-[70%] 
        md:w-auto
      "
                >
                    <ContactForm />
                </div>
            </div>
        </section>


    )
}

export default Hero