import { useState } from 'react'

interface ColorSelectProps{
    colors:string[]
}

function ColorSelect({colors}:ColorSelectProps) {

    const [showOptions, setShowOptions] = useState(false)

    return (
        <div className='relative'>
            <div className='rounded-lg h-8 w-8' id = "select" onClick={() => { setShowOptions(!showOptions) }} style = {{backgroundColor:colors[0]}}></div>
            {showOptions &&
                <div className='absolute bg-white left-8 top-0 flex rounded-md'>
                    {colors.map((color) => <div className='rounded-lg h-6 w-6 m-1' style={{backgroundColor:color}} onClick={(e) =>{document.getElementById("select")?.style.setProperty("background-color",e.currentTarget.style.backgroundColor);setShowOptions(false)}}></div>)}
                </div>
            }
        </div>
    )
}

export default ColorSelect