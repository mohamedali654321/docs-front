import React ,{useEffect ,useState} from 'react'
import './Sidebar.css'
import {Link, NavLink} from 'react-router-dom'
import axios from 'axios'
function Sidebar() {
    const endPoint= 'http://54.220.211.123:1227/categories';
    const [data ,setData]=useState([]);
  
  useEffect(()=>{
      axios.get(endPoint).then(res=>{
        console.log(res);
        setData(res.data);

      }).catch(err=>{
          console.log(err)
      })
  },[])
 console.log(data)
    return (

        <div style={{width:450}} className="SidebarContainer">
            {
                data.map(item=>(
                    <div className="head">
                        <ul  style={{listStyleType:"none"}}>
                            <li ><a href={`/${item.slug}`} style={{fontSize:"19px"},{fontWeight:"bold"}}>{item.name}</a></li>
                            <ul style={{listStyleType:"none"}}>
                              {
                                  item.sections.map(section=>(
                                      <li key={section.id}><a href={`/${item.slug}/${section.slug}`} style={{fontSize:"15px"}}>{section.name}</a></li>

                                  ))
                                  
                              }
                              <hr style={{backgroundColor:"orangered"},{border:"1px"}}></hr>
                            </ul>
                        </ul>
                        
                    </div>
                )

                )
                
            }
        </div>
    )
}

export default Sidebar
