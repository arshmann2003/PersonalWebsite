import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="projects" element={<Projects />} />
                <Route path='projects/:id' element={<ProjectDisplay />} />
            </Route>
        </Routes>
        </>
    )
}

export default App;
