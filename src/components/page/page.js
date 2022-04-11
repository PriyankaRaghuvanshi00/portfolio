import React from 'react'
import "./page.css"

export default function Page() {
   return (
      <div className='page'>
         <p class="line anim-typewriter">{'Hello World! 👋'}    </p>
         <p class="line anim-typewriter ">{'Priyanka Raghuvanshi, Here'}   </p>
         <div id="changable"> <span></span></div>
         <p class="bye-typewriter bye">{'cout<<"Okay byeeeee!!";'}   </p>
      </div>
   )
}
