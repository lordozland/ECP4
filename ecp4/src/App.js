// import logo from './logo.svg';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainpage';
import Tracks from './components/layouts/tracks';
import Navbar from './components/layouts/navbar';

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Tracks />  
    <Switch>
      <Route path="/" exact component={MainPage} />
      {/* <Route path="/astrolove" component={AstroLove} />
      <Route path="/ecommerce" component={eCommerce} />
      <Route path="/webapi" component={WebAPI} />
      <Route path="/sound" component={Sound} />
      <Route path="/Company" component={Company} />
      <Route path="/Gaming" component={Gaming} /> */}
    </Switch>
    {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
