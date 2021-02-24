import React from 'react'
import "./ProjectItem.css"
import data from './projectData'
import HeadingContent from './HeadingContent'
function ProjectItem() {
    return (
        <div id="projects">
            <HeadingContent title="PROJECTS" />
            <div className="projectItem__container">
            {
                data.map(project =>{
                    return(
                            <div className="projectItem__content" key={project.id}>
                                <div className="projectItem__image" style={{backgroundImage: `url(${project.image})`, backgroundPosition: "center", backgroundSize: "95% 95%"}}></div>
                                <div className="projectItem__content__box">
                                    <h2>{project.name}</h2>
                                    <div className="projectItem__option">
                                        <p>{project.date}</p>
                                        <div className="projectItem__view--btn">
                                            <a href={project.link.url} target="_blank" rel="noreferrer">{project.link.text}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                }) 
                }
            </div>
        </div>
    )
}

export default ProjectItem
