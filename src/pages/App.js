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
import ContactComponent from '../components/contact/contact';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavComponent/>
      <header className="App-header">
        
        <Switch>
            <Route  path="/" exact="true" > <HomeComponent/> </Route>
            <Route  path="/test1" exact="true"> <TestComponent/> </Route>
            <Route  path="/test2" exact="true"> <TestComponet2/> </Route>
            <Route  path="/contact" exact="true"> <ContactComponent/> </Route>
        </Switch>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
