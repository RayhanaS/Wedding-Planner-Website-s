
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/Authentification/SignIn';
import Register from './Components/Authentification/Register';
import Reservations from './Components/admin/Reservations'
import { Route, Switch } from 'react-router-dom';
import Profile from './Components/Profile'

function App() {
  return (

    <div className="App">
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/Login" component={Login}/>
            <Route  path="/Register" component={Register}/>
            <Route  path="/Reservations" component={Reservations}/>
            <Route  path="/Profile" component={Profile}/>
          </Switch> 
        <Footer/>
      </div>
  )
  };



export default App;
