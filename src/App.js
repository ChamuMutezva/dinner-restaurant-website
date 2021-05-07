import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Reservation from '../src/reservation/reservation'
import Mainpage from '../src/main/Mainpage'

import Footer from './footer/footer'

//Function to scroll to top of page when navigating 
//to a new page. at the end of a page focus of page will
//be at the bottom of the page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
 
  return (
    <div className="App">
      <Router>
       <ScrollToTop />
        <Switch>
          <Route exact path='/'>
            <Mainpage />
          </Route>
          <Route path='/reservation'>
            <Reservation />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
