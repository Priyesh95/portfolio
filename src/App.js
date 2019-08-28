import React, {Component} from 'react';
import Projects from './Project';
import SocialProfiles from './SocialProfile'
import profile2 from './assets/profile2.jpg';
import solar from './assets/solar-dashboard.jpg';
import industry from './assets/industry.jpg';
import facial_recognition from './assets/facial-recognition.jpg';
import sec_games from './assets/sec-games.jpg';
import fraud_transactions from './assets/fraud-transactions.jpg';
import digital_card from './assets/digital-card.jpg';
import e_tailing from './assets/e-tailing.jpg';
import angular from './assets/angular.png';
import angularjs from './assets/angularjs.jpg';
import react from './assets/react.png';

class App extends Component{

    state = { displayBio : false};

    // constructor(){
    //     super();
    //     this.state = {displayBio : false};

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
        
    // }




    toggleDisplayBio = () =>{
        this.setState({displayBio: !this.state.displayBio});
    }


    render(){

        const bio = this.state.displayBio ? 
        (<div><p>I live in Hyderabad, Telangana</p>
            <p>Besides coding i like yoga and meditation</p>
            <button className="w3-btn w3-white readbtn" onClick = {this.toggleDisplayBio}>Show Less</button></div>) 
        : (<div><button onClick = {this.toggleDisplayBio} className="w3-btn w3-white readbtn">Read More</button></div>) ;

        
        return(
            <div>
                <div className="w3-content w3-margin-top" style = {{maxWidth:1400}}>


<div className="w3-row-padding">


  <div className="w3-third">

  <div className="w3-white w3-text-grey w3-card-4 w3-margin-bottom">
  <div className="w3-display-container" style = {{textAlign: "center"}}>
      <img src = {profile2} alt= "Loading" className = "profile" style = {{marginTop:13}}></img>
        <div className="w3-container w3-text-black">
          <h2 style = {{color: '#49515a'}}>Priyesh Nagar</h2>
          <h4 style = {{color:'#778492'}}>Full Stack Developer</h4>
        </div>
      </div>
  </div>

  <div className="w3-white w3-text-grey w3-card-4 w3-margin-bottom">
  <div className="w3-display-container" >
  <div className="w3-container">
        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Hyderabad</p>
        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>priyesh.nagar1995@gmail.com</p>
        <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>8989811668</p>
         
      </div>
  </div>
  </div>

  
    <div className="w3-white w3-text-grey w3-card-4 w3-margin-bottom">
      
      <div className="w3-container">
        
        
        <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
        
        <p>Angular JS 1.x</p>
        <p>Angular 5 and 6</p>
        <p>Python and Flask</p>
        <p>Codeigniter (PHP)</p>
        <p>SQL Server, Postgresql, MYSQL</p>
        <p>HTML, CSS, SCSS, JavaScript, Typescript</p>
        <p>R</p>
        <p>Basics of MONGODB and Elastic Search</p>
        
        <hr></hr>

        <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Services I have Worked on</b></p>
        <p>English</p>
        <p>AWS EC2 Instance</p>
        <p>AWS S3 bucket</p>
        <p>AWS Relational Database Service</p>
        <p>Github</p>
        <p>Splunk</p>
        <p>AWS SQS Service</p>
        <p>Machine Learning</p>
        <p>Sendgrid</p>
        <p>Firebase</p>
        <p>Kibana</p>
        <p>Highcharts</p>
      </div>
    </div>

    <div className="w3-white w3-text-grey w3-card-4 w3-margin-bottom">
      <div className="w3-container">
        <p className="w3-large"><b><i className="fa fa-trophy fa-fw w3-margin-right w3-text-teal"></i>Achievements</b></p>
        <p>Secured All India Rank 8522 JEE (Joint Entrance Exam) Advance 2013.</p>
        <p>Received scholarship Worth INR 25,000/- by M.P. government in class 12th.</p>
        </div>
        </div>
    
        <div className="w3-white w3-text-grey w3-card-4 w3-margin-bottom">
      <div className="w3-container">
        <p className="w3-large"><b><i className="fa fa-thumbs-up fa-fw w3-margin-right w3-text-teal"></i>Interests</b></p>
        <p>Yoga Meditation</p>
        <p>Cricket Football</p>
        </div>
        </div>


        <div className="w3-white w3-text-grey w3-card-4">
      <div className="w3-container">
        <p className="w3-large"><b><i className="fa fa-info-circle fa-fw w3-margin-right w3-text-teal"></i>Personal Information</b></p>
        <p><b>Mother’s Name</b> : Sangeeta Nagar</p>
        <p><b>Father’s Name</b> : Pramod Nagar</p>
        <p><b>Permanent Address</b> : Jankupura Tulsidas Gali Mandsaur (458001)</p>
        <p><b>Residential</b> : 402, Brundavanam 1 Apartments, P Janardhana Reddy </p>
        </div>
        </div>
  
  </div>

  <div className = "w3-twothird">
      
      <div className = "w3-container w3-card w3-white w3-margin-bottom">
      <h2 className = "w3-text-grey w3-padding-16"><i className = "fa fa-list-alt fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Summary</h2>
        <div className = "w3-container">
            <p>I am an Associate Solution Advisor in Deloitte Advisory with the Analytics practice specializing in Software development. I have experience of 2 years in developing web applications using Angular, Angular JS 1.x, Angular 5 & 6 and Flask.I am well versed in Codeigniter PHP, HTML, Javascript, SQL server, POSTGRESQL R and Python. I also had exposure to Mongo DB and have basic understanding of Data Structures and Algorithms</p>
          <hr></hr>
        </div>
      </div>
    
      <div className = "w3-container w3-card w3-white w3-margin-bottom">

        <h2 className = "w3-text-grey w3-padding-16"><i className = "fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
        <div className = "w3-container">
          <h5 className = "w3-opacity"><b>Associate Solution Advisor | Deloitte</b></h5>
        <h6 className = "w3-text-teal"><i className = "fa fa-calendar fa-fw w3-margin-right"></i>July 2017 - <span className = "w3-tag w3-teal w3-round">Current</span></h6>
        
        
        <div className = 'w3-third'>
        <img src = {solar} alt= "Loading" className = "projects" style = {{marginTop:27}}></img>
        </div>
        <div className = 'w3-twothird'>
          <p>Currently developing web application for real time solar plants data. The application is based on real time data drawn using IOT devices embedded on the plants. The application visually displays real time health of all the invertors of a site and alerts the users in case of emergency. The application is developed using Python Flask, Angular JS, Highcharts and Postgresql.</p>
          </div>
          
        
        <div className = 'w3-third'>
        <img src = {industry} alt= "Loading" className = "projects" style = {{height: 120}}></img>
        </div>
        <div className = 'w3-twothird'>
          <p>Developed and owned Industry application which is developed on Angular 7, python Flask. The application was developed to showcase industry capability of Deloitte across various industries clients and offerings.</p>
          </div>

        <div className = 'w3-third'>
        <img src = {facial_recognition} alt= "Loading" className = "projects" style = {{height: 120}}></img>
        </div>
        <div className = 'w3-twothird'>
          <p>Developed and owned face recognition tool using Flask for preventing KYC frauds. It is a tool which detects whether the given two images are of same person taken from any angle. The tool was developed using Python Flask.</p>
        </div>  
          
          <div className = 'w3-third'>
        <img src = {sec_games} alt= "Loading" className = "projects" style = {{marginTop:27}}></img>
        </div>
        <div className = 'w3-twothird'>
          <p>Recently worked on SEC games analysis project which was developed using Python, Flask and SQL server for loading data for analysis. The project required to visually showcase the analysis using charts (chart.js) where the charts should be made to show the behavior of referees towards the home teams.</p>
          </div>

          <div className = 'w3-third'>
        <img src = {fraud_transactions} alt= "Loading" className = "projects" style = {{height: 120}}></img>
        </div>
        <div className = 'w3-twothird'>
          <p>Worked on fraud investigation engagement for a tech giant where we had to detect fraudulent transactions. The engagement required skills in SQL server and Python for fuzzy match to get similarity score of different descriptions.</p>
          </div>
          
        </div>
        <div className = "w3-container">
          <h5 className = "w3-opacity"><b>Key Achievements</b></h5>
          <p>
          • Received two outstanding and one client appreciation awards.
          </p>
          <p>•  Conducted various trainings in Python for professionals.</p>
        </div>
        <hr></hr>
        <div className = "w3-container">
          <h5 className = "w3-opacity"><b>Associate Developer | Wittyfeed</b></h5>
        <h6 className = "w3-text-teal"><i className = "fa fa-calendar fa-fw w3-margin-right"></i>April 2016- June 2017 </h6>
        <p>
        •   Worked on live project www.wittyfeed.com to send emails to all its users using Amazon’s SQS and Sendgrid, the product used codeigniter for its implementation.
        </p>
        <p>
        •   Implemented Mongo DB for managing data of the website’s users and Created dashboard for www.viral9.com using AngularJS.
        </p>
        </div>    
      </div>

      <div className = "w3-container w3-card w3-white w3-margin-bottom">
        <h2 className = "w3-text-grey w3-padding-16"><i className = "fa fa-tasks fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Personal Projects</h2>
        <div className = 'w3-third'>
        <img src = {digital_card} alt= "Loading" className = "projects" style = {{marginTop:40,height: 240}}></img>
        </div>
        <div className = 'w3-twothird'>
          <p>It is an android app and web app with the data being stored on AWS Relational Database Service through APIs using codeigniter. The product provides sales lead management through the visiting cards collected. The product helps the user in storing the business/visiting cards on their phone so that no contact is ever lost. I set up the AWS server for APIs and also for hosting website. I developed the REST API endpoints of all the functionalities required for the app. Also I developed the website and dashboard for the users to monitor their visiting cards and leads. The web application was based on MVC architecture using PHP, HTML, CSS, and Javascript.</p>
          </div>
          <div className = 'w3-third'>
        <img src = {e_tailing} alt= "Loading" className = "projects" style = {{marginTop:40,height: 240}}></img>
        </div>
        <div className = 'w3-twothird'>
          <p>Project was developed using Java, HTML, CSS, JAVASCRIPT, MYSQL and PHP (MVC architecture). It is a Business-oriented software for retailers who supply products to various e-commerce websites. It has various modules which helps the shopkeeper in managing inventories, keeping track of all the orders
          at once, generate invoices on one click, complete payment management, storing all the orders by uploading the excel sheet provided by websites and many more features.
          </p>
          </div>
        
        <div className = 'w3-container'>
        <h5 className = "w3-opacity"><b>Demo Projects</b></h5>
        <div className="w3-row">
        <div className="w3-third w3-container" style = {{textAlign : "center"}}>
        <img src = {angular} alt= "Loading" className = "projects" ></img>
        <a href = "https://client-panel-prod-e3422.firebaseapp.com/login">Client Panel</a>
        </div>
        <div className="w3-third w3-container" style = {{textAlign : "center"}}>
        <img src = {angularjs} alt= "Loading" className = "projects" ></img>
        <a href = "https://client-panel-prod-e3422.firebaseapp.com/login">Sell Products</a>
        </div>
        <div className="w3-third w3-container" style = {{textAlign : "center"}}>
        <img src = {react} alt= "Loading" className = "projects" ></img>
        <a href = "https://client-panel-prod-e3422.firebaseapp.com/login">Weather App</a>
        <p></p>
        </div>
        </div>
        </div>

        
          

          
        </div>
        
            


      <div className = "w3-container w3-card w3-white">
        <h2 className = "w3-text-grey w3-padding-16"><i className = "fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
        <div className = "w3-container">
          <h5 className = "w3-opacity"><b>SGSITS Indore</b></h5>
          <h6 className = "w3-text-teal"><i className = "fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2017</h6>
          <p>Bachelor Of Engineering (Information Technology)</p>
          <p>7.3/10 CGPA</p>
          <hr></hr>
        </div>
      </div>
      
    
    </div>
    </div>
    </div>
    <footer className = "w3-container w3-teal w3-center w3-margin-top" >
  <p>Find me on social media.</p>

  <a href = "https://github.com/Priyesh95"><i className = "fa fa-github w3-hover-opacity"></i></a>
  <a href = "https://linkedin.com/in/priyesh-nagar-63a52011a/" ><i style = {{marginLeft:'5px'}} className = "fa fa-linkedin w3-hover-opacity"></i></a>
  
</footer>
    </div>  
        )
    }

}


export default App;

