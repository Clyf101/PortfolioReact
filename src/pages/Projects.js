import React from 'react';
import '../styles/projects.css';

function Projects() {
  return (
    <div className='h2'>
        <h2>Projects</h2>
       
    <div className="projects-container">
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of project 1</p>
        <button>View Project</button>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of project 2</p>
        <button>View Project</button>
      </div>
      <div className="project">
        <h3>Project 3</h3>
        <p>Description of project 3</p>
        <button>View Project</button>
      </div>
    </div>
    </div>
  );
}

export default Projects;
