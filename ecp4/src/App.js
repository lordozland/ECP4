// import logo from './logo.svg';
import './App.css';
import './index.css';

// Pages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainpage';
import eCommerce from './pages/eCommerce';
import webapi from './pages/webapi';
import astrolove from './pages/astrolove';
import sounds from './pages/sounds';
import connect from './pages/connect';

// Components/Layouts
import Tracks from './components/layouts/tracks';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Tracks />  
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/eCommerce" component={eCommerce} />
      <Route path="/webapi" component={webapi} />
      <Route path="/astrolove" component={astrolove} />
      <Route path="/sounds" component={sounds} />
      <Route path="/connect" component={connect} />
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
