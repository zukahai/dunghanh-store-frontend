import logo from './logo.svg';
import './App.css';
import NavComponent from '../components/nav/nav-component';
import{
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import TestComponent from '../components/test';
import TestComponet2 from '../components/test2';
import HomeComponent from '../components/home/home';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavComponent/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
            <Route exact  path="/" > <HomeComponent/> </Route>
            <Route exact  path="/test1" > <TestComponent/> </Route>
            <Route exact  path="/test2"> <TestComponet2/> </Route>
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
