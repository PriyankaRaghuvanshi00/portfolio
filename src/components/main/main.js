import React, { useEffect, useState } from 'react'
import ContactME from '../contactme/contactme';
import Page from '../page/page'
import "./main.css"

export default function Main() {
   const [current, setcurrent] = useState(0)

   function changePage(id) {
      setcurrent(id);
   }
   var pages = [{ title: 'Introduction', component: <Page /> }, { title: 'Contact Me', component: <ContactME /> }]
   return (
      <div className="main">
         <div className="main-header">
            {pages.map((e, i) => < div onClick={() => changePage(i)} className={current == i ? "main-file bb" : "main-file"} >
               <i class="fab fa-react react"></i>
               <h3>{e.title}</h3>
               <i class="fas fa-times cross" onClick={() => { }}></i>
            </div>)
            }
         </div>
         {pages[current].component}
      </div >
   )
}
