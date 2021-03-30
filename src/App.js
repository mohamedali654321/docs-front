import {useState} from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css';
import Category from './components/Category/Category'
import Section from './components/Section/Section'
import Navbar  from './components/Navbar/Navbar'
import Sidebar  from './components/Sidebar/Sidebar'
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import Footer from './components/Footer/Footer'
import {ToggleSidebarContext} from './components/Helper/Context'




function App({}) {


const [showSidebar,setShowSidebar]=useState(ToggleSidebarContext)

  return (
    <ToggleSidebarContext.Provider value={{showSidebar,setShowSidebar}}>
    <Router>
    <div className="MainPage">
    
    <div className="top">
    
    <Navbar/>
    
    </div>
    
   <div className="center">
   
      {
        showSidebar &&
        <div className="scroll bar ">
       
          <Sidebar/>
          
       
        </div> 
      }
          
     
     
     

 
 
 
   <div className="VideoView scrollx">
     
          <div className="content">
      
          <Switch>
           <Route path='/' exact component={Home}></Route>
           <Route path="/:slug" exact  component={Category}></Route>
           <Route path="/:slug/:section"  exact component={Section}></Route>
           <Route path="/:slug/:section/:topic"  exact component={Topic}></Route>
           
          
          </Switch>
         
          </div>
        
          
          <div className="sticky-footer footer bad">
           <Footer/>
           </div>
                         
   </div>
  
   
   
   </div>
   
    
   
  </div>
 
   
  </Router>
  </ToggleSidebarContext.Provider>
  
  );
}

export default App;
