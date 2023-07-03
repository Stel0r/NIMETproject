import { FormEvent, useState } from "react"

function ProjectsList() {

    const [showTaskCreation,setShowTaskCreation] = useState(true)

    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
    }

    return (
        <div className="m-auto p-10">
            <div className="flex">
                <p className="font-roboto text-2xl font-bold">Mis Proyectos</p>
                <button className="ms-auto block rounded-full bg-green-400 px-5 py-3 text-md" onClick={() => setShowTaskCreation(true)}>Nuevo Proyecto</button>
            </div>
            {showTaskCreation &&
                <div className="modal fixed h-full w-full top-0 left-0 bg-black bg-opacity-50 flex items-center">
                    <div className="modal-window w-96 m-auto rounded-lg overflow-hidden ">
                        <div className="modal-head bg-gray-200 p-5 flex items-center">
                            <span>Nueva Tarea</span>
                            <button form="form" className="ms-auto rounded-full bg-green-400 mr-1  px-5 py-2 text-sm">Crear</button>
                            <button onClick={() => { setShowTaskCreation(false) }} className=" rounded-full bg-green-400 px-5 py-2 text-sm">Cancelar</button>
                        </div>
                        <div className="modal-bod bg-white p-5">
                            <form id="form" onSubmit={(e) => handleSubmit(e)}>
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

export default ProjectsList