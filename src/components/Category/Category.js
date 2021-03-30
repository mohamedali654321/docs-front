
import React, {useEffect,useState} from 'react'
import axios from 'axios'

import {Row , Col , Container} from 'react-bootstrap' 
import {Link, useHistory} from 'react-router-dom'


const Home=({match})=> {
    const slug=match.params.slug;
    const endPoint=`http://localhost:1337/categories/${slug}`;
    const [cat, setCat]=useState([]);
    // const [content,setContent]=useState([]);
   const redirect=useHistory();
    
   
    useEffect(async()=>{
       await axios.get(endPoint).then(res=>{
         
              
            setCat(res.data)
        }).catch(err=>{
            console.log(err)
        })
        
    },[cat]);
    
    if(!cat)
    { 
      redirect.push('/');
      return;
    }
   
    
    return (
       
          
            
      <div className="content">

          
          
            <h2 key={cat.id}>{cat.name}</h2>
            { cat && cat.content ?
            (
          cat.content.map(cont=>(
             <div key={cont.id}>
               <h3>{cont.title}</h3>
              <div style={{fontSize:".75vw"}} dangerouslySetInnerHTML={{__html:cont.content}}></div>
                </div>
                     ))
                    ):null

                   }
                 
                  
        
</div>




     
       
         

           
            

        


               
           
 

        
        
        
    )
        }

export default Home
