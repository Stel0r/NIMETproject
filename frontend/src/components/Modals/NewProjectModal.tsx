import { FormEvent, useContext, useState } from 'react'
import ColorSelect from '../Utils/ColorSelect'
import { AppContext } from '../../context/AppContext'
import { Project } from '../../Models/project'

interface NewProjectModalProps {
    show: (bool: boolean) => void
}

function NewProjectModal({ show }: NewProjectModalProps) {

    const appContext = useContext(AppContext)

    const [initDateTime, setInitDateTime] = useState(false)
    const [finalDateTime, setFinalDateTime] = useState(false)
    const [initDate, setInitDate] = useState(false)
    const [finalDate, setFinalDate] = useState(false)
    const [color,setColor] = useState(appContext.colores[0])

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name")?.toString()
        if(name === undefined || name === ""){
            console.error("se neceista un nombre para continuar")
        }else{
            const newProject : Project = {
                id:appContext.projects.length.toString(),
                name,
                tareas:[]
            }
            if(initDate){
                const iDate = formData.get("initialDate")?.valueOf()
                newProject.fechaInicio = iDate as Date
            }
            if(finalDate){
                const fDate = formData.get("finalDate")?.valueOf()
                newProject.fechaFinal = fDate as Date
            }
            const desc = formData.get("desc")?.toString()
            if(desc !== undefined && desc !== ""){
                newProject.desc = desc
            }
            newProject.color = color
            appContext.crearProyecto(newProject)
            show(false)
        }
    }

    return (
        <div className="modal fixed h-full w-full top-0 left-0 bg-black bg-opacity-50 flex items-center">
            <div className="modal-window w-96 m-auto ">
                <div className="modal-head bg-gray-200 p-5 flex items-center rounded-t-lg">
                    <span>Nuevo Proyecto</span>
                    <button form="form" className="ms-auto rounded-full bg-green-400 mr-1  px-5 py-2 text-sm">Crear</button>
                    <button onClick={() => { show(false) }} className=" rounded-full bg-green-400 px-5 py-2 text-sm">Cancelar</button>
                </div>
                <div className="modal-bod bg-white p-5 rounded-b-lg">
                    <form id="form" onSubmit={(e) => handleSubmit(e)}>
                        <p>Nombre</p>
                        <div className='flex gap-3'>
                            <input type="text" name="name" className="bg-gray-100 border-2 border-black w-full text-md p-1 rounded-lg mb-5" />
                            <ColorSelect set={setColor} colors={appContext.colores} initial={color}></ColorSelect>
                        </div>
                        <p>Descripcion</p>
                        <input type="text" name="desc" className="bg-gray-100 border-2 border-black w-full text-md p-1 rounded-lg mb-5" />
                        <div className='flex items-center'>
                            <span>Fecha Inicio</span>
                            <input type="checkbox" className='ms-3' onChange={(e) => { setInitDate(e.currentTarget.checked); setInitDateTime(false) }} />
                        </div>
                        {initDate &&
                            <div className="flex justify-evenly items-center">
                                {initDateTime ? <input type="datetime-local" className='text-center' name='initialDate' /> : <input className='text-center' type="date" name='initialDate' />}
                                <div>
                                    <input type="checkbox" onChange={(e) => { setInitDateTime(e.currentTarget.checked) }} />
                                    <label className='ml-1'>Hora</label>
                                </div>
                            </div>
                        }
                        <div className='flex items-center'>
                            <span>Fecha Final</span>
                            <input type="checkbox" className='ms-3' onChange={(e) => { setFinalDate(e.currentTarget.checked); setFinalDateTime(false) }} />
                        </div>
                        {finalDate &&
                            <div className="flex justify-evenly items-center">
                                {finalDateTime ? <input type="datetime-local" className='text-center' name='finalDate' /> : <input className='text-center' type="date" name='finalDate' />}
                                <div>
                                    <input type="checkbox" onChange={(e) => { setFinalDateTime(e.currentTarget.checked) }} />
                                    <label className='ml-1'>Hora</label>
                                </div>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewProjectModal