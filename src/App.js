//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Reservation from '../src/reservation/reservation'
import Mainpage from '../src/main/Mainpage'
//import './App.css'

//import Header from './header/Header'
//import Main from './main/main'
//import Footer from './footer/footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Mainpage />
          </Route>
          <Route path='/reservation'>
            <Reservation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
