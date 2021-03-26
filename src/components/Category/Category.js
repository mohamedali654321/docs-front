
import React, {useEffect,useState} from 'react'
import axios from 'axios'


const Home=({match})=> {
    const slug=match.params.slug;
    const endPoint=`http://54.220.211.123:1227/categories/${slug}`;
    const [cat, setCat]=useState([]);
    useEffect(()=>{
       axios.get(endPoint).then(res=>{
           setCat(res.data)
       }).catch(err=>{
           console.log(err)
       })

    },[]);
    console.log({cat})
    return (
       
         <div>
            <h1>{cat.name}</h1>
                  


         </div>


               
           
 

        
        
        
    )
}

export default Home
