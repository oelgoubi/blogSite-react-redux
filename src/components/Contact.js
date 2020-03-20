import React from 'react'


const Contact =(props)=>{
 // props attached to the components once we use it inside the route 
   /* console.log(props);
   setTimeout(()=>{
       props.history.push('/about')
   },2000); */

   return (
       <div className="container">
          <h4 className="center">Contact</h4>
          <p>Instead of having a css folder, you will find that the download instead contains many .scss files which contain the styles of individual components. Unfortunately, the browser cannot interpret Sass, so you must have your Sass compiler compile the scss/materialize.scss into a regular CSS file. At this point you can link this newly outputted file in your HTML page.</p>
       </div>
   )


}

export default Contact;