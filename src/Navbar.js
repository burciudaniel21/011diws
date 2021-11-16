import Logo from './Logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar nav" >
            <img src= {Logo} className = "logo" alt='Logo'/>
            <h1>The GetBaking Blog</h1>
            <div className = "links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                </div>
                </nav>
    );
}
 
export default Navbar;
