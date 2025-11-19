import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

export const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const res = await axios.get("https://sample-website-backend.vercel.app/api/contact-form");

                if (res.data && Array.isArray(res.data.doc)) {
                    setFormData(res.data.doc); // Set state with persistent data
                }
            } catch (error) {
                console.error("Error fetching initial projects:", error);
            }
        };

        fetchForms();
    }, []);

    const addForm = (newForm) => {
        setFormData(prevForm => {
            if (!newForm.email) {
                console.error("New form is missing an 'email' property.");
                return prevForm; // Return previous state if email is missing
            }

            const emailExists = prevForm.some(
                (form) => form.email === newForm.email
            );

            if (emailExists) {
                console.warn(`Form with email: ${newForm.email} already exists. Skipping.`);
                return prevForm;
            } else {
                // If the email does NOT exist, create and return the new array
                return [...prevForm, newForm];
            }
        });
    };
    return (
        <FormContext.Provider value={{ formData, addForm }}>
            {children}
        </FormContext.Provider>
    );
}

export const getFormData = () => useContext(FormContext);