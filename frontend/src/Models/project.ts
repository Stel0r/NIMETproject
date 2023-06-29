import { Task } from "./task"

export interface Project{
    name:string
    desc?:string
    color?:string
    tareas:Task[]
}