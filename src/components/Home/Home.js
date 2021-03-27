import React ,{useEffect,useState} from 'react'
import axios from 'axios'
 function Home() {

    const endPoint='http://localhost:1337/categories/home';
    const [home,setHome]=useState([]);
    const [content,setContent]=useState([]);
    useEffect(()=>{
         axios.get(endPoint)
        .then(  res=>{
            if(!res)
            {
                console.log('something wrong')
            }
            else{
                 
                  setHome(res.data)
            }
           
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
           <h1 style={{paddingBottom:"10px"}} key={home.id}>{home.name}</h1>
           { home && home.content ?
           (
               home.content.map(cont=>(
                   <div key={cont.id}>
                       <h2>{cont.title}</h2>
                       <p>{cont.content}</p>
                       </div>
               ))
           ):null

           }
         
        </div>
    )
}



export default Home