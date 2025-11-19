import React from 'react'
import { Button } from '../components/ui/button';
import { getClient } from '@/context/clientContext';
import axios from 'axios';
import { toast } from 'sonner';

const ClientManagement = () => {
    const { clients, addClient } = getClient();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', e.target.name.value);
        formData.append('description', e.target.description.value);
        formData.append('designation', e.target.designation.value);

        const file = e.target.image.files[0];
        if (file) {
            formData.append('image', file);
        }

        try {
            const res = await axios.post("https://sample-website-backend.vercel.app/api/clients", formData);
            if (res.data) {
                addClient(res.data.client);
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
        <section className="py-16 text-center max-w-6xl mx-auto px-4">
            <div
                className="w-[80%] sm:w-[75%] md:w-80% mx-auto border p-6 sm:p-8 rounded-xl shadow bg-sky-600 text-white">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center">
                    Add Client Info
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-full sm:max-w-xl mx-auto px-2 sm:px-4 md:px-6 mt-8 sm:mt-10 grid gap-3 sm:gap-4">
                    <div className='w-full flex justify-between items-center'>
                        <label htmlFor="">Image</label>
                        <input
                            type='file'
                            name="image"
                            placeholder="Image Upload"
                            className="p-3 sm:p-3.5 border rounded-md w-[60%]"
                            required
                        />
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <label htmlFor="">Name</label>
                        <input
                            name="name"
                            placeholder="Enter Client's Name"
                            className="p-3 sm:p-3.5 border rounded-md w-[60%]"
                            required
                        />
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <label htmlFor="">Description</label>
                        <input
                            type='text'
                            name="description"
                            placeholder="Enter description"
                            className="p-3 sm:p-3.5 border rounded-md w-[60%]"
                            required
                        />
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <label htmlFor="">Designation</label>
                        <input
                            name="designation"
                            placeholder="Designation of the client"
                            className="p-3 sm:p-3.5 border rounded-md w-[60%]"
                            required
                        />
                    </div>
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

export default ClientManagement