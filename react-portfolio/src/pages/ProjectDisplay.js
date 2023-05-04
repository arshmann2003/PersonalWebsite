import React from 'react'
import { useParams } from 'react-router-dom';
import './index.scss'
import { ProjectList } from '../helpers/ProjectList';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <faGithub />
        </div>
    );

}
export default ProjectDisplay;
