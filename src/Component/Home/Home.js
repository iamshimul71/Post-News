import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Allpost from '../POst/Allpost';

const Home = () => {
    const [post, setPost] = useState([]);
    

    useEffect(()=>{
      const url = `https://jsonplaceholder.typicode.com/posts`;

      fetch(url)
      .then(res => res.json())
      .then(data=>setPost(data))
    },[])
    return (
        <div>
            
            <ul>
            {
                
                post.map(post => <Allpost post={post}></Allpost>)
            }
            </ul>
             
        </div>
    );
};

export default Home;