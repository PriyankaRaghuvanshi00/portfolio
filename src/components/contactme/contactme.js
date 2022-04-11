import React from 'react'
import "./contact.css"
export default function ContactME() {
   return (
      <>
         <div className='contactme'>
            <a href='#' target="_blank">
               <div className='contact'>
                  <i class="fab fa-linkedin ld"></i>
                  <h3>LinkedIn</h3>
               </div>
            </a>
            <a href="mailto: priyankaraghuvanshics19@acropolis.in">
               <div className='contact'>
                  <i class="far fa-envelope mail"></i>
                  <h3>Mail</h3>
               </div>
            </a>
            <a href="https://github.com/PriyankaRaghuvanshi00" target={"_blank"}>
               <div className='contact'>
                  <i class="fab fa-github github"></i>
                  <h3>Github</h3>
               </div>
            </a>
            <a href="/resume" target={"_blank"}>
               <div className='contact'>
                  <i class="fas fa-file"></i>
                  <h3>See My Resume</h3>
               </div>
            </a>
            <a href="https://codechef.com/users/priyankarag/" target="_blank">
               <div className='contact'>
                  <i class="fas fa-code"></i>
                  <h3>Codechef</h3>
               </div>
            </a>

         </div>
         <p class="bye-typewriter bye">{'cout<<"It was nice meeting you";'}   </p>
      </>

   )
}
