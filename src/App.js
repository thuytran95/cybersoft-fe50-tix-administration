// import logo from './logo.svg';
// import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "./layouts/Admin";

import Login from "./layouts/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path="/login" component={Login}>
          <Login />
        </Route>
        <Route exact path="/administration" component={Admin}>
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
