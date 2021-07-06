import { Switch, Route, Redirect } from 'react-router-dom';

import Registration from './Pages/auth/Registration';
import Login from './Pages/auth/Login';
import Home from './Pages/Home';


function App() {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);

  // const dispatch = useDispatch();

  return (
    
    <div className="App">

      <Switch>
        <Route exact path="/auth/register" component={Registration} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
}

export default App;
