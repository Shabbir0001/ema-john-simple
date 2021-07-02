import './App.css';
import Header from './components/Header/Header';
import Shop from './components/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Productdetail from './components/ProductDetail/ProductDetail';



function App() {
  return (
    <div className="App">
        <Header></Header>
      <Router>
          <Switch>
            <Route path="/shop">
                 <Shop></Shop>
            </Route>
            <Route path="/review">
                  <Review></Review>
            </Route>
            <Route path="/manage">
              <Inventory></Inventory>
            </Route>
            <Route exact path="/"> 
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <Productdetail></Productdetail>
            </Route>  
            <Router path="*">
              <NotFound></NotFound>
            </Router>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
