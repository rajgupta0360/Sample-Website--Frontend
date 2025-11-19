import { Button } from "@/components/ui/button";
import { getFormData } from "@/context/formContext";
import axios from "axios";

export default function ContactForm() {
    const { formData, addForm } = getFormData();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("contactForm.jsx", e.target.name.value);
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            mobile: e.target.mobile.value,
            city: e.target.city.value,
        };
        try {
            const res = await axios.post("https://sample-website-backend.vercel.app/api/contact-form", formData);
            console.log(res);
            if (res.data && res.status === 201) {
                const data = res.data;
                addForm(data.doc);
                console.log(formData);
                alert("Form Submitted!");
            } else {
                console.error("Submission failed:", data);
                alert("Submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Submission failed");
        } finally {
            e.target.reset();
        }
    }


    return (<section id="contact" className="py-10 sm:py-14 md:py-16 bg-transparent">
        <div
            className="w-[95%] sm:w-[85%] md:w-full mx-auto border p-6 sm:p-8 shadow bg-blue-900 text-white opacity-75">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center">
                Contact Us
            </h2>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-full sm:max-w-xl mx-auto px-2 sm:px-4 md:px-6 mt-8 sm:mt-10 grid gap-3 sm:gap-4">
                <input
                    name="name"
                    placeholder="Full Name"
                    className="p-3 sm:p-3.5 border rounded-md "
                />
                <input
                    name="email"
                    placeholder="Email Address"
                    className="p-3 sm:p-3.5 border rounded-md "
                />
                <input
                    name="mobile"
                    placeholder="Mobile Number"
                    className="p-3 sm:p-3.5 border rounded-md "
                />
                <input
                    name="city"
                    placeholder="City"
                    className="p-3 sm:p-3.5 border rounded-md "
                />
                <Button type="submit" className="bg-amber-600">
                    Submit
                </Button>
            </form>
        </div>
    </section>

    );
};