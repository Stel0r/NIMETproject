import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import TaskCard from "../TaskCard/TaskCard"
import { useParams } from "react-router-dom"

function ProjectView() {
    const { projectId: taskId } = useParams()
    const appContext = useContext(AppContext)

    console.log(appContext, taskId)
    if (appContext && taskId) {
        const project = appContext.obtenerProyecto(taskId)
        return (
            <div className="flex items-center mx-12 mt-10 space-x-6">
                <button className="rounded-full w-14 h-14 bg-gray-50 border-2 border-gray-300"></button>
                <p className="font-bold text-2xl">Este Proyecto se llama {project.name}</p>
            </div>
        )
    }

}

export default ProjectView