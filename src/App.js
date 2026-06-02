import React from 'react';
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'
import github from './assets/github.png'
import FadeIn from './Fadein';

// Icon CDN bases (devicon + simpleicons), same sources the reference site uses
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';
const SI = 'https://cdn.simpleicons.org/';

// A skill pill with an optional tech logo; hides the icon gracefully if it fails to load
const SkillPill = ({ name, icon }) => (
    <span className="skill-pill">
        {icon && <img src={icon} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />}
        {name}
    </span>
);

// Lucide-style line icons (stroke currentColor) used on project links
const LinkIcon = ({ type }) => type === 'github' ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
);

const ProjectLink = ({ href, label, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
        <LinkIcon type={icon} /> {label}
    </a>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const PinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

const App = () => {
        const [active, setActive] = React.useState('home');

        React.useEffect(() => {
            const sections = NAV_ITEMS
                .map((item) => document.getElementById(item.id))
                .filter(Boolean);
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActive(entry.target.id);
                    });
                },
                { rootMargin: '-45% 0px -50% 0px' }
            );
            sections.forEach((section) => observer.observe(section));
            return () => observer.disconnect();
        }, []);

        return(
          <div>
          <div className="star-field" aria-hidden="true"></div>
          <header className="header">
          <nav className="nav container">
              <div className="logo"><a href="#home">Priyesh Nagar</a></div>
              <ul className="nav-list">
                  {NAV_ITEMS.map((item) => (
                      <li key={item.id}>
                          <a href={`#${item.id}`} className={active === item.id ? 'active' : ''}>{item.label}</a>
                      </li>
                  ))}
              </ul>
          </nav>
      </header>
          
      <section id="home" className="section home">
          <div className="container">
              <div className="intro">
                  <span className="intro-greeting">Hi, I'm</span>
                  <h1 className="intro-title"><span>Priyesh Nagar</span></h1>
                  <span className="intro-badge">Senior Software Engineer · AI &amp; Automation</span>
                  <p className="intro-tagline">I design and ship production systems and AI agents that deliver <span className="accent-serif">real impact</span></p>
                  <a href="#contact" className="btn">Let's Connect →</a>
              </div>
              <a href="#about" className="scroll-cue" aria-label="Scroll down">↓</a>
          </div>
      </section>
      
      
      <section id="about" className="section about">
      <FadeIn>
          <div className="container">
              <h2>About Me</h2>
              <p className="section-sub">Get to know me better</p>
              <p>I'm a Senior Software Engineer with 9+ years of experience building production software at scale, currently focused on the intersection of AI and enterprise automation. At ServiceNow, I design and ship systems that power Planned Work Management and Appointment Booking for 200+ enterprise customers — and I build AI agents that turn natural language into real workflows using RAG, semantic search, and the Model Context Protocol (MCP). Outside of work, I ship full-stack AI products end to end, from serverless backends to generative image pipelines. I love taking an idea from system design all the way through to a deployed, dependable product.</p>
          </div>
      </FadeIn>
      </section>
      
  
      <section id="skills" className="section skills">
      <FadeIn>
          <div className="container">
              <h2>Skills &amp; Expertise</h2>
              <p className="section-sub">Technologies I work with, from languages to frameworks and tools</p>
              <div className="skills-groups">
                  <div className="skill-group">
                      <h3>Languages</h3>
                      <div className="skill-pills">
                          <SkillPill name="JavaScript" icon={`${DI}javascript/javascript-original.svg`} />
                          <SkillPill name="TypeScript" icon={`${DI}typescript/typescript-original.svg`} />
                          <SkillPill name="Python" icon={`${DI}python/python-original.svg`} />
                          <SkillPill name="Java" icon={`${DI}java/java-original.svg`} />
                      </div>
                  </div>
                  <div className="skill-group">
                      <h3>Frameworks &amp; Libraries</h3>
                      <div className="skill-pills">
                          <SkillPill name="React" icon={`${DI}react/react-original.svg`} />
                          <SkillPill name="Angular" icon={`${DI}angularjs/angularjs-original.svg`} />
                          <SkillPill name="Node.js" icon={`${DI}nodejs/nodejs-original.svg`} />
                          <SkillPill name="Express" icon={`${SI}express/white`} />
                          <SkillPill name="Flask" icon={`${SI}flask/white`} />
                      </div>
                  </div>
                  <div className="skill-group">
                      <h3>AI &amp; Machine Learning</h3>
                      <div className="skill-pills">
                          <SkillPill name="RAG Architecture" />
                          <SkillPill name="Claude API" icon={`${SI}anthropic/white`} />
                          <SkillPill name="OpenAI" />
                          <SkillPill name="Pinecone" />
                          <SkillPill name="Model Context Protocol" />
                          <SkillPill name="Semantic Search" />
                          <SkillPill name="Prompt Engineering" />
                          <SkillPill name="Embeddings" />
                      </div>
                  </div>
                  <div className="skill-group">
                      <h3>Databases</h3>
                      <div className="skill-pills">
                          <SkillPill name="MongoDB" icon={`${DI}mongodb/mongodb-original.svg`} />
                          <SkillPill name="PostgreSQL" icon={`${DI}postgresql/postgresql-original.svg`} />
                          <SkillPill name="MySQL" icon={`${DI}mysql/mysql-original.svg`} />
                          <SkillPill name="SQL Server" icon={`${DI}microsoftsqlserver/microsoftsqlserver-plain.svg`} />
                          <SkillPill name="Redis" icon={`${DI}redis/redis-original.svg`} />
                          <SkillPill name="IndexedDB" />
                      </div>
                  </div>
                  <div className="skill-group">
                      <h3>Cloud &amp; DevOps</h3>
                      <div className="skill-pills">
                          <SkillPill name="AWS" icon={`${DI}amazonwebservices/amazonwebservices-plain-wordmark.svg`} />
                          <SkillPill name="Cloudflare Workers" icon={`${DI}cloudflare/cloudflare-original.svg`} />
                          <SkillPill name="Docker" icon={`${DI}docker/docker-original.svg`} />
                          <SkillPill name="Jenkins" icon={`${DI}jenkins/jenkins-original.svg`} />
                          <SkillPill name="CI/CD" />
                      </div>
                  </div>
                  <div className="skill-group">
                      <h3>Tools &amp; Platforms</h3>
                      <div className="skill-pills">
                          <SkillPill name="Git" icon={`${DI}git/git-original.svg`} />
                          <SkillPill name="Kafka" icon={`${SI}apachekafka/white`} />
                          <SkillPill name="REST APIs" />
                          <SkillPill name="ServiceNow" />
                          <SkillPill name="PDF.js" />
                          <SkillPill name="Segmind" />
                      </div>
                  </div>
              </div>
          </div>
        </FadeIn>
      </section>
  
      <section id="projects" className="section projects">
      <FadeIn>
          <div className="container">
              <h2>AI Projects &amp; Products</h2>
              <p className="section-sub">A selection of products I've designed and shipped</p>
              <div className="projects-grid">
                  <div className="project-item">
                      <h3>Snorpix <span className="project-badge live">Live</span></h3>
                      <div className="tech-tags"><span>React</span><span>Cloudflare Workers</span><span>Supabase</span><span>Segmind</span><span>FLUX Models</span></div>
                      <p>A personalized children's storybook platform where kids become the hero through AI face-swapping. I built the full order-to-delivery workflow on a serverless stack — from customer upload through face detection, FLUX/Stable Diffusion image generation, 16-page style-consistent compilation, and print-fulfillment integration for on-demand hardcover books.</p>
                      <div className="project-links">
                          <ProjectLink href="https://www.snorpix.com" label="Live Demo" icon="external" />
                      </div>
                  </div>
                  <div className="project-item">
                      <h3>StockSage <span className="project-badge dev">In Development</span></h3>
                      <div className="tech-tags"><span>React</span><span>Cloudflare Workers</span><span>Pinecone</span><span>Claude API</span><span>Yahoo Finance API</span></div>
                      <p>A RAG-based stock analysis assistant that blends real-time market data with semantic search across financial news, SEC filings and analyst reports. A Pinecone vector store powers retrieval while Claude generates context-aware insights — price metrics, sentiment and risk-adjusted recommendations across Indian and US markets.</p>
                  </div>
                  <div className="project-item">
                      <h3>PrepWise <span className="project-badge live">Live</span></h3>
                      <div className="tech-tags"><span>React</span><span>Claude API</span><span>PDF.js</span><span>IndexedDB</span></div>
                      <p>An AI-powered study quiz generator that turns documents into interactive quizzes with instant feedback. Fully client-side (PDF upload → text extraction → Claude API → IndexedDB) so data never leaves the browser, with resume support and weak-topic identification.</p>
                      <div className="project-links">
                          <ProjectLink href="https://prepwisepn.netlify.app" label="Live Demo" icon="external" />
                      </div>
                  </div>
                  <div className="project-item">
                      <h3>CareerCanvas <span className="project-badge live">Live</span></h3>
                      <div className="tech-tags"><span>React</span><span>Claude API</span><span>Template Engine</span><span>Netlify</span></div>
                      <p>An AI resume-to-portfolio converter that generates a styled, responsive portfolio site from a resume upload — using a prompt-engineering pipeline to extract structured data and produce themed HTML/CSS output.</p>
                      <div className="project-links">
                          <ProjectLink href="https://career-canvas-pn.netlify.app" label="Live Demo" icon="external" />
                      </div>
                  </div>
                  <div className="project-item">
                      <h3>Tech Articles Application</h3>
                      <div className="tech-tags"><span>MongoDB</span><span>Express</span><span>React</span><span>Node.js</span><span>Redis</span></div>
                      <p>A platform where users register, log in and interact with technology articles, viewing and liking content. The dashboard surfaces charts of the most viewed and most liked articles.</p>
                      <div className="project-links">
                          <ProjectLink href="https://github.com/Priyesh95/tech-articles-frontend" label="Code" icon="github" />
                      </div>
                  </div>
                  <div className="project-item">
                      <h3>TravelSnap</h3>
                      <div className="tech-tags"><span>MongoDB</span><span>Express</span><span>React</span><span>Node.js</span></div>
                      <p>A web app where users upload pictures of their vacations and browse photos shared by others, built on the MERN stack.</p>
                      <div className="project-links">
                          <ProjectLink href="https://github.com/Priyesh95/travelSnapFrontend" label="Code" icon="github" />
                      </div>
                  </div>
              </div>
          </div>
        </FadeIn>
      </section>
  
      <section id="experience" className="section experience">
      <FadeIn>
          <div className="container">
              <h2>Experience</h2>
              <p className="section-sub">My professional journey</p>
              <div className="timeline">
                  <div className="timeline-line"></div>

                  <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="experience-item">
                          <div className="exp-header">
                              <h3>Senior Software Engineer</h3>
                              <span className="exp-date">Feb 2020 - Present</span>
                          </div>
                          <p className="exp-company"><a href="https://www.servicenow.com" target="_blank" rel="noopener noreferrer">ServiceNow</a> <span className="exp-location">• Remote, India</span></p>
                          <h4 className="experience-subhead">AI &amp; Automation Innovation <span className="experience-period">2024 - Present</span></h4>
                          <ul className="project-list">
                              <li>Built a production MCP agent for conversational workflow automation, letting users create PWM plans, schedules and work orders through natural language with any LLM via Model Context Protocol — cutting manual data entry time by 60%.</li>
                              <li>Deployed First Pass Agent, an enterprise RAG system that auto-resolves incoming FSM issues via semantic search across a knowledge base of 500+ documented solutions, reducing manual case triage effort by 40%.</li>
                              <li>Developed a self-improving Runbook Updater agent that fetches resolved case tasks, deduplicates via semantic similarity, and creates/updates knowledge base entries — keeping documentation current without manual intervention.</li>
                              <li>Created a multi-agent test automation system where one agent analyzes code changes in defects/stories and another generates test cases from learned patterns, accelerating QA coverage for PWM and Appointment Booking.</li>
                          </ul>
                          <h4 className="experience-subhead">Core Product — PWM &amp; Appointment Booking <span className="experience-period">2020 - Present</span></h4>
                          <ul className="project-list">
                              <li>Designed and built the Planned Work Management (PWM) scheduling engine handling 500K+ recurring work orders monthly across 200+ enterprise customers, with automated schedule generation, timezone handling and work-order suppression logic.</li>
                              <li>Led the Appointment Booking system deployed for national COVID-19 vaccine programs across multiple countries, processing millions of bookings with 99.9% uptime and sub-200ms API response times under peak load.</li>
                              <li>Architected and launched a Contractor Management marketplace enabling competitive bidding on field-service tasks, with real-time notifications, bid evaluation workflows and contractor performance tracking.</li>
                              <li>Shipped complex PWM features — meter-based work triggers, duration-based scheduling with forecasting, schedule occurrence management across timezones, CIM/PCM integration — and led accessibility work to WCAG 2.2 Level AA.</li>
                          </ul>
                          <div className="tech-tags"><span>MCP</span><span>RAG</span><span>React</span><span>Java</span><span>Semantic Search</span><span>ServiceNow Platform</span></div>
                      </div>
                  </div>

                  <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="experience-item">
                          <div className="exp-header">
                              <h3>Associate Solution Advisor</h3>
                              <span className="exp-date">Jul 2017 - Feb 2020</span>
                          </div>
                          <p className="exp-company"><a href="https://www2.deloitte.com" target="_blank" rel="noopener noreferrer">Deloitte</a> <span className="exp-location">• Hyderabad, India</span></p>
                          <ul className="project-list">
                              <li>Developed an IoT-powered solar plant monitoring platform (Python Flask, AngularJS) with real-time health tracking for 50+ inverters, Highcharts production analytics and an SMS/email emergency alert system on a PostgreSQL backend serving 10+ installations.</li>
                              <li>Built a face recognition fraud detection system for KYC verification (Python Flask, OpenCV) with a multi-angle face-matching algorithm achieving 95%+ accuracy to prevent identity fraud during customer onboarding.</li>
                          </ul>
                          <div className="tech-tags"><span>Python</span><span>Flask</span><span>AngularJS</span><span>OpenCV</span><span>PostgreSQL</span></div>
                      </div>
                  </div>
              </div>
          </div>
        </FadeIn>
      </section>
  
      <section id="education" className="section education">
      <FadeIn>
          <div className="container">
              <h2>Education</h2>
              <p className="section-sub">Where it started</p>
              <div className="education-grid">
                  <div className="education-item">
                      <h3>Bachelor of Engineering in Information Technology</h3>
                      <p>Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore · 2013 - 2017</p>
                  </div>
              </div>
          </div>
        </FadeIn>
      </section>
  
      <section id="contact" className="section contact">
          <div className="container">
              <h2>Get in Touch</h2>
              <p className="section-sub">Have a project in mind or just want to say hello?</p>
              <div className="contact-info">
                  <a href="mailto:priyesh.nagar1995@gmail.com" className="contact-line"><MailIcon /> priyesh.nagar1995@gmail.com</a>
                  <span className="contact-line"><PinIcon /> Remote, India</span>
              </div>
              <div className="contact-socials">
                  <a href="https://github.com/Priyesh95" target="_blank" rel="noopener noreferrer" className="contact-pill">GitHub</a>
                  <a href="https://www.linkedin.com/in/priyesh-nagar/" target="_blank" rel="noopener noreferrer" className="contact-pill">LinkedIn</a>
              </div>
              <a href="mailto:priyesh.nagar1995@gmail.com" className="btn contact-btn"><MailIcon /> Send me an email</a>
          </div>
      </section>
  
      <footer className="footer">
          <div className="container">
              <p>&copy; 2026 Priyesh Nagar. All rights reserved.</p>
          </div>
      </footer>
      </div>
        )
    };


export default App;

