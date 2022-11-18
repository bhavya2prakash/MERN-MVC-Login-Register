
import './App.css';
import Home from './components/home_page/home';
import Login from './components/login/login';
import About from './components/about_us/about';
import Jobs from './components/jobs/jobs';
import Contact from './components/contact/contact';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from 'react';
function App() {
  const [ user, setLoginUser] = useState({})
  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }
  return (
    <div className="App">
      <BrowserRouter>
       <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Home updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route exact path="/login">
          {
              user && user._id ? <Home updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route exact path="/about" >
          {
              user && user._id ? <About/> : <Login updateUser={updateUser}/>
            }
           
          </Route>
          <Route exact path="/jobs" >
          {
              user && user._id ? <Jobs/> : <Login updateUser={updateUser}/>
            }
          
          </Route>
          <Route exact path="/contact">
          {
              user && user._id ?  <Contact/> : <Login updateUser={updateUser}/>
            }
         
          </Route>
        </Switch>
        
      </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
