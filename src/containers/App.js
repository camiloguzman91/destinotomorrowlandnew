import React, { Component } from'react';
import { 
  BrowserRouter as Router,
  Route,
} from'react-router-dom';
import Home from './Home';
import Guia from './Guia';
import Galeria from './Galeria';
import Video from './Video'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/guia" component={Guia} />        
        <Route exact path="/galeria" component={Galeria} />        
        <Route exact path="/videos" component={Video} />        
      </Router>
    )
  }
}

export default App;
