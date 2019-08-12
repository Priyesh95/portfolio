import React, {Component} from 'react';
import PROJECTS from './data/projects'



class Project extends Component{
    render(){
        const {title, image, description, link} = this.props.project;

        return(
            <div className = "w3-third w3-container projects">
                <h3>
                    {title}
                </h3>
                <img src= {image} alt = "Loading" style = {{width: 200, height:120}}></img>
                <p>{description}</p>
                <a href = {link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component{
    render() {
        return(
            <div>
                <h2>
                    Highlighted Projects
                </h2>
                <div className = "w3-row">
                    {
                        PROJECTS.map(PROJECT => {
                            return(
                                <Project key ={PROJECT.id} project = {PROJECT}/>
                            )
                        })
                    }
                </div>
            </div>
        )
        

        
    }
}

export default Projects;