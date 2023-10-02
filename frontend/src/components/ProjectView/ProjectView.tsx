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
            <>
                <div className="flex items-center mx-12 mt-10 space-x-6 ">
                    <button className="rounded-full w-14 h-14 p-3 bg-gray-50 border-2 border-gray-300" onClick={(e) => { router("/Tasks") }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left" /></svg>
                    </button>
                    <p className="font-bold text-2xl">{project.name}</p>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 w-full h-max p-10 ">
                    <div className="border-black border h-max p-5 mx-3 rounded-lg bg-red-200">
                        <div className="flex items-center">
                            <p className=" font-bold text-lg">Pendiente</p>
                            <button className="ms-auto p-1 rounded-full bg-red-300 hover:bg-red-400">
                                <svg id="Layer_1" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" /></svg>
                            </button>
                        </div>

                    </div>
                    <div className="border-black border h-max p-5 mx-3 rounded-lg bg-amber-200">
                        <div className="flex items-center">
                            <p className=" font-bold text-lg">En Progreso</p>
                            <button className="ms-auto p-1 rounded-full bg-amber-300 hover:bg-amber-400">
                                <svg id="Layer_1" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="border-black border h-max p-5 mx-3 rounded-lg bg-lime-200">
                        <div className="flex items-center">
                            <p className=" font-bold text-lg">Terminado</p>
                            <button className="ms-auto p-1 rounded-full bg-lime-300 hover:bg-lime-400">
                                <svg id="Layer_1" className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

            </>
        )
    }

}

export default ProjectView