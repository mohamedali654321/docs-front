import logo from './logo.svg';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'

import './App.css';
import Category from './components/Category/Category'
import Section from './components/Section/Section'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
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
          <Route path="/:slug" exact  component={Category}></Route>
          <Route path="/:slug/:section"  exact component={Section}></Route>
        </Switch>
        </Router>
                         
   </div>
 
   
   
   </div>
   
   
  </div>
  
  );
}

export default App;
