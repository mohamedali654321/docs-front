import React from 'react'
import './Navbar.css'
import { Nav, NavItem, NavLink } from 'reactstrap';
import SearchIcon  from '@material-ui/icons/Search'
function Navbar() {
    return (
        <div className="navbarContainer">
          <div className="left"><a href="https://docs.folio.org/" ><img src={"./images/images.png"} style={{width:"120px"}} /></a></div>
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
        </div>
    )
}

export default Navbar
