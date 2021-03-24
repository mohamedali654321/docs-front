import logo from './logo.svg';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Main from './page/MainPage/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={()=><Main/>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
