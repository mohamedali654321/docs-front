
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'

import './App.css';
import Category from './components/Category/Category'
import Section from './components/Section/Section'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
       <Switch>
    <div className="MainPage">
     
    <div className="top">
    <Navbar/>
    </div>
   <div className="center">
     
     <div className="scroll">
       
       <Sidebar/>
       
    
     </div>
 
   <div className="VideoView scroll">
   
       <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path="/:slug" exact  component={Category}></Route>
          <Route path="/:slug/:section"  exact component={Section}></Route>
          </Switch>
       
                         
   </div>
  
   
   
   </div>
   
   
  </div>
  </Switch>
  </Router>
  );
}

export default App;
