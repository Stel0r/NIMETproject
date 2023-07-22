import { useState, useContext } from "react"
import NewProjectModal from "../Modals/NewProjectModal"
import { AppContext } from "../../context/AppContext"

function ProjectsList() {

    const [showTaskCreation, setShowTaskCreation] = useState(false)
    const appContext = useContext(AppContext)


    return (
        <div className="m-auto p-10">
            <div className="flex">
                <p className="font-roboto text-2xl font-bold">Mis Proyectos</p>
                <button className="ms-auto block rounded-full bg-green-400 px-5 py-3 text-md" onClick={() => setShowTaskCreation(true)}>Nuevo Proyecto</button>
            </div>
            <div className="flex-col py-5 w-full">
                {appContext.projects.map((proy) => 
                <div className="w-full my-2 cursor-pointer" style={{backgroundColor:`${proy.color}`}}>
                    <p>{proy.name}</p>
                    <p>{proy.fechaFinal?.toString()} - {proy.fechaFinal?.toString()}</p>
                </div>)}
            </div>
            {showTaskCreation &&
                <NewProjectModal show = {setShowTaskCreation}/>
            }
        </div>
    )
}

export default ProjectsList