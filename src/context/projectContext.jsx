    import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

    export const ProjectContext = createContext([]);

    export const ProjectProvider = ({ children }) => {
        const [projects, setProjects] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const fetchProjects = async () => {
                try {
                    const res = await axios.get("https://sample-website-backend.vercel.app/api/projects");

                    if (res.data && Array.isArray(res.data.projects)) {
                        setProjects(res.data.projects); // Set state with persistent data
                    }
                } catch (error) {
                    console.error("Error fetching initial projects:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchProjects();
        }, []);

        const addProjects = (newProject) =>{
            setProjects(prevProjects => {
                return [...prevProjects, newProject];
            });
        }
        return (<>
            <ProjectContext.Provider value={{ projects, addProjects, loading }}>
                {children}
            </ProjectContext.Provider>
        </>)    
    }

    export const getProjectsData = () => useContext(ProjectContext);