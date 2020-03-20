import React from 'react'
import {NavLink,withRouter} from 'react-router-dom'
//import {Link,NavLink,withRouter}

const Navbar = (props)=>{
   /* setTimeout(()=>{
      props.history.push('/about')
    },2000);  */

   return(
     <nav className="nav-wrapper red darken-3">
         <div className="container">
            <a href="#" className="brand-logo left">Inspire'GO</a>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
         </div>
     </nav>
   );

}

// now we export a supercharged component 
export default withRouter(Navbar);// Wrappe the component --> to make it receive components (supercharging the components)