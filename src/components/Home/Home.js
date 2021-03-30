import React ,{useEffect,useState} from 'react'
import axios from 'axios'
 function Home() {

    const endPoint='http://54.220.211.123:1227/categories/home';
    const [home,setHome]=useState([]);
    const [content,setContent]=useState([]);
    useEffect(()=>{
         axios.get(endPoint)
        .then(  res=>{
            
            
                 
      setHome(res.data)
            
           
        })
        .catch(err=>{
            console.log(err)
        });
      
        setData();
    },[])
    console.log({home});
    const  setData = async  ()=>{
       await  setContent(home.content)
    }
    console.log(home.content)
    return (
        <div>
           <h2 style={{paddingBottom:"10px"}} key={home.id}>{home.name}</h2>
           { home && home.content ?
           (
               home.content.map(cont=>(
                   <div key={cont.id}>
                       <h3>{cont.title}</h3>
                       <div style={{fontSize:"14px"}}  dangerouslySetInnerHTML={{__html:cont.content}}></div>
                       </div>
               ))
           ):null

           }
         
        </div>
    )
}



export default Home