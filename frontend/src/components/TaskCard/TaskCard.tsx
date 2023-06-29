import { ChangeEvent, useRef } from 'react'
import ColorSelect from '../Utils/ColorSelect'
import utils from "../../styles/util.module.css"

function TaskCard() {

    const ref = useRef<HTMLTextAreaElement>(null)

    function checkHeight(e: ChangeEvent) {
        const area = ref.current as HTMLTextAreaElement
        area.style.height = "0px"
        area.style.height = (area.scrollHeight) + "px"

    }

    return (
        <div className="task bg-white border-gray-50 border rounded-md box-border p-5 my-1 w-full">
            <form action="" className="flex">
                <div className="flex flex-col w-full box-border pl-3 pr-4">
                    <div className='flex justify-between items-center'>
                        <input placeholder='Titulo' type="text" className='border-b-2 mb-4 box-border p-1 border-black focus:outline-none font-bold w-4/6' />
                        <input type="number" placeholder='HH' className={`w-8 h-8 text-center ${utils.numberInput}`}/> <span>:</span> <input type="number" placeholder='MM' className={`w-8 h-8 text-center ${utils.numberInput}`} />
                    </div>
                    <textarea placeholder='descripcion' ref={ref} onChange={(e) => { checkHeight(e) }} className={`${utils.noscrollbar} border-b  border-black focus:outline-none box-border p-1 h-auto resize-none`} rows={1} />
                </div>
                <div className="flex flex-col ms-auto gap-2">
                    <button className='rounded-full bg-green-500 h-8 w-8'>si</button>
                    <button className='rounded-full bg-green-500 h-8 w-8'>no</button>
                    <ColorSelect colors = {["#9cfa69","#5b96f5","#9e5bf5","#f75ced","#fa6182","#69faf0"]}></ColorSelect>
                </div>
            </form>
        </div>
    )
}

export default TaskCard