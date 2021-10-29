import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './components/Add User/AddUser';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Manage from './components/Manage/Manage';
import NotFound from './components/Not Found/NotFound';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/adduser">
            <AddUser></AddUser>
          </Route>

          <Route path="/manage">
            <Manage></Manage>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
