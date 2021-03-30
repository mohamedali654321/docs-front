import React ,{useEffect,useState} from 'react'
import axios from 'axios'

function Topic({match}) {
     const slug=match.params.slug;
    const section=match.params.section;
    const topic=match.params.topic
    const endPoint=`http://localhost:1337/categories/${slug}/${section}/${topic}`;
    const [data, setData]=useState([]);
    useEffect(()=>{
       axios.get(endPoint).then(res=>{
           setData(res.data)
       }).catch(err=>{
           console.log(err)
       })

    },[data]);
    return (
        <div>
             <h1 key={data.id}>{data.name}</h1>
           { data && data.content ?
           (
            data.content.map(cont=>(
                   <div key={cont.id}>
                       <h2>{cont.title}</h2>
                       <div dangerouslySetInnerHTML={{__html:cont.content}}></div>
                       </div>
               ))
           ):null

           }
         
        </div>
    )
}

export default Topic
