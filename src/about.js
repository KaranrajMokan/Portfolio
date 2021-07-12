import React from 'react';
import './about.css';
import karan from './karan.jpg';
import resume from './Resume.pdf';

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
                    I'm Karanraj M. I'm currently doing my final year
                    Msc degree in Software Systems at PSG College of Technology. I'm 21.
                    I live in Tiruchengode. I was a SDE intern at ThoughtWorks India during the late 2020 from July to December.
                    <br></br><br/>
                    <a href={resume} target="_blank"
                    className="cross_line">
                        RESUME
                    </a>
                </p>
            </div>
            </div>
        <br/><br/><br/>
    </div>

    )
}
