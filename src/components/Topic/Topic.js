import React ,{useEffect,useState} from 'react'
import axios from 'axios'

function Topic({match}) {
     const slug=match.params.slug;
    const section=match.params.section;
    const topic=match.params.topic
    const endPoint=`http://54.220.211.123:1227/categories/${slug}/${section}/${topic}`;
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
             <h2 key={data.id}>{data.name}</h2>
           { data && data.content ?
           (
            data.content.map(cont=>(
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

export default Topic
