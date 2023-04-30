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
import ListProductComponent from '../components/list-products/products';
import DetailProductComponent from '../components/detail-product/detail-product-component';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavComponent/>
      <header className="App-header">
        
        <Switch>
            <Route path="/" exact="true" title="Home"> <HomeComponent/> </Route>
            <Route path="/products" exact="true" title="Products"> <ListProductComponent/> </Route>
            <Route path="/product/:id" exact="true"> <DetailProductComponent/> </Route>
            <Route path="/test1" exact="true"> <TestComponent/> </Route>
            <Route path="/test2" exact="true"> <TestComponet2/> </Route>
            <Route path="/contact" exact="true"> <ContactComponent/> </Route>
        </Switch>
        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
