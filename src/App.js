import Navbar from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const title = "Welcome to the blog";
  const likes = 50;

  //const person = {name: 'Dan', age: 24};
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
      
      </div>
      </div>
  );
}
//'/>
export default App;
