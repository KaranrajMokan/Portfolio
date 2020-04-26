import React from 'react';
import './about.css';
import karan from './karan.jpg';

export default function About(){

    return(

        <div className="borders">
            <div className="mar">
            About Me <br/><br/>
            </div>
            <div>
                <img src={karan} className="image" />
                <p className="text">
                    I'm Karanraj M. I'm currently doing 
                    Msc degree in Software Systems at PSG College of Technology.
                    I live in Tiruchengode. I'm currently interning as a Full 
                    Stack Developer at ThoughtWorks India for a period of six months.
                    <br></br><br/>
                    <a href="./documents/Resume.pdf" target="_blank"
                    rel="noopener noreferrer" className="cross_line">
                        RESUME
                    </a>
                </p>
            </div>
        </div>

    )
}