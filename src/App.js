import Header from './Components/Header';
import Cart from './pages/Cart';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Photos from './pages/Photos';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
