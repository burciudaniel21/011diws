import Logo from './Logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src= {Logo} className = "logo" alt='Logo'/>
            <h1>The GetBaking Blog</h1>
            <div className = "links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                </div>
                </nav>
    );
}
 
export default Navbar;
