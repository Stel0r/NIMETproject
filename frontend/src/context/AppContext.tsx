import { createContext, useState } from "react"
import { Task } from "../Models/task"

// eslint-disable-next-line @typescript-eslint/no-empty-interface

interface AppContextValue{
    user?:string
    tasks:Task[]
    crearTask:(arg0:Task) => void
    actualizarTask:(arg0 :string,arg1:Task) => void
    eliminarTask:(arg0:string) => void
}

export const AppContext = createContext<AppContextValue>({crearTask:(task)=>{return},actualizarTask:(id,task)=>{return},tasks:[],eliminarTask:(id)=>{return}})

export function AppContextProvider({children} : any){

    const [user, setUser] = useState("Stelor")
    const [tasks,setTasks] = useState<Task[]>([
        {
            id:"0",
            titulo:"Bonito",
            descripcion:"esta es la primera nota",
            fechaFin: new Date(),
            color:"#5b96f5"
        },
        {
            id:"1",
            titulo:"Segunda Nota",
            descripcion:"esta es la segunda nota, que molon!",
            fechaFin: new Date(),
            color:"#5b96f5"
        },
        {
            id:"2",
            titulo:"Bonito",
            descripcion:"esta es la primera nota",
            fechaFin: new Date(),
            color:"#5b96f5"
        },
    ])

    function crearTarea(tarea:Task){
        setTasks([...tasks,tarea])
    }

    function actualizarTarea(id:string,nuevaTarea:Task){
        setTasks(tasks.map((tarea)=>tarea.id === nuevaTarea.id ? nuevaTarea:tarea))
    }

    function eliminarTarea(id:string){
        setTasks(tasks.filter((tarea)=> tarea.id != id))
    }

    return (<AppContext.Provider value={{user:"stelor",tasks:tasks,crearTask:crearTarea,actualizarTask:actualizarTarea,eliminarTask:eliminarTarea}}>
        {children}
    </AppContext.Provider>)
}