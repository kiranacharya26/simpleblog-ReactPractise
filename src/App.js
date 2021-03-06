import Navbar from './Navbar'
import Home from './Home'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import Blogdetails from './Blogdetails';

const App = ()=>{
  return (
    <Router>
      <div className="App">
     <Navbar />
     <div className="content">
       <Switch>
        <Route exact path='/' component={Home} /> 
        <Route exact path='/create' component={Create} /> 
        <Route exact path='/blogs/:id' component={Blogdetails} /> 
       </Switch>
     </div>
     
    </div>
    </Router>
  );
}

export default App;
