import { useCallback, useEffect, useState } from 'react'
import Profile from './Profile'
import SocialConnectivity from './SocialConnectivity'
import SkillSet from './SkillSet'
import Experience from './Experience'
import Education from './Education'
import GithubProjects from './GitHubProjects'
import config from '../../config.json'

function AboutMe({ }) {

    console.log(config)
    const [profile, setProfile] = useState({
        avatar: '',
        name: '',
        bio: '',
        location: '',
        company: '',
    });
  

    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch(`https://api.github.com/users/${config.github.userName}`)
            .then(response => response.json())
            .then(data => {
                setProfile({
                    avatar: data.avatar_url,
                    name: data.name || ' ',
                    bio: data.bio || '',
                    location: data.location || '',
                    company: data.company || '',
                });
                console.log("gefore github projects");
            })
            .catch(error => console.error('Error: fetching user details from github failed: ', error));
    },
        []);

    return (
       
                <div className="grid grid-cols-1 gap-6 roundex-box">
                    <Profile profile={profile} />
                    <SocialConnectivity profile={profile} />
                    <SkillSet skills={config.skills} />
                    <Experience experiences={config.experiences} />
                    <Education educations={config.educations} />
                    


                </div>
          
          
       
    )
}

export default AboutMe;