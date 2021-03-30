import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Section=({match})=> {

    const slug=match.params.slug;
    const section=match.params.section
    const endPoint=`http://54.220.211.123:1227/categories/${slug}/${section}`;
    const [sec, setSec]=useState([]);
    useEffect(()=>{
       axios.get(endPoint).then(res=>{
           setSec(res.data)
       }).catch(err=>{
           console.log(err)
       })

    },[sec]);
    
    
    return (
        <div className="container">
            
                
             <h2 key={sec.id}>{sec.name}</h2>
           { sec && sec.content ?
           (
               sec.content.map(cont=>(
                   <div key={cont.id}>
                       <h3>{cont.title}</h3>
                       <div style={{fontSize:"14px"}} dangerouslySetInnerHTML={{__html:cont.content}}></div>
                       </div>
               ))
           ):null

           }
           
           
        </div>
    )
}

export default Section
