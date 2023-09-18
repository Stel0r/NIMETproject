import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import TaskCard from "../TaskCard/TaskCard"
import { useNavigate, useParams } from "react-router-dom"

function ProjectView() {
    const { projectId: taskId } = useParams()
    const appContext = useContext(AppContext)

    const router = useNavigate()

    console.log(appContext, taskId)
    if (appContext && taskId) {
        const project = appContext.obtenerProyecto(taskId)
        return (
            <div className="flex items-center mx-12 mt-10 space-x-6">
                <button className="rounded-full w-14 h-14 p-3 bg-gray-50 border-2 border-gray-300" onClick={(e)=>{router("/Tasks")}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/></svg>
                </button>
                <p className="font-bold text-2xl">{project.name}</p>
            </div>
        )
    }

}

export default ProjectView