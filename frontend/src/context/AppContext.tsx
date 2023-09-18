import { createContext, useState } from "react"
import { Task } from "../Models/task"
import { Project } from "../Models/project"

// eslint-disable-next-line @typescript-eslint/no-empty-interface

interface AppContextValue {
    user?: string
    tasks: Task[]
    crearTask: (arg0: Task) => void
    actualizarTask: (arg0: string, arg1: Task) => void
    eliminarTask: (arg0: string) => void
    colores:string[]
    projects:Project[]
    crearProyecto: (arg0: Project) => void
    actualizarProyecto: (arg0: string, arg1: Project) => void
    eliminarProyecto: (arg0: string) => void
    obtenerProyecto: (arg0:string) => Project
}


export const AppContext = createContext<AppContextValue|null>(null)

export function AppContextProvider({ children }: {children:React.ReactNode}) {

    const [user, setUser] = useState("Stelor")
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: "0",
            titulo: "Bonito",
            descripcion: "esta es la primera nota",
            fechaFin: new Date(),
            color: "#5b96f5"
        },
        {
            id: "1",
            titulo: "Segunda Nota",
            descripcion: "esta es la segunda nota, que molon!",
            fechaFin: new Date(),
            color: "#5b96f5"
        },
        {
            id: "2",
            titulo: "Bonito",
            descripcion: "esta es la primera nota",
            fechaFin: new Date(),
            color: "#5b96f5"
        },
    ])
    const colores = ["#9cfa69", "#5b96f5", "#9e5bf5", "#f75ced", "#fa6182", "#69faf0"]
    const [projects,setProjects] = useState<Project[]>([])

    function crearTarea(tarea: Task) {
        setTasks([...tasks, tarea])
    }

    function actualizarTarea(id: string, nuevaTarea: Task) {
        setTasks(tasks.map((tarea) => tarea.id === nuevaTarea.id ? nuevaTarea : tarea))
    }

    function eliminarTarea(id: string) {
        setTasks(tasks.filter((tarea) => tarea.id != id))
        tasks.forEach((tarea, index) => {
            tarea.id = index.toString()
            return tarea
        })
    }

    function crearProyecto(proyecto: Project) {
        setProjects([...projects, proyecto])
    }

    function actualizarProyecto(id: string, nuevoProyecto: Project) {
        setProjects(projects.map((proyecto) => proyecto.id === nuevoProyecto.id ? nuevoProyecto : proyecto))
    }

    function eliminarProyecto(id: string) {
        setProjects(projects.filter((proyecto) => proyecto.id != id))
        setProjects(projects.map((proyecto, index) => {
            proyecto.id = index.toString()
            return proyecto
        }))
    }

    function obtenerProyecto(id:string){
        const p = projects.find((idP:Project) => {
            if(idP.id === id){
                return true
            }
        })
        if (p){
            return p
        }else{
            return {id:"-1",name:"not Found",tareas:[]}
        }
    }


    return (<AppContext.Provider value={{ user: user, tasks: tasks, crearTask: crearTarea, actualizarTask: actualizarTarea, eliminarTask: eliminarTarea,colores:colores,projects,crearProyecto,actualizarProyecto,eliminarProyecto,obtenerProyecto}}>
        {children}
    </AppContext.Provider>)
}