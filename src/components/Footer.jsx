import React from 'react'
import Logo from "../assets/images/logo.svg";
import facebook from "../assets/icons/facebook.svg";
import insta from "../assets/icons/insta.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/Linkedin.svg"

const Footer = () => {
  return (
    <footer>
        <div className="footer-content flex justify-between align-center items-center p-4 bg-black text-white">
            <p>&copy; 2024 Flipr. All rights reserved.</p>
             <img src={Logo} alt="" className='h-10 w-30 text-white filter grayscale brightness-100 hover:grayscale-100'/>
            <div>
                <ul className="hidden md:flex items-center gap-8 text-lg">
                  <li className="hover:text-white cursor-pointer font-bold bg-white p-1 rounded-full"><img src={twitter} alt="" /></li>
                  <li className="hover:text-white cursor-pointer font-bold bg-white p-1 rounded-full"><img src={insta} alt="" /></li>
                  <li className="hover:text-white cursor-pointer font-bold bg-white p-1 rounded-full"><img src={facebook} alt="" /></li>
                  <li className="hover:text-white cursor-pointer font-bold bg-white p-1 rounded-full"><img src={linkedin} alt="" /></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer