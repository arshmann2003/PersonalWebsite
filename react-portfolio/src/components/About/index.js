import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'


const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray = { ['A','b','o','u','t',' ','m','e'] }
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious software developer and student looking for a role in an established technicaly company with the oppertunity to work with latest technologies and on challenging projects.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually working on improving my abilities one step at a time.                    
                </p>
                <p>
                    If I need to define myself in a sentence that would be a family person, sports fanatic, and tech obsessed!  
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#" />
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default About
