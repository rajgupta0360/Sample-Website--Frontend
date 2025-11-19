import React from 'react'
import { Button } from '../components/ui/button';
import axios from 'axios';
import { getProjectsData } from '@/context/projectContext';
import { toast } from 'sonner';

const ProductManagement = () => {
    const { addProjects, projects } = getProjectsData();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        const data = new FormData();

        // Appending fields
        data.append('title', e.target.title.value);
        data.append('description', e.target.description.value);

        // Appending the file object
        const file = e.target.image.files[0];
        if (file) {
            data.append('image', file);
        }
        try {
            const res = await axios.post("https://sample-website-backend.vercel.app/api/projects",data);
            if (res.data && res.status === 201) {
                addProjects(res.data.project);
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        finally {
            e.target.reset();
        }
    }   

    return (
        <section className="py-16 text-center max-w-full h-screen mx-auto px-4 bg-sky-100">
            <div
                className="w-[80%] sm:w-[75%] md:w-80% mx-auto border p-6 sm:p-8 rounded-xl shadow bg-sky-600 text-white">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center">
                    Add a Project
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-full sm:max-w-xl mx-auto px-2 sm:px-4 md:px-6 mt-8 sm:mt-10 grid gap-3 sm:gap-4">
                    <input
                        name="title"
                        placeholder="Project Name"
                        className="p-3 sm:p-3.5 border rounded-md"
                        required
                    />
                    <input
                        type='file'
                        name="image"
                        placeholder="Image Upload"
                        className="p-3 sm:p-3.5 border rounded-md "
                        required
                    />
                    <input
                        type='text'
                        name="description"
                        placeholder="Description of the product"
                        className="p-3 sm:p-3.5 border rounded-md"
                        required
                    />
                    <div>
                        <Button type="submit" className="mt-2!">
                            Add
                        </Button>
                    </div>
                </form>
            </div>
        </section>
  )
}

export default ProductManagement