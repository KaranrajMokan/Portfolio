import React from 'react';
import './passion.css';


export default function Passion(){

    function hello(e){
        e.target.style.backgroundSize = '100% 88%';
    }

    function bye(e){
        e.target.style.backgroundSize = '';
    }

    return(

    <div>
        <br/><br/><br/><br/><br/><br/>
        <div className="bod module-border-wrap">
            <div className="mar1">
                <div className="mar2">
                <span className="underline--magical" onMouseEnter={hello} onMouseLeave={bye}>Passion</span>
                </div>
                <div className="mar_pass">
                    I'm very passionate about the backend technologies and I find myself deeply 
                    interested in efficient means of data storage and retrieval.
                    I'm also curious about the correlation between various types of frontend
                    and backend. I have always wanted to work with NoSQL databases
                    and thus used Google Firebase's Cloud Firestore (document based) for 
                    an andriod application and Neo4j (graph based) for a restaurant recommendation system.

                </div>
                <br/>
                <div className="mar2">
                    <span className="underline--magical" onMouseEnter={hello} onMouseLeave={bye}>Experience</span>
                </div>
                <div className="mar_pass">
                    I worked as an intern at D'Edge Promotions,Coimbatore during the month of May 2019.
                    I was assigned the app development project "Plan-A-Wedding" where I used Kotlin for the frontend and Google Firebase's 
                    Cloud Firestore for the backend.
                </div>
            </div>
            <div>

            </div>
        </div>
        <br/><br/><br/>
    </div>
    );
}
