
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg'
import { useLocation } from 'react-router-dom';
import { ThemeContext  } from '../context/ThemeContext';
import { useContext } from 'react';

function Header() {
    const location = useLocation();
    const hideHeader = location.pathname === '/login';
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <> 
            <header>
                <nav className="container mx-auto flex justify-between items-center" style={{ color: theme === 'light' ? 'black' : 'red' }}>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <Link to="/home" className='flex items-center gap-2'>
                            <img src={logo} alt="logo" className='w-10 h-10'/>
                            <h1 className='text-2xl font-bold'>React</h1>
                            </Link>
                        </div>
                    </div>
                    <ul className="nav-links inline-flex gap-10 justify-center w-full">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blogs">Blog</Link></li> 
                        {/* <li><Link to="/training">Training</Link></li> */}
                        <li>{!hideHeader ? <Link to="/teams">Teams</Link> : <Link to="/login">Login</Link>}</li>
                        <li><button onClick={toggleTheme}>Change to {theme === 'light' ? 'Dark' : 'Light'}</button></li>
                    </ul>
                </nav>
            </header>
        </>
    )
};
export default Header;






