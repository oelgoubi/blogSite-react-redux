import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux'  // function to bring back a hoc 


class Home extends Component{
   /*  state={
        posts:[]
    }
 componentDidMount()
  {   // asyn function it takes some to go
      axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res=>{
          console.log(res.data)
          this.setState({
              posts:res.data.slice(0,10)   // GET ONLY THE 10 first Elements S
          })
      })
    } */


   render(){

       console.log(this.props);
       const {posts}=this.props;
       const postLists = posts.length ? 
       (posts.map(post=>{
           return (<div className="post card" key={post.id}>
                     <img src={Pokeball} alt="a Pocke ball"></img>
                      <div className="card-content">
                          <Link to={'/'+post.id}><span className="card-title red-text center">{post.title}</span></Link>
                          <p className="center">{post.body}</p>
                      </div>
                   </div>)
       })) : 
       (<div className="center">No posts yet !</div>)
        return (
           <div className="container home">
             <h4 className="center">Home</h4> 
             {postLists}
          </div>
          )
   }

}

// we get acces to the state of the store 
const mapStateToProps =(state) =>{
    return {
        posts:state.posts   // add posts property to the props
    }

}



export default connect(mapStateToProps)(Home); // function that will return a hoc then the hoc will wrap this component