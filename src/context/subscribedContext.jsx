import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

export const SubscribedContext = createContext(null);

export const SubscribedProvider = ({ children }) => {
    const [subscribed, setSubscribed] = useState([]);

    useEffect(() => {
        const fetchSubscribed = async () => {
            try {
                const res = await axios.get("http://localhost:2173/api/subscribed-email");
                if (res.data.emails) { 
                    console.log("hiii")
                    setSubscribed(res.data.emails);
                    console.log(subscribed);
                }
            } catch (error) {
                console.error("Error fetching subscribed emails:", error);
            }
        };
        fetchSubscribed();
    }, []);

    const addSubscriber = (newEmail) => {
        setSubscribed(prevSubscribed => {
            // Only add if not already present
            if (prevSubscribed.includes(newEmail)) {
                return prevSubscribed;
            }
            return [...prevSubscribed, newEmail];
        });
    };

    return (
        <SubscribedContext.Provider value={{ subscribed, addSubscriber }}>
            {children}
        </SubscribedContext.Provider>
    );
}

export const getSubscribedData = () => useContext(SubscribedContext);