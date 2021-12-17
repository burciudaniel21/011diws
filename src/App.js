import Navbar from './components/Navbar';
import BlogsDisplay from './BlogsDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import NotFound from './NotFound';
import Home from './components/pages/Home';
import BlogDetails from './BlogDetails';
import Footer from './components/Footer';
import Popular from './components/pages/Popular';

function App() {

  return (
    <Router>
          <div className="App">
          <Navbar />
          <div className="content">
          <Switch>
            <Route exact path="/" exact component= {Home}>
            </Route>
            <Route exact path="/blogs">
            <BlogsDisplay/>
            </Route>
            <Route path="/create">
            <Create />
            </Route>       
            <Route path="/blogs/:id">
            <BlogDetails />           
            </Route>
            <Route path="/popular">
              <Popular />            
            </Route>
            <Route path="*">
              <NotFound />            
            </Route>
          </Switch>
          <Footer/>
          </div>
      </div>
      </Router>

  );
}
//'/>
export default App;
