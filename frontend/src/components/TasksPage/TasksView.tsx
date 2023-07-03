import { Outlet } from "react-router-dom"
import styles from "./tasksView.module.css"
import { FormEvent, useContext, useRef, useState } from "react"
import TaskCard from "../TaskCard/TaskCard"
import { AppContext } from "../../context/AppContext"


function TasksView() {

    const [showTaskCreation, setshowTaskCreation] = useState(false)
    const taskList = useRef(null)
    const appContext = useContext(AppContext)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setshowTaskCreation(false)
    }

    return (
        <div className="flex flex-nowrap min-h-full max-h-min w-full" >
            <div className="box-border border px-10 py-5 h-auto w-2/6">
                <div className="todoList max-h-full ">
                    <p className="font-roboto text-2xl font-bold">Tareas por hacer</p>
                    <div className={`${styles.tasksList} mb-6`} ref={taskList}>
                        {appContext.tasks?.map((tarea) => <TaskCard task={tarea} key={tarea.id} />)}
                    </div>
                    <button onClick={() => {
                        appContext.crearTask({titulo:"",color:"#9cfa69",id:appContext.tasks?.length.toString()})
                    }}
                    className="block m-auto rounded-full mt-4 bg-green-400 px-5 py-3 text-md">Nueva Tarea</button>
                </div>
            </div>
            <div className="projectsList box-border h-auto w-4/6 bg-gray-200">
                <Outlet />
            </div>
        </div>
    )
}

export default TasksView