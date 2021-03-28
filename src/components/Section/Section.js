import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Section=({match})=> {

    const slug=match.params.slug;
    const section=match.params.section
    const endPoint=`http://localhost:1337/categories/${slug}/${section}`;
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
            <div className="content">
             <h1 key={sec.id}>{sec.name}</h1>
           { sec && sec.content ?
           (
               sec.content.map(cont=>(
                   <div key={cont.id}>
                       <h2>{cont.title}</h2>
                       <div dangerouslySetInnerHTML={{__html:cont.content}}></div>
                       </div>
               ))
           ):null

           }
           </div>
           <div className='topic'>
              

           </div>
         
        </div>
    )
}

export default Section
