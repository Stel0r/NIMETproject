import './app.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import TasksView from './components/TasksPage/TasksView'
import HomeView from './components/HomePage/HomeView'
import ProjectView from './components/ProjectView/ProjectView'
import ProjectsList from './components/ProjectsList/ProjectsList'

function App() {


	return (
		<BrowserRouter>
			<div className='app h-screen overflow-auto'>
				<div className='header'>
					<Link to="/" className='font-bold text-xl ml-5 text-black'>NIMET project</Link>
					<Link to="/Tasks" className='text-mute ml-10 text-lg text-black'>Tasks</Link>
				</div>
				<div className='window'>
					<Routes>
						<Route path='/' element={<HomeView />} />
						<Route path='/Tasks' element={<TasksView />}>
							<Route path="" element={<ProjectsList />} />
							<Route path=":projectId" element={<ProjectView />} />
						</Route>
						<Route path='/*' element={<HomeView />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
