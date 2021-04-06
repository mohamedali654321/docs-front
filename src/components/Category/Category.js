
import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Scrollspy from 'react-scrollspy'
import './Category.css'

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
    
    
   
    
    return (
       
          
            
      <div className="wrapper">

          
          <div className="left">
            <h2 key={cat.id} id={cat.id}>{cat.name}</h2>
            { cat && cat.content ?
            (
          cat.content.map(cont=>(
             <div  >

             <div  key={cont.id}>
               <h3 id={cont.title} key={cont.id} >{cont.title}</h3>
              <div style={{fontSize:"14px"}} dangerouslySetInnerHTML={{__html:cont.content}}></div>
                </div>
                
                      
                
                </div>
                  
                     ))
                    ):null

          }
                 </div>

                 <div className="right">
                  <div className="cont">

                    <p style={{fontSize:"15px"},{fontWeight:"bold"}}>In This Topic</p>
                  { cat && cat.content ?
            (
          cat.content.map(cont=>(
             <div  >

              <div  key={cont.id}>
               
              <Scrollspy items={ [cont.title] } currentClassName="is-current">
               
                    <a href={`#${cont.title}`}>{cont.title}</a>
                       
                         </Scrollspy>
             
                </div> 

              
                
                      
                
                </div>
                  
                     ))
                    ):null

          }

                  </div>

                 </div>
                  
        
</div>




     
       
         

           
            

        


               
           
 

        
        
        
    )
        }

export default Home
