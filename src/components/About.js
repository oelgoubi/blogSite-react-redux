import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About =()=>{

   return (
       <div className="container">
          <h4 className="center">About</h4>
          <p>Instead of having a css folder, you will find that the download instead contains many .scss files which contain the styles of individual components. Unfortunately, the browser cannot interpret Sass, so you must have your Sass compiler compile the scss/materialize.scss into a regular CSS file. At this point you can link this newly outputted file in your HTML page.</p>
       </div>
   )


}

export default Rainbow(About);