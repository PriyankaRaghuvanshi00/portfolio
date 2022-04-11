import React from 'react'
import "./sidebar.css"
// 
export default function SideBar({ folder, setfolder }) {
   return (
      <div className="sidebar">
         <div className="upper">
            <i class="far fa-copy" onClick={() => setfolder(!folder)}></i>
            <i class="fas fa-search"></i>
            <i class="fas fa-code-branch"></i>
            <i class="fas fa-th-large"></i>
            <i class="fas fa-flask"></i>
         </div>
         <div className="lower">
            <i class="far fa-user-circle"></i>
            <i class="fas fa-cog"></i>
         </div>
      </div>
   )
}
