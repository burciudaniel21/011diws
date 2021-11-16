import Navbar from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const title = "Welcome to the blog";
  const likes = 50;

  //const person = {name: 'Dan', age: 24};
  return (
    <Router>
          <div className="App">
          <Navbar />
          <div className="content">
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/create">
            <Create />
            </Route>       
            <Route path="/blogs/:id">
            <BlogDetails />
            </Route>
          </Switch>
          </div>
      <HomePage/>
      </div>
      </Router>
  );
}
//'/>
export default App;
