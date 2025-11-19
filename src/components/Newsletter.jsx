import { Button } from "@/components/ui/button";
import { getSubscribedData } from "@/context/subscribedContext";
import axios from "axios";

export default function Newsletter() {

    const { subscribed, addSubscriber } = getSubscribedData();
    const handleSubscribe = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        try {
            const res = await axios.post("https://sample-website-backend.vercel.app/api/subscribed-email", { email });
            alert("Subscribed!");
            if (res.data && res.status === 201) {
                addSubscriber(res.data.newSubscribedEmail);
            }
        }
        catch (error) {
            console.error("Error subscribing:", error);
        }
        finally {
            e.target.reset();
        }
    }

    return (
        <section className="pb-3 bg-sky-600 flex justify-around items-center">
            <div>
                <ul className="hidden md:flex items-center gap-8 text-lg mt-8 text-white">
                    <li className="hover:text-white cursor-pointer font-bold p-3">Home</li>
                    <li className="hover:text-white cursor-pointer font-bold p-3">Services</li>
                    <li className="hover:text-white cursor-pointer font-bold p-3">Projects</li>
                    <li className="hover:text-white cursor-pointer font-bold p-3">Contact</li>
                </ul>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-3 justify-center mt-8 px-6 items-center">
                <input
                    name="email"
                    placeholder="Enter email"
                    className="p-3 border rounded-md w-72 text-white"
                />
                <Button type="submit">Subscribe</Button>
            </form>
        </section>
    );
}
