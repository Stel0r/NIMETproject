import { createContext, useState } from "react"
import { Task } from "../Models/task"

// eslint-disable-next-line @typescript-eslint/no-empty-interface

interface AppContextValue{
    user?:string
    tasks?:Task[]
}

export const AppContext = createContext<AppContextValue>({})

export function AppContextProvider({children} : any){

    const [user, setUser] = useState("Stelor")
    const [tasks,setTasks] = useState([])

    return (<AppContext.Provider value={{user:"stelor",tasks:tasks}}>
        {children}
    </AppContext.Provider>)
}