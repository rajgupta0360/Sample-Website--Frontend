import React from 'react'
import line from "../assets/shapes/line.svg";


const AboutUs = () => {
  return (
      <section className="py-16 text-center max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-sky-600">About Us</h2>
          <img src={line} alt="" className='m-auto size-[10%]'/>
          <div className="flex justify-center px-50 mt-5">
              <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt harum inventore consectetur neque quae totam maxime vitae, mollitia velit, fugit architecto quaerat eligendi. Temporibus nulla fuga dicta nisi ex quia adipisci cum! Exercitationem totam alias, maxime voluptate error necessitatibus repudiandae consequuntur accusantium voluptatem quidem aspernatur ducimus deserunt! Illum, ut..</p>
          </div>
          <button className="mt-10 px-18 py-2.5 bg-gray-50 text-blue-100 font-semibold rounded-md hover:bg-gray-100 shadow-xl/20">
              LEARN MORE
          </button>
      </section>
  )
}

export default AboutUs
