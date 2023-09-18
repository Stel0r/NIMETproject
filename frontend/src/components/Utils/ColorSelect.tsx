import { useState } from 'react'

interface ColorSelectProps{
    colors:string[]
    set:(arg0:string)=>void
    initial:string
}

function ColorSelect({colors,set : setNewColor,initial}:ColorSelectProps) {

    const [showOptions, setShowOptions] = useState(false)

    function handleChange(e:React.MouseEvent<HTMLDivElement>){
        document.getElementById("select")?.style.setProperty("background-color",e.currentTarget.style.backgroundColor);
        setShowOptions(false)
        setNewColor(e.currentTarget.style.backgroundColor)
    }

    return (
        <div className='relative'>
            <div className='rounded-lg h-8 w-8' id = "select" onClick={() => { setShowOptions(!showOptions) }} style = {{backgroundColor:initial}}></div>
            {showOptions &&
                <div className='absolute bg-white left-8 top-0 flex rounded-md'>
                    {colors.map((color,index) => <div key={index} className='rounded-lg h-6 w-6 m-1' style={{backgroundColor:color}} onClick={(e) =>{handleChange(e)}}></div>)}
                </div>
            }
        </div>
    )
}

export default ColorSelect