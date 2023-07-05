import { useState } from "react"
import NewProjectModal from "../Modals/NewProjectModal"

function ProjectsList() {

    const [showTaskCreation, setShowTaskCreation] = useState(true)


    return (
        <div className="m-auto p-10">
            <div className="flex">
                <p className="font-roboto text-2xl font-bold">Mis Proyectos</p>
                <button className="ms-auto block rounded-full bg-green-400 px-5 py-3 text-md" onClick={() => setShowTaskCreation(true)}>Nuevo Proyecto</button>
            </div>
            {showTaskCreation &&
                <NewProjectModal show = {setShowTaskCreation}/>
            }
        </div>
    )
}

export default ProjectsList