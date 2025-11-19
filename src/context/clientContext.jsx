import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const ClientContext = createContext(null);

export const ClientProvider = ({ children }) => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await axios.get("https://sample-website-backend.vercel.app/api/clients");

                if (res.data && Array.isArray(res.data.clients)) {
                    setClients(res.data.clients)
                }
            } catch (error) {
                console.error("Error fetching initial projects:", error);
            }
        };

        fetchClients();
    }, []);

    const addClient = (newClient) => {
        setClients(prevClients => {
            return [...prevClients, newClient];
        });
    }
    return (<>
        <ClientContext.Provider value={{ clients, addClient }}>
            {children}
        </ClientContext.Provider>
    </>)
}

export const getClient = () => useContext(ClientContext);