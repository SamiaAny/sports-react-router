import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import AllTeams from './components/AllTeams/AllTeams';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Details from './components/Details/Details';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/allteams">
            <AllTeams></AllTeams>
          </Route>
          <Route path="/details/:teamId">
            <Details></Details>
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Banner></Banner>
      <AllTeams></AllTeams> */}
    </div>
  );
}

export default App;
