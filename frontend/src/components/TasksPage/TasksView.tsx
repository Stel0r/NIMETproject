import { Outlet } from "react-router-dom"
import styles from "./tasksView.module.css"
import { FormEvent, useState } from "react"
import TaskCard from "../TaskCard/TaskCard"


function TasksView() {

    const [showTaskCreation, setshowTaskCreation] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setshowTaskCreation(false)
    }

    return (
        <div className="flex flex-nowrap min-h-full max-h-min w-full " >
            <div className="box-border border bg-gray-300 p-10  h-auto w-2/6">
                <div className="todoList max-h-full ">
                    <p className="font-roboto text-2xl font-bold">Tareas por hacer</p>
                    <div className={`${styles.tasksList} my-8`} >
                        <TaskCard></TaskCard>
                        <TaskCard></TaskCard>
                        <TaskCard></TaskCard>
                        <TaskCard></TaskCard>
                        <TaskCard></TaskCard>
                        <TaskCard></TaskCard>
                        <TaskCard></TaskCard>
                        <TaskCard></TaskCard>
                        
                    </div>
                    <button onClick={(e) => { setshowTaskCreation(true) }} className="block m-auto rounded-full mt-4 bg-green-400 px-5 py-3 text-md">Nueva Tarea</button>
                </div>
            </div>
            <div className="projectsList box-border bg-gray-400 h-auto w-4/6">
                <Outlet />
            </div>
            {showTaskCreation &&
                <div className="modal fixed h-full w-full top-0 left-0 bg-black bg-opacity-50 flex items-center">
                    <div className="modal-window w-96 m-auto rounded-sm overflow-hidden">
                        <div className="modal-head bg-gray-200 p-5 flex items-center">
                            <span>Nueva Tarea</span>
                            <button form="form" className="ms-auto rounded-full bg-green-400 mr-1  px-5 py-2 text-sm">Crear</button>
                            <button onClick={(e) => { setshowTaskCreation(false) }} className=" rounded-full bg-green-400 px-5 py-2 text-sm">Cancelar</button>
                        </div>
                        <div className="modal-bod bg-white p-5">
                            <form id="form" onSubmit={handleSubmit}>
                                <p>Nombre</p>
                                <input type="text" className="bg-gray-100 border-2 border-black w-full text-md p-1 rounded-lg mb-5" />
                                <p>Descripcion</p>
                                <input type="text" className="bg-gray-100 border-2 border-black w-full text-md p-1 rounded-lg mb-5" />
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default TasksView