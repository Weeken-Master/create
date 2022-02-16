
import './App.css';
import Nav from './Fly_Seo_Home/Nav_header/Nav';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import Login from './Login/Login';
import DeatiFunction from './Fly_Seo_Home/DetaiFunction/DeatiFunction';
import Body from './Fly_Seo_Home/Body/Body';
import Sign from './Sign/Sign';
function App() {
  return (
    <Router>
    <div className="App">

      <Switch>
      <Route path="/apiv4/login"  exact ={true}>
        <Login/>
      </Route>
      <Route path="/apiv4/sign"  exact ={true}>
        <Sign></Sign>
      </Route>



      <Route exact path="/detail/function" exact ={true}>
        <DeatiFunction></DeatiFunction>
      </Route>
      <Route exact path="/review/app" exact ={true}>
        <Nav></Nav> 
      </Route>
      <Route exact path="/tutorial/app" exact ={true}>
        <Nav></Nav> 
      </Route>
      <Route exact path="/pricelist" exact ={true}>
        <Nav></Nav> 
      </Route>
      <Route exact path="/about" exact ={true}>
        <Nav></Nav> 
      </Route>

      <Route exact path="/" exact ={true}>
        <Nav></Nav>
        <Body></Body>
      </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
