import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'


function HomeView() {

    const appContext = useContext(AppContext)


    return (
        <>
            <div className='px-10 py-5'>
                <p className='text-4xl my-8 font-bold font-roboto'>Bienvenido, {appContext.user}!</p>
                <div className='bg-gray-100 border-2 border-gray-500 px-10 py-5 rounded-lg'>
                    <p className='text-gray-500 text-lg font-roboto'>¿Que falta por hacer?</p>
                    <div className='h-36'>
                        {appContext.tasks ?
                            <>
                                <p className='text-center mb-3'>Aun no tienes ninguna tarea. Empecemos de una vez</p>
                                <div className='flex justify-center gap-5 flex-wrap'>
                                    <button className='rounded-full bg-green-500 border-2 py-3 px-8 border-black'>Nuevo Proyecto</button>
                                    <button className='rounded-full  bg-green-500 border-2 py-3 px-8 border-black'>Nueva Tarea</button>
                                </div>
                            </>
                            :
                            <></>}
                    </div>
                </div>
                <p className='text-xl my-8 font-bold font-roboto text-center'>¿Qué quieres hacer ahora?</p>
                <div className='flex justify-center gap-5 flex-wrap'>
                    <button className='rounded-full border-2 py-3 px-8 border-black'>Nuevo Proyecto</button>
                    <button className='rounded-full border-2 py-3 px-8 border-black'>Nueva Tarea</button>
                    <button className='rounded-full border-2 py-3 px-8 border-black'>Ver Calendario</button>
                    <button className='rounded-full border-2 py-3 px-8 border-black'>Empezar Sesion</button>
                </div>
            </div>
        </>
    )
}

export default HomeView