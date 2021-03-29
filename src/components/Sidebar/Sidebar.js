import React ,{useEffect ,useState,useContext} from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {ToggleSidebarContext} from '../Helper/Context'
function Sidebar() {
    const endPoint= 'http://54.220.211.123:1227/categories';
    const endPointSections= 'http://54.220.211.123:1227/sections';
    const [data ,setData]=useState([]);
    const [topic,setTopic]=useState([]);
    const [show ,setShow]=useState(false)
    const {showSidebar,setShowSidebar}=useContext(ToggleSidebarContext)
    const showing=()=>{
        setShow(!show)
    }
  
  useEffect(()=>{
       axios.get(endPoint).then(res=>{
        // console.log(res);
        setData(res.data);

      }).catch(err=>{
          console.log(err)
      })
  },[data]);
  useEffect(()=>{
    axios.get(endPointSections).then(res=>{
        // console.log(res);
        setTopic(res.data);

      }).catch(err=>{
          console.log(err)
      })

  },[topic])

    return (
          
        <div style={{width:430}} className="SidebarContainer">
            
            

            { 
                
                data.map(item=>(
                    <div className="head">
                        <ul  style={{listStyleType:"none"}}>
                           <Link style={{fontSize:"18px"},{fontWeight:"bold"}}  to={`/${item.slug}`}  ><li >{item.name}</li></Link> 
                            
                              {
                                  item.sections.map(section=>(
                                    <ul style={{listStyleType:"none"}}>
                                    <Link style={{fontSize:"17px"}} to={`/${item.slug}/${section.slug}`} onClick={showing}><li>{section.name}</li> </Link> 
                                    {
                                        topic.map(topic=>(
                                            <ul style={{listStyleType:"none"}}>
                                                {
                                                    topic.slug === section.slug   ? (
                                                       <>
                                                       {
                                                           topic.topics.map(top=>(
                                                              
                                                            <Link style={{fontSize:"14px"}} to={`/${item.slug}/${section.slug}/${top.slug}`}><li>{top.name}</li> </Link> 
                                                           ))
                                                       }
                                                       </>
                                                    ):null
                                                }
                                            </ul>
                                        ))
                                    }
                                    </ul>
                                     
                                  ))
                                  
                              }
                              
                              <hr style={{backgroundColor:"orangered"},{border:"1px"}}></hr>
                           
                        </ul>
                        
                    </div>
                )

                )
                
            }
             
        </div>
          
        
    )
}

export default Sidebar
