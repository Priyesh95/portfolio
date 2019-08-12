import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfile'



class SocialProfile extends Component{
    render(){
        const {link,image} = this.props.SocialProfile;

        return(
            <span style = {{display: 'inline-block', margin: 10}}>
                
                <a href = {link}><img src = {image} alt = "loading" style = {{width: 35, height:35 }}></img></a>
            </span>
        )
    }
}

class SocialProfiles extends Component{
    render() {
        return(
            <div>
                <h2>
                    Connect with me!
                </h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return(
                                <SocialProfile key ={SOCIAL_PROFILE.id} SocialProfile = {SOCIAL_PROFILE}/>
                            )
                        })
                    }
                </div>
            </div>
        )
        

        
    }
}

export default SocialProfiles;