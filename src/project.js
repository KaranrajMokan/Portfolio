import React from 'react';
import './project.css';


export default function Project(){

    return(

    <div>
        <br/><br/><br/><br/><br/><br/>
        <div className="borders1">
            <div className="mar1">
                <div className="mar2">
                Projects
                </div>
                <br/>
                <div className="mar3">
                    I have done projects in languages such as
                    C, C++, Java, Python and C#.
                    I have also worked in SQL databases such as 
                    Oracle and MySQL and non-SQL databases such as
                    MongoDB and Neo4j(GraphDB). 
                    The tools which are used in the making of the projects are
                    Visual Studio Code, Neo4j, Spyder and Jupyter Notebook.
                    The projects can be found in my Git Repository tab below.
                    <br/><br/>
                </div>
                    
                <div className="mar4">
                    <a href="https://github.com/KaranrajMokan/repositories" target="_blank"
                    rel="noopener noreferrer" className="square_btn">PROJECTS</a>
                </div>
            </div>
        </div>
        <br/><br/><br/>
    </div>
    );
}
