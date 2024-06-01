import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import SocialConnectivity from './components/SocialConnectivity'
import SkillSet from './components/SkillSet'
import Experience from './components/Experience'
import Education from './components/Education'
import GithubProjects from './components/GitHubProjects'
import Books from './components/Books'
import config from '../config.json'



function App() {
  const [profile, setProfile] = useState({
    avatar: '',
    name: '',
    bio: '',
    location: '',
    company: '',
  });
  const [githubProjects, setGithubProjects] = useState([]);

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

        fetch(`https://api.github.com/search/repositories?q=user:${config.github.userName}&sort=stars&per_page=100&type=Repositories`)
          .then(responseP => responseP.json())
          .then(dataP => {
            console.log("after github projects success");
            console.log(dataP);
            setGithubProjects(dataP.items);
            console.log(dataP);
          }).catch(error => console.error('Error: fetching github project details failed:', error));

          fetch(`https://openlibrary.org/search.json?q=computer+programming&fields=key,title,author_name,editions&sort=rating`)
          .then(responseB => responseB.json())
          .then(dataB => {
            //console.log("after books projects success");
            //console.log(dataB);
            setBooks(dataB);
            console.log(dataB);
            
          })
          .catch(error => console.error('Error: fetching getBooksProject details failed:', error));


      })
      .catch(error => console.error('Error: fetching user details from github failed: ', error));
  },
    []);


  return (
    <div className="fade-in h-screen">
      <div className={`p-4 lg:p-10 min-h-full ${config.BG_COLOR}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-6">
              <Profile profile={profile} />
              <SocialConnectivity profile={profile} />
              <SkillSet skills={config.skills} />
              <Experience experiences={config.experiences} />
              <Education educations={config.educations} />
              <Books books={books} />
              
              
            </div>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <div className="grid grid-cols-1 gap-6">
              <GithubProjects header={config.github.projects.header}
                projects={githubProjects}
                userName={config.github.userName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
