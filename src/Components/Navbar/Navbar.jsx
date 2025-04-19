import '../Navbar/Navbar.css';
import yashlogo from '../../assets/yashlogo.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={yashlogo} alt="" />
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className='nav-connect'>Connect With Me</div>
        </div>
    )
}

export default Navbar;