
const initState ={
    posts:[
    {
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"
     },
   {
 
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut"
  },
    ]
}




// the reducer process the action we dispatched to him 
const rootReducer= (state  = initState,action) =>{
    if(action.type === 'DELETE_POST')
    {
        let newPosts = state.posts.filter(post =>{
            return post.id !== action.id
        })

        return{
            ...state, // take the current state 
            posts : newPosts
        }
        
    }
    return state;
   
}


export default rootReducer;