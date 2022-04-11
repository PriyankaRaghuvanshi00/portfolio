import React, { useState } from 'react'
import Main from '../main/main'
import SideBar from '../sidebar/sidebar'
import "./body.css"

export default function Body() {
   const [file1, setfile1] = useState(true);
   const [file2, setfile2] = useState(true);
   const [file3, setfile3] = useState(true);
   const [folder, setfolder] = useState(true);
   return (
      <div className="body">
         <SideBar setfolder={setfolder} folder={folder} />
         {folder ? <div className="file-container">
            <div className="folder">
               <div className="folder-title" onClick={() => { setfile1(!file1) }}>{file1 ? <i class="fas fa-chevron-down"></i> : <i class="fas fa-chevron-right"></i>}<h3>Skills</h3></div>
               {file1 ? <div className="files" >
                  <div className="file">
                     <i class="fab fa-react react" ></i><h3>React</h3>
                  </div>
                  <div className="file">
                     <i class="fab fa-cuttlefish c"></i><h3>C/C++</h3>
                  </div>
                  <div className="file">
                     <i class="fab fa-js js"></i><h3>JavaScript</h3>
                  </div>
                  <div className="file">
                     <i class="fab fa-css3-alt css"></i><h3>CSS</h3>
                  </div>
                  <div className="file">
                     <i class="fab fa-html5 html"></i><h3>HTML</h3>
                  </div>
               </div> : null}
               <div className="folder-title" onClick={() => { setfile2(!file2) }}>{file2 ? <i class="fas fa-chevron-down"></i> : <i class="fas fa-chevron-right"></i>}<h3>live Projects</h3></div>
               {file2 ? <div className="files" >
                  <div className="file">
                     <i class="fab fa-react react"></i><h3><a href="https://pathfindingvisualizer1.herokuapp.com/" target="_blank">Pathfinding visualizer</a></h3>
                  </div>
                  <div className="file">
                     <i class="fab fa-react react"></i><h3><a href="https://netflix-clone-by-priyanka.web.app/" target="_blank">Netflix clone</a></h3>
                  </div>
                  <div className="file">
                     <i class="fab fa-react react"></i><h3><a href="https://clone-9d7ab.web.app/" target="_blank">Youtube clone</a></h3>
                  </div>
                  <div className="file react">
                     <i class="fab fa-react"></i><h3><a href="https://pokemon-18a79.web.app/" target="_blank">Pokemon </a></h3>
                  </div>
                  <div className="file">
                     <i class="fab fa-react react"></i><h3><a href="https://reactjs-app-b425c.web.app/" target="_blank">Posts </a></h3>
                  </div>
               </div> : null}
               <div className="folder-title" onClick={() => { setfile3(!file3) }}>{file3 ? <i class="fas fa-chevron-down"></i> : <i class="fas fa-chevron-right"></i>}<h3>Github Links</h3></div>
               {file3 ? <div className="files" >
                  <div className="file">
                     <i class="fab fa-react react"></i><h3><a href="https://github.com/PriyankaRaghuvanshi00/Food-Ordering" target="_blank">Food Ordering</a></h3>
                  </div>
                  <div className="file">
                     <i class="fab fa-html5 html"></i><h3><a href="https://github.com/PriyankaRaghuvanshi00/drawingBoard" target="_blank">Drawing Board</a></h3>
                  </div>
                  <div className="file">
                     <i class="fab fa-html5 html"></i><h3><a href="https://github.com/PriyankaRaghuvanshi00/weatherForcast" target="_blank">WeatherForcast</a></h3>
                  </div>
                  <div className="file react">
                     <i class="fab fa-css3-alt css"></i><h3><a href="https://github.com/PriyankaRaghuvanshi00/parallaxWebsite" target="_blank">Parallax Website </a></h3>
                  </div>
               </div> : null}
            </div>
         </div> : null}
         <Main />

      </div>
   )
}
