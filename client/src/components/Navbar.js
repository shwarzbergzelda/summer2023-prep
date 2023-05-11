import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
    return(
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    );
}

export default Navbar;