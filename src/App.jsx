import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import { Route, Routes } from 'react-router-dom';
import config from '../config.json'
import GithubProjects from './components/GitHubProjects'
import Books from './components/Books'


function App() {
  const [githubProjects, setGithubProjects] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=user:${config.github.userName}&sort=stars&per_page=100&type=Repositories`)
      .then(responseP => responseP.json())
      .then(dataP => {
        console.log("after github projects success");
        console.log(dataP);
        setGithubProjects(dataP.items);
        console.log(dataP);
      }).catch(error => console.error('Error: fetching github project details failed:', error));

  });

  return (
    <div className="fade-in w-screen">
      <div className={`p-4 lg:p-10 min-h-full ${config.BG_COLOR}`}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<GithubProjects header={config.github.projects.header}
            projects={githubProjects}
            userName={config.github.userName} />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
