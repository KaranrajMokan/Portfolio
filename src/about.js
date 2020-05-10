import React from 'react';
import './about.css';
import karan from './karan.jpg';

export default function About(){

    function hello(e){
        e.target.style.backgroundSize = '100% 88%';
    }

    function bye(e){
        e.target.style.backgroundSize = '';
    }

    return(

    <div>
        <br/><br/><br/><br/><br/><br/>
            <div className="borders repeating-linear">
                
            <div className="mar">
            <span className="underline--magical" onMouseEnter={hello} onMouseLeave={bye}>About Me</span> <br/><br/>
            </div>
            <div>
                <img src={karan} className="image" />
                <p className="text">
                    I'm Karanraj M. I'm currently doing 
                    Msc degree in Software Systems at PSG College of Technology. I'm 20.
                    I live in Tiruchengode. I will be interning as a Full 
                    Stack Developer at ThoughtWorks India for a period of six months(late 2020).
                    <br></br><br/>
                    <a href="./documents/Resume.pdf" target="_blank"
                    rel="noopener noreferrer" className="cross_line">
                        RESUME
                    </a>
                </p>
            </div>
            </div>
        <br/><br/><br/>
    </div>

    )
}
