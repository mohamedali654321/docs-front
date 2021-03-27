
import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { _ } from 'lodash'

const Home=({match})=> {
    const slug=match.params.slug;
    const endPoint=`http://localhost:1337/categories/${slug}`;
    const [cat, setCat]=useState([]);
    // const [content,setContent]=useState([]);

    
   
    useEffect(async()=>{
       await axios.get(endPoint).then(res=>{
            setCat(res.data)
        }).catch(err=>{
            console.log(err)
        })
        
    },[]);
    console.log({cat})
    
    return (
       
         <div>
             
            <h1 key={cat.id}>{cat.name}</h1>
           { cat && cat.content ?
           (
               cat.content.map(cont=>(
                   <div key={cont.id}>
                       <h2>{cont.title}</h2>
                       <div>{cont.content}</div>
                       </div>
               ))
           ):null

           }
         
           
                
            
            
           
            

                  


         </div>


               
           
 

        
        
        
    )
}

export default Home
