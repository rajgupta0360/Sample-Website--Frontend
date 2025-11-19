import { getSubscribedData } from '@/context/subscribedContext';
import React from 'react'

const SubscribedEmail = () => {
    const { subscribed } = getSubscribedData();
    return (
        <section className='flex justify-center items-center'>
            <div
                className="w-[80%] sm:w-[75%] md:w-80% mx-auto border p-6 sm:p-8 rounded-xl shadow bg-sky-600 text-white">
                <table className="min-w-full mt-8 bg-white text-black rounded-lg overflow-hidden">
                    
                    <tbody>
                        {subscribed.map((item) => (
                            <tr key={item.email}>
                                <td className="py-3 px-6">{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
  )
}

export default SubscribedEmail