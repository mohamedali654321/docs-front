import {useState} from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css';
import Category from './components/Category/Category'
import Section from './components/Section/Section'
import Navbar  from './components/Navbar/Navbar'
import Sidebar  from './components/Sidebar/Sidebar'
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';




function App({showSidebar}) {
const [showSide , setShowSide]=useState(showSidebar);



  return (
    <Router>
    <div className="MainPage">
    
    <div className="top">
    
    <Navbar/>
    
    </div>
    
   <div className="center">
   
     { showSide ? (
          <div className="scroll">
       
          <Sidebar/>
          
       
        </div>
     ):null
     }
     

     
 
 
   <div className="VideoView scrollx">

   
      
          <Switch>
           <Route path='/' exact component={Home}></Route>
           <Route path="/:slug" exact  component={Category}></Route>
           <Route path="/:slug/:section"  exact component={Section}></Route>
           <Route path="/:slug/:section/:topic"  exact component={Topic}></Route>
           
          
          </Switch>
          
        

   
                         
   </div>
  
   
   
   </div>
   
    
   
  </div>
 
   
  </Router>
  
  
  );
}

export default App;
