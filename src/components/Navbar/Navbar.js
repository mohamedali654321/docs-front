import React ,{useContext,useState}from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from "@material-ui/icons/Menu";


function Navbar() {
const [showSidebar,setShowSidebar]=useState(true)
  
    const show =()=>{
      setShowSidebar(!showSidebar)
    }
    console.log({showSidebar})
    return (
        <nav className="navbarContainer">
          <div className="left">
            <button id="sidebarToggle" onClick={show}><MenuIcon id="icon"/> </button>
            
            
            <Link to="https://docs.folio.org/" ><img id="img" src={"./images/images.png"} style={{width:"120px"}} /></Link>
            </div>
          <div className="center">
              
            
          

          </div>
          <div className="right">

          <div className="search-box">
               <input className="search-txt"  type="text" name=""  placeholder="Search"/>
                  <a className="search-btn" href="" >
                    <i className="fas fa-search" style={{color:"orangered"}}></i>
                   </a>

               </div>
         
            <ul >
              <div style={{margin:"9px"}}>
              <li><a href="https://dev.folio.org" className="cool" >Developers</a></li>
              </div>
              <div style={{margin:"9px"}} >
              <li><a href="https://wiki.folio.org" className="cool" >Project Wiki</a></li>
              </div>
              <div style={{margin:"9px"}}>
              <li><a href="https://discuss.folio.org" className="cool">Discussion Boards</a></li>
              </div>
              
             
              
              
              
              
            </ul>
         
      
     
          
          </div>
        </nav>
    )
}

export default Navbar

