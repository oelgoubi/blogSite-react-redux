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
          <p>You can Reach me via email othmanelgoubi@gmail.com.</p>
          <p>I will Reply to your message as soon as possible.</p>
       </div>
   )


}

export default Contact;