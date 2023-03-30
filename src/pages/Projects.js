import React from 'react';
import '../assets/styles/projects.css';

function Projects() {
  return (
    <div className='h2'>
        <h2>Projects</h2>
       
    <div className="projects-container">
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of project 1</p>
        <a href="https://google.com" class="button">View Project</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of project 2</p>
        <a href="https://google.com" class="button">View Project</a>
      </div>
      <div className="project">
        <h3>Project 3</h3>
        <p>Description of project 3</p>
        <a href="https://google.com" class="button">View Project</a>
      </div>
      
      
    </div>
    </div>
  );
}

export default Projects;
