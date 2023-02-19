import './index.scss'
import AnimatedLetters from '../AnimatedLetters'


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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in tortor non diam sagittis bibendum. Nullam facilisis ornare euismod. Sed molestie mi vitae dolor scelerisque laoreet. Vestibulum aliquet sapien ac suscipit dapibus. Quisque feugiat, risus id scelerisque venenatis, erat risus iaculis felis, ac pharetra tellus enim eget neque. Duis finibus odio at lorem imperdiet, nec suscipit lorem auctor. Sed ultrices elit elit, eget sagittis enim fringilla ac. In varius nulla at lacus laoreet bibendum. Nullam aliquet massa eget metus sollicitudin vestibulum. Maecenas cursus ac mauris eget varius. Nam varius est ac arcu bibendum iaculis. Donec pretium erat ac aliquet efficitur. Aliquam at felis ligula.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in tortor non diam sagittis bibendum. Nullam facilisis ornare euismod. Sed molestie mi vitae dolor scelerisque laoreet. Vestibulum aliquet sapien ac suscipit dapibus. Quisque feugiat, risus id scelerisque venenatis, erat risus iaculis felis, ac pharetra tellus enim eget neque. Duis finibus odio at lorem imperdiet, nec suscipit lorem auctor. Sed ultrices elit elit, eget sagittis enim fringilla ac. In varius nulla at lacus laoreet bibendum. Nullam aliquet massa eget metus sollicitudin vestibulum. Maecenas cursus ac mauris eget varius. Nam varius est ac arcu bibendum iaculis. Donec pretium erat ac aliquet efficitur. Aliquam at felis ligula.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in tortor non diam sagittis bibendum. Nullam facilisis ornare euismod. Sed molestie mi vitae dolor scelerisque laoreet. Vestibulum aliquet sapien ac suscipit dapibus. Quisque feugiat, risus id scelerisque venenatis, erat risus iaculis felis, ac pharetra tellus enim eget neque. Duis finibus odio at lorem imperdiet, nec suscipit lorem auctor. Sed ultrices elit elit, eget sagittis enim fringilla ac. In varius nulla at lacus laoreet bibendum. Nullam aliquet massa eget metus sollicitudin vestibulum. Maecenas cursus ac mauris eget varius. Nam varius est ac arcu bibendum iaculis. Donec pretium erat ac aliquet efficitur. Aliquam at felis ligula.
                </p>
            </div>
        </div> 
    )
}

export default About
