import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <>
            <div className="card compact bg-base-100 shadow bg-opacity-40 scroll-py-0">
                <div className="card-body">
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/books">Books</Link>
                    
                </div>
            </div>
        </>
        /* <div class="flex items-center justify-between py-5">
             <div class="flex flex-shrink-0 items-center">
                 <a class=" text-[#16f2b3] text-3xl font-bold" href="/">ABU SAID</a>
             </div>
             <ul class="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
                 <li>
                     <a class="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                         <div class="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
                     </a>
                 </li>
                 <li>
                     <a class="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div class="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
                     </a>
                 </li>
                 <li>
                     <a class="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div class="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
                     </a>
                 </li>
                 <li>
                     <a class="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div class="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></a></li><li><a class="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div class="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div>
                     </a>
                 </li>
                 <li>
                     <a class="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div class="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
                     </a>
                 </li>
             </ul>
         </div> */

    )

}

export default NavigationBar;