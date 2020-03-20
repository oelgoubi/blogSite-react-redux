import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../actions/postActions'


class Post extends Component {

    handleClick= ()=>{
        this.props.deletePost(this.props.post.id);
        // REDIRECT the user to the Home page 
        this.props.history.push('/');
    }

    render(){
        console.log(this.props)
        const post = this.props.post ?  ( 
            <div className="post">
               <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}> Delete Post</button>
                </div>
           </div> ) : 
           ( 
            <div className="center">
               <span>Page is Loading...</span>
           </div> )

           return (
               <div className="container">
                   {post}
               </div>
           )

    }
}
// we add our own props because we need to acces the url params
const mapStateToProps =(state,ownProps)=>{
   let id = ownProps.match.params.post_id;
   return {
       post : state.posts.find(post => post.id === parseInt(id))
   }
}

const mapDispatchToProps =(dispatch)=>{
   return {
       deletePost : (id)=>{ dispatch(deletePost(id))}
   }
}
// store.dispatche
export default connect(mapStateToProps,mapDispatchToProps)(Post);