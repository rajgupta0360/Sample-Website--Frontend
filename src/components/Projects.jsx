import { Button } from "@/components/ui/button";
import { getProjectsData } from "@/context/projectContext";

export default function Projects() {
    const { projects, loading } = getProjectsData();
    const BASE_IMAGE_URL = "http://localhost:2173/";
    console.log(projects);
    if (loading) {
        return <section className="py-16 text-center">Loading Projects...</section>;
    }

    return (
        <section id="project" className="py-16 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-sky-600">Our Projects</h2>

            <div className="grid md:grid-cols-3 gap-8 mt-10 px-6 max-w-6xl mx-auto">
                {projects.map((p, i) => (
                    <div key={p._id} className="bg-white p-4 rounded-xl shadow">
                        <img src={`${BASE_IMAGE_URL}${p.image}`} alt={p.title} className="rounded-md mx-auto w-[200px] h-[150px]" height={'50%'} width={`200px`}/>
                        <h3 className="text-xl font-bold mt-4">{p.title}</h3>
                        <p className="text-gray-600 mt-2">{p.description}</p>
                        <Button className="mt-4">Read More</Button>
                    </div>
                ))}
            </div>
        </section>
    );
}