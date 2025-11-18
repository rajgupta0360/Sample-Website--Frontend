import { getFormData } from '@/context/formContext';
import React from 'react'

const FormDetails = () => {
    const { formData } = getFormData();
    return (
      <section className='flex justify-center items-center'>
      <div
          className="w-[80%] sm:w-[75%] md:w-80% mx-auto border p-6 sm:p-8 rounded-xl shadow bg-sky-600 text-white">
            <table className="min-w-full mt-8 bg-white text-black rounded-lg overflow-hidden">
                <thead className="bg-sky-200">
                    <tr>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-left">Mobile</th>
                        <th className="py-3 px-6 text-left">City</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((item) => (
                        <tr key={item.name}>
                            <td className="py-3 px-6">{item.name}</td>
                            <td className="py-3 px-6">{item.email}</td>
                            <td className="py-3 px-6">{item.mobile}</td>
                            <td className="py-3 px-6">{item.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </section>
  )
}

export default FormDetails