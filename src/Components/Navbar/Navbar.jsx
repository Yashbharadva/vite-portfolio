import svgviewer from '../../assets/svgviewer.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={svgviewer} alt="" />
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <div className='nav-connect'>Connect With Me</div>
        </div>
    )
}

export default Navbar;