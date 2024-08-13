import React from 'react';
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'
import github from './assets/github.png'
import FadeIn from './Fadein';

const App = () => {
        
        return(
          <div>
          <header className="header">
          <nav className="nav container">
              <div className="logo"><a href="#home">Priyesh Nagar</a></div>
              <ul className="nav-list">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
      </header>
          
      <section id="home" className="section home">
          <div className="container">
              <div className="intro">
                  <h1 className="intro-title">Hi, I'm <span>Priyesh Nagar</span></h1>
                  <p className="intro-subtitle">A Professional Software Engineer</p>
                  <a href="#contact" className="btn">Let's Connect</a>
                  <div className="social-icons">
                      <a href="https://www.linkedin.com/in/priyesh-nagar/" target="_blank" className="social-icon">
                          <img src={linkedin} alt="LinkedIn" />
                      </a>
                      <a href="https://github.com/Priyesh95" target="_blank" className="social-icon">
                          <img src={github} alt="GitHub" />
                      </a>
                      <a href="mailto:priyesh.nagar1995@gmail.com" target="_blank" className="social-icon">
                          <img src={gmail} alt="Gmail" />
                      </a>
                  </div>
              </div>
              <div className="background-animation">
                  <div className="pulsating-dot" style={{top: '10%', left: '5%'}}></div>
                  <div className="pulsating-dot" style={{top: '15%', left: '20%'}}></div>
                  <div className="pulsating-dot" style={{top: '20%', left: '35%'}}></div>
                  <div className="pulsating-dot" style={{top: '25%', left: '50%'}}></div>
                  <div className="pulsating-dot" style={{top: '30%', left: '65%'}}></div>
                  <div className="pulsating-dot" style={{top: '35%', left: '80%'}}></div>
                  <div className="pulsating-dot" style={{top: '45%', left: '10%'}}></div>
                  <div className="pulsating-dot" style={{top: '50%', left: '25%'}}></div>
                  <div className="pulsating-dot" style={{top: '55%', left: '40%'}}></div>
                  <div className="pulsating-dot" style={{top: '60%', left: '55%'}}></div>
                  <div className="pulsating-dot" style={{top: '65%', left: '70%'}}></div>
                  <div className="pulsating-dot" style={{top: '70%', left: '85%'}}></div>
                  <div className="pulsating-dot" style={{top: '75%', left: '15%'}}></div>
                  <div className="pulsating-dot" style={{top: '80%', left: '30%'}}></div>
                  <div className="pulsating-dot" style={{top: '85%', left: '45%'}}></div>
                  <div className="pulsating-dot" style={{top: '90%', left: '60%'}}></div>
                  <div className="pulsating-dot" style={{top: '10%', left: '75%'}}></div>
                  <div className="pulsating-dot" style={{top: '20%', left: '90%'}}></div>
                  <div className="pulsating-dot" style={{top: '30%', left: '10%'}}></div>
                  <div className="pulsating-dot" style={{top: '20%', left: '25%'}}></div>
                  <div className="pulsating-dot" style={{top: '10%', left: '40%'}}></div>   
              </div>    
          </div>
      </section>
      
      
      <section id="about" className="section about">
      <FadeIn>
          <div className="container">
              <h2>About Me</h2>
              <p>With 7 years of experience in developing web applications, I have honed my skills in a diverse tech stack. My expertise includes Angular, AngularJS 1.x, and Flask, complemented by proficiency in HTML, JavaScript, SQL Server, Python, and Docker. Additionally, I am skilled in Redis, React, Ionic, and Electron. I have substantial experience with MongoDB and a solid understanding of data structures and algorithms. I am seeking to leverage my technical abilities and experience to contribute to a progressive organization and help achieve its mission and goals.</p>
          </div>
      </FadeIn>
      </section>
      
  
      <section id="skills" className="section skills">
      <FadeIn>
          <div className="container">
              <h2>Skills</h2>
              <div className="skills-grid">
                  <div className="skill-item">
                      <h3>Frontend Development</h3>
                      <p>Expert in creating responsive and interactive user interfaces using HTML, Javascript, Angular, Angular JS, React, Flask, Ionic and Electron.</p>
                  </div>
                  <div className="skill-item">
                      <h3>Backend Development</h3>
                      <p>Python, Java, Node.js, Express, MongoDb, Redis, SQL server, MySQL and RESTful APIs.</p>
                  </div>
                  <div className="skill-item">
                      <h3>DevOps & Tools</h3>
                      <p>Proficient in using Git, Docker, AWS and CI/CD pipelines for efficient development workflows.</p>
                  </div>
              </div>
          </div>
        </FadeIn>
      </section>
  
      <section id="projects" className="section projects">
      <FadeIn>
          <div className="container">
              <h2>Projects</h2>
              <div className="projects-grid">
                  <div className="project-item">
                      <h3>Tech articles application</h3>
                      <p>This web application allows users to register, log in, and interact with technology-related articles. Users can view and like articles. The dashboard displays charts showing the most viewed and most liked articles.(MERN and Redis) <a href="https://github.com/Priyesh95/tech-articles-frontend" className="project-link">View Project</a></p>
                  </div>
                  <div className="project-item">
                      <h3>TravelSnap</h3>
                      <p>TA web application that allows users to upload pictures of their vacation and view photos shared by other users. This app is built using the MERN stack (MongoDB, Express, React, Node.js). <a href="https://github.com/Priyesh95/travelSnapFrontend" className="project-link">View Project</a></p>
                  </div>
                  <div className="project-item">
                      <h3>Alien Shooter game</h3>
                      <p>A 2-d alien shooter game build using python. <a href="https://github.com/Priyesh95/alien-shooter" className="project-link">View Project</a></p>
                  </div>
                  <div className="project-item">
                      <h3>Online dictionary</h3>
                      <p>A web app which gives meaning of every word similar to a dictionary.This is built using python Flask. <a href="http://priyesh08.pythonanywhere.com/" className="project-link">View Project</a></p>
                  </div>
                  <div className="project-item">
                      <h3>BillBuddy</h3>
                      <p>Flatmate's bill sharing solution with transparent splitting. Built using python Flask <a href="https://priyesh95.pythonanywhere.com/" className="project-link">View Project</a></p>
                  </div>
                  <div className="project-item">
                      <h3>Digital Visiting Cards</h3>
                      <p> A Web app storing data on AWS RDS through APIs using CodeIgniter. Provides sales lead management through collected visiting cards.</p>
                  </div>
              </div>
          </div>
        </FadeIn>
      </section>
  
      <section id="experience" className="section experience">
      <FadeIn>
          <div className="container">
              <h2>Experience</h2>
              <div className="experience-grid">
                  <div className="experience-item">
                      <h3>Senior Software Engineer - Servicenow</h3>
                      <p>February 2020 - Present</p>
                      <ul className="project-list">
                          <li>
                              Currently working on scheduled management. It helps organizations to create and manage the planned work activities with recurring schedules at regular intervals.
                          </li>
                          <li>
                              Previously worked on appointment booking feature which lets customers create time windows for offered services. Recently it was used by multiple countries to allow residents to book appointment for COVID vaccines.
                          </li>
                          <li>
                              Successfully launched a contractor marketplace from scratch, which accepts a task as input and pushes it to a marketplace where different contractors can bid to complete it in the best interest of the requestor.
                          </li>
                      </ul>
                  </div>
                  <div className="experience-item">
                      <h3>Associate solution advisor - Deloitte</h3>
                      <p>July 2017 - February 2020</p>
                      <ul className="project-list">
                          <li>
                              Developed a Python Flask web application using IoT data for real-time solar plant monitoring, tracking inverter health, production and providing emergency alerts with AngularJS, Highcharts, and PostgreSQL.
                          </li>
                          <li>
                              Developed a Python Flask-based face recognition tool to prevent KYC frauds by detecting if two images of a person match from any angle.
                          </li>
                          <li>
                              Developed and owned Industry application which was developed on Angular 7, python Flask. Application    was developed to showcase industry capabilities of Deloitte across various industries clients and offerings.
                          </li>
                      </ul>
                      
                  </div>
              </div>
          </div>
        </FadeIn>
      </section>
  
      <section id="education" className="section education">
      <FadeIn>
          <div className="container">
              <h2>Education</h2>
              <div className="education-grid">
                  <div className="education-item">
                      <h3>Bachelor of Engineering in Information technology, GPA: 7.3/10</h3>
                      <p>SGSITS Indore, Graduated 2017</p>
                  </div>
              </div>
          </div>
        </FadeIn>
      </section>
  
      <section id="contact" className="section contact">
          <div className="container">
              <h2>Contact</h2>
              <p>I'm always open to discussing new projects or opportunities. Reach out to me at <a href="mailto:priyesh.nagar1995@gmail.com">priyesh.nagar1995@gmail.com</a>.</p>
          </div>
      </section>
  
      <footer className="footer">
          <div className="container">
              <p>&copy; 2024 Priyesh Nagar. All rights reserved.</p>
          </div>
      </footer>
      </div>
        )
    };


export default App;

