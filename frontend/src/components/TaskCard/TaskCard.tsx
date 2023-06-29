import {ChangeEvent,useRef} from 'react'
import utils from "../../styles/util.module.css"

function TaskCard() {

    const ref = useRef<HTMLTextAreaElement>(null)

    function checkHeight(e:ChangeEvent){
        const area = ref.current as HTMLTextAreaElement
        area.style.height = "0px"
        area.style.height = (area.scrollHeight)+"px"
        
    }

    return (
        <div className="task bg-white border-gray-50 border rounded-md box-border p-5 my-1 w-full">
            <form action="" className="flex">
                <div className="flex flex-col w-full box-border pl-3 pr-8">
                    <input placeholder='Titulo' type="text" className='border-b-2 box-border p-1 border-black focus:outline-none font-bold w-5/6' />
                    <textarea placeholder='descripcion' ref = {ref} onChange = {(e) =>{checkHeight(e)}} className={`${utils.noscrollbar} border-b  border-black focus:outline-none box-border p-1 h-auto resize-none`} rows={1}/>
                </div>
                <div className="flex flex-col ms-auto">
                    <button className='rounded-full bg-green-500 h-6 w-6 my-1'>si</button>
                    <button className='rounded-full bg-green-500 h-6 w-6 my-1'>no</button>
                </div>
            </form>
        </div>
    )
}

export default TaskCard