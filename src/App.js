import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import PreschoolProgram from './components/pages/PreschoolProgram';
import Teachers from './components/pages/Teachers';



class App extends React.Component {
 render() {

   return (
     <>

    <Router>
    <Navbar />
    <Switch>

      <Route path='/therapy-center' exact component={Home}/> 
      <Route path='/preschoolprogram' exact component={PreschoolProgram}/> 
      <Route path='/teachers' exact component={Teachers}/> 

    </Switch>
    <Footer />
    </Router>
    </>
  );
}
}

export default App;
