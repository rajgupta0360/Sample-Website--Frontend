import { getClient } from "@/context/clientContext";

export default function HappyClients() {
    const { clients } = getClient();
    const BASE_IMAGE_URL = "http://localhost:2173/";
    
    return (
        <section className="py-16">
            <h2 className="text-4xl font-bold text-center text-sky-600">Happy Clients</h2>

            <div className="grid md:grid-cols-3 gap-8 px-6 mt-10 max-w-6xl mx-auto">
                {clients.map((c, i) => (
                    <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
                        <img src={`${BASE_IMAGE_URL}${c.image}`} className="w-24 h-24 rounded-full mx-auto" alt="" height={20} width={20}/>
                        <p className="text-gray-600 mt-4 italic">"{c.description}"</p>
                        <h3 className="font-bold mt-3">{c.name}</h3>
                        <p className="text-sm text-gray-500">{c.designation}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
