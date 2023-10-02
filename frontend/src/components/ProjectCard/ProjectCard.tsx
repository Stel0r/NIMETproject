import { useNavigate } from "react-router-dom"
import { Project } from "../../Models/project"
import utilStyles from "./projectCard.module.css"

interface ProjectCardProps{
    proy:Project
}

function ProjectCard({proy}:ProjectCardProps) {

    const router = useNavigate()

    return <div className={`w-full my-2 cursor-pointer bg-white px-5 py-3 border-2 border-gray-300 rounded-lg box-border ${utilStyles.boxAppear}`} onClick={() => {router('/Tasks/'+proy.id)}}>
    <div className="flex items-center">
        <p className="font-roboto font-bold text-lg">{proy.name}</p>
        <p className="text-sm font-thin ms-auto ">{proy.fechaInicio?.toString()}  {proy.fechaInicio && proy.fechaFinal && "-"}  {proy.fechaFinal?.toString()}</p>
    </div>
    <div>
        <p className="text-gray-400 whitespace-nowrap max-w-full overflow-hidden">{proy.desc}</p>
    </div>
    <div className=" bg-gray-200 border-2 border-gray-300 mt-3 h-40 rounded-lg box-border cursor-pointer">
        <div className=" text-gray-400 flex items-center justify-center w-full h-full cursor-default" onClick={(e)=>{e.stopPropagation()}}>
            <p> No Hay Nada Pendiente</p>
        </div>
    </div>

</div>
}

export default ProjectCard