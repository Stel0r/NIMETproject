import { useState, useContext } from "react"
import NewProjectModal from "../Modals/NewProjectModal"
import { AppContext } from "../../context/AppContext"
import ProjectCard from "../ProjectCard/ProjectCard"

function ProjectsList() {

    const [showTaskCreation, setShowTaskCreation] = useState(false)
    const appContext = useContext(AppContext)

    if (appContext){
        return (
            <div className="m-auto p-10">
                <div className="flex items-center">
                    <p className="font-roboto text-2xl font-bold">Mis Proyectos</p>
                    <button className="ms-auto block rounded-full bg-green-400 px-5 py-3 text-md" onClick={() => setShowTaskCreation(true)}>Nuevo Proyecto</button>
                </div>
                <div className="flex-col py-5 w-full">
                    {appContext.projects.map((proy) =>
                        <ProjectCard proy={proy} key={proy.id} />)}
                </div>
                {showTaskCreation &&
                    <NewProjectModal show={setShowTaskCreation} />
                }
            </div>
        )
    }
    
}

export default ProjectsList