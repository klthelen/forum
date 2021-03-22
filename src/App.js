import './App.css';
import Home from './pages/Home';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Rules from './pages/Rules';
import FAQ from './pages/FAQ';
import DoesNotExist from './pages/DoesNotExist';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/About">
              <About />
            </Route >
            <Route exact path="/FAQ">
              <FAQ />
            </Route >
            <Route exact path="/Rules">
              <Rules />
            </Route >
            <Route path="*">
              <DoesNotExist />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
