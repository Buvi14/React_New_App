// import logo from './logo.svg';
// import './App.css';

import Main from './Components/Main/Main';
import Menu from './Components/Menu/Menu';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Counter from './Components/Counter/Counter';
import User from './Components/User/User';
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Post from './Components/Context/Post';
import Home from './Components/Home/Home'

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Menu />
      <Main />
      <Footer /> */}
      {/* <Counter /> */}
      {/* <User /> */}
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/user" component={User} />
        <Route path="/post" component={Post} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
