import React from 'react'
import './Main.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function Main() {




    return (
        <div className="MainPage">
          <div className="top">
          <Navbar/>
          </div>
         <div className="center">
           <div className="scroll">
           <Sidebar/>
           </div>
       
         <div className="VideoView">
            <Router>
              <Switch>
                <Route path="/home" exact component={Footer}></Route>
              </Switch>
            </Router>
                               
         </div>
       
         
         
         </div>
         
         
        </div>
        
    )
}

export default Main
