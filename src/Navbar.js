import Logo from './Logo.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
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
