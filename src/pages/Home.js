import React from 'react';
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import "../assets/styles/home.css"



function Home(){
    return <div className="home">
       <div className="about">
  <h2>Clyford is here</h2>
  <div className="career">
    <p>
      Software developer.......................
    </p>
    
      <LinkedIn />
      <GitHub />
      <Email />
    </div>
  </div>


        <div className='skills'>
            <h1> Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2> Frond-End</h2>
                    <span>	 HTML, CSS,  React, 
</span>
                </li>
                <li className='item'>
                    <h2> Back-End</h2>
                    <span>SQL, Express, Node.js</span>
                </li>
                <li className='item'>
                    <h2> Languages</h2>
                    <span>JavaScript</span>
                </li>

            </ol>

        </div>
        
    </div>
}
export default Home;