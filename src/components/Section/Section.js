import React,{useState,useEffect} from 'react'
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

    },[]);
    console.log({sec})
    return (
        <div>
            {sec.name}
        </div>
    )
}

export default Section
