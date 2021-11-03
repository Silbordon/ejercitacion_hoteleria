import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
           <Home />
        </Route>
      
       
      </Switch>
    
      <Footer>

      </Footer>
    </Router>
  );
}

export default App;
