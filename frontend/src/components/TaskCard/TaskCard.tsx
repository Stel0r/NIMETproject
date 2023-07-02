import { ChangeEvent, useEffect, useRef, useState, useContext } from 'react'
import ColorSelect from '../Utils/ColorSelect'
import utils from "../../styles/util.module.css"
import anim from "./taskcardAnim.module.css"
import { Task } from '../../Models/task'
import { AppContext } from '../../context/AppContext'

interface TaskCardProps {
    task: Task
}

function TaskCard({ task }: TaskCardProps) {

    const ref = useRef<HTMLTextAreaElement>(null)
    const colores = ["#9cfa69", "#5b96f5", "#9e5bf5", "#f75ced", "#fa6182", "#69faf0"]
    const [color, setColor] = useState(colores[0])
    const [titulo, setTitulo] = useState("")
    const [desc, setDesc] = useState("")
    const [hora, setHora] = useState("")
    const [minutos, setMinutos] = useState("")
    const [editing, setEditing] = useState(true)
    const [showOptions, setShowOptions] = useState(false)

    const appContext = useContext(AppContext)

    useEffect(() => {
        if (task) {
            setTitulo(task.titulo)
            if (task.titulo != "") {
                setEditing(false)
            }
            setColor(task.color)
            if (task.descripcion) {
                setDesc(task.descripcion)
            }
            if (task.fechaFin) {
                setHora(task.fechaFin.getHours().toString())
                setMinutos(task.fechaFin.getMinutes().toString())
            }
        }
    }, [])

    function checkHeight() {
        const area = ref.current as HTMLTextAreaElement
        area.style.height = "0px"
        area.style.height = (area.scrollHeight) + "px"

    }

    function cambiarColor(col: string) {
        setColor(col)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const titulo = form.get("titulo")
        const desc = form.get("description")
        const hora = form.get("hora")
        const minutos = form.get("minutos")
        if (titulo) {
            setTitulo(titulo.toString())
            task.titulo = titulo.toString()
            if (desc) {
                setDesc(desc.toString())
                task.descripcion = desc.toString()
            }
            if ((hora && minutos)) {
                setHora(hora.toString())
                setMinutos(minutos.toString())
                task.fechaFin = new Date()
                task.fechaFin.setHours(parseInt(hora.toString()))
                task.fechaFin.setMinutes(parseInt(minutos.toString()))
            } else {
                setHora("")
            }
            appContext.actualizarTask(task.id, task)
            setEditing(false)
        } else {
            //error handling
        }
    }

    function handleCancel(){
        if(titulo === ""){
            appContext.eliminarTask(task.id)
        }else{
            setTitulo(task.titulo)
            if(task.descripcion){
                setDesc(task.descripcion)
            }
            if(task.fechaFin){
                setHora(task.fechaFin?.getHours().toString())
                setMinutos(task.fechaFin?.getMinutes().toString())
            }
            setColor(task.color)
            setEditing(false)
        }
    }

    return (
        <div className={`${anim.boxAppear}  task bg-white border-gray-50 rounded-md box-border  my-3 w-full`}>
            {editing ?
                <form action="" className={`flex p-5`} onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="flex flex-col w-full box-border pl-3 pr-4">
                        <div className='flex justify-between items-center'>
                            <input value={titulo} onChange={(e) => { setTitulo(e.currentTarget.value) }} name="titulo" placeholder='Titulo' type="text" className='border-b-2 mb-4 box-border p-1 border-black focus:outline-none font-bold w-4/6' />
                            <input onChange={(e) => { setHora(e.currentTarget.value) }} name="hora" value={hora} type="number" placeholder='HH' className={`w-8 h-8 text-center ${utils.numberInput}`} /> <span>:</span> <input name="minutos" value={minutos} onChange={(e) => { setMinutos(e.currentTarget.value) }} type="number" placeholder='MM' className={`w-8 h-8 text-center ${utils.numberInput}`} />
                        </div>
                        <textarea value={desc} onChange={(e) => { setDesc(e.currentTarget.value); checkHeight() }} name='description' placeholder='descripcion' ref={ref} className={`${utils.noscrollbar} border-b  border-black focus:outline-none box-border p-1 h-auto resize-none`} rows={1} />
                    </div>
                    <div className="flex flex-col items-center ms-auto gap-2">
                        <button type='submit' className='h-7 w-7 bg-green-300 rounded-full'>
                        <svg className="h-inherit" viewBox="0 0 20 20">
							<path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
						</svg>
                        </button>
                        <button type="button" className=' h-7 w-7 bg-red-300 rounded-full' onClick={handleCancel}>
                        <svg className="h-inherit" viewBox="0 0 20 20">
							<path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
						</svg>
                        </button>
                        <ColorSelect set={cambiarColor} colors={colores} initial={task.color}></ColorSelect>
                    </div>
                </form>
                :
                <div className="flex overflow-hidden rounded-md">
                    <div id="sidebar" className={`h-inherit ${anim.barAppear} `} style={{ backgroundColor: color }} onMouseEnter={(e) => { setShowOptions(true) }} onMouseLeave={(e) => { setShowOptions(false) }} onAnimationEnd={(e) => e.currentTarget.classList.replace(anim.barAppear, anim.sidebar)}>
                        {showOptions &&
                            <div className={`${anim.appear} flex flex-col items-center justify-evenly h-full`}>
                                <button onClick={() => appContext.eliminarTask(task.id)}>
                                    <svg className="w-5" viewBox="0 0 20 20">
                                        <path d="M18.693,3.338h-1.35l0.323-1.834c0.046-0.262-0.027-0.536-0.198-0.739c-0.173-0.206-0.428-0.325-0.695-0.325
							H3.434c-0.262,0-0.513,0.114-0.685,0.312c-0.173,0.197-0.25,0.46-0.215,0.721L2.79,3.338H1.307c-0.502,0-0.908,0.406-0.908,0.908
							c0,0.502,0.406,0.908,0.908,0.908h1.683l1.721,13.613c0.057,0.454,0.444,0.795,0.901,0.795h8.722c0.458,0,0.845-0.34,0.902-0.795
							l1.72-13.613h1.737c0.502,0,0.908-0.406,0.908-0.908C19.601,3.744,19.195,3.338,18.693,3.338z M15.69,2.255L15.5,3.334H4.623
							L4.476,2.255H15.69z M13.535,17.745H6.413L4.826,5.193H15.12L13.535,17.745z"></path>
                                    </svg>
                                </button>
                                <button onClick={() => { setEditing(true); setShowOptions(false) }}>
                                    <svg className="w-5" viewBox="0 0 20 20">
                                        <path d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"></path>
                                    </svg>
                                </button>
                            </div>}
                    </div>
                    <div className={`flex flex-col w-full box-border pl-3 pr-4 py-5 ${anim.boxAppear}`}>
                        <div className='flex justify-between items-center'>
                            <p className='mb-1 box-border p-1 font-bold w-4/6'>{titulo}</p>
                            <p className={`w-16 h-8 text-center`}>{(hora === "" || minutos === "") ? "" : hora + ":" + minutos}</p>
                        </div>
                        <p className={`box-border px-1 h-auto`}  >{desc}</p>
                    </div>
                </div>}
        </div>
    )
}

export default TaskCard


