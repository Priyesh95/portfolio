import React, {Component} from 'react';
import Projects from './Project';
import SocialProfiles from './SocialProfile'
import profile2 from './assets/profile2.jpg';

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
                <div className = "bio">
                <img style = {{margin:20}} src = {profile2} alt= "Loading" className = "profile"></img>
                <h1>
                    Hello!!
                </h1>
                <p>
                    My Name is Priyesh Nagar. I'm a Software Engineer.
                </p>
                <p>
                    I am a Angular and React Developer.
                </p>
                {bio}
                </div>
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
            </div>


            
        )
    }

}


export default App;

