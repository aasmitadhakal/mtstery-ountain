import React from 'react'
import axios from './axios';
import {useEffect,useState} from 'react'

function Get() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //    axios.get('?_limit=10').then((response) => {
  //       setPosts(response.data);
  //    });
  // }, []);
  const getPermissions = async () => {
 
    axios
      .get('?_limit=10')
      .then((result) => {
        setPosts(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
     
  };

  useEffect(
    () => {
      getPermissions();
    },
    () => {},
    []
  );
  return (
    <>
<div className="app">
    <h2>All Posts 📫</h2>
    {posts.map((post) => {
       return (
          <div className="post-card" key={post.id}>
            <h2 className="post-title">{post.id}</h2>
             <h2 className="post-title">{post.title}</h2>
             <p className="post-body">{post.body}</p>
             <div className="button">
                <div className="delete-btn">Delete</div>
             </div>
          </div>
       );
    })}
  </div>
    </>
  )
}

export default Get