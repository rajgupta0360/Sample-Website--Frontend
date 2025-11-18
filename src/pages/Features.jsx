import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
      <section className="py-16 text-center max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6 text-sky-600">Features</h2>
          <div className="flex justify-between gap-5 flex-wrap">
              <Link to={"/product-management"} className='h-50 w-100 border flex justify-center items-center bg-amber-100 rounded-xl transition-transform duration-300 ease-in hover:scale-105'>
                    <h2 className='font-bold'>Manage Projects</h2>
              </Link>
              
              <Link to={"/client-management"} className='h-50 w-100 border flex justify-center items-center bg-blue-100 rounded-xl transition-transform duration-300 ease-in hover:scale-105'>
                    <h2 className='font-bold'>Manage Clients</h2>
              </Link>
              <Link to={"/form-details"} className='h-50 w-100 border flex justify-center items-center bg-purple-100 rounded-xl transition-transform duration-300 ease-in hover:scale-105'>
                    <h2 className='font-bold'>Contact Form Details</h2>
              </Link>
              <Link to={"/subscribed-email"} className='h-50 w-100 border flex justify-center items-center bg-red-100 rounded-xl transition-transform duration-300 ease-in hover:scale-105'>
                    <h2 className='font-bold'>Subscribed Email</h2>
              </Link>
          </div>
      </section>
  )
}

export default Features