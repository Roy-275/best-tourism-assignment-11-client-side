import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddService from './components/Add Service/AddService';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageAll from './components/Manage All/ManageAll';
import Manage from './components/Manage/Manage';
import NotFound from './components/Not Found/NotFound';
import PrivateRoute from './components/Private Route/PrivateRoute';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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

            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>

            <PrivateRoute path="/manage">
              <Manage></Manage>
            </PrivateRoute>

            <PrivateRoute path="/manageall">
              <ManageAll></ManageAll>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
