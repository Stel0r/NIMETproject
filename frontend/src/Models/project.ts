import { Task } from "./task"

export interface Project{
    id:string
    name:string
    desc?:string
    color?:string
    tareas:Task[]
    fechaInicio?:Date
    fechaFinal?:Date
}