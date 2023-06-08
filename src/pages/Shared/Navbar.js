import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import logo from '../../images/logo-navbar.png'
import About from '../About/About';
import AppSass from '../Home/AppSass';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/about">About</Link></li>

        <li><Link to="/location">Location</Link></li> */}
        <li tabindex="0">
            <Link to="">
                Explore More
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul class="p-2">
                <li className='bg-slate-200'><a >About us</a>
                    <ul >
                        <details className="dropdown dropdown-left ">
                            <summary className="m-1 ">Find more</summary>
                            <ul className=" shadow menu dropdown-content bg-base-100 rounded-box ">
                                <li><Link to="/location">Location</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </details>
                    </ul></li>
                <li className='bg-slate-200'><Link to="/contact">Contact us</Link></li>
            </ul>
        </li>
        <li><Link to="/classify">Classify</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        {/* <li><Link to="/contact">Contact us</Link></li> */}
        {user?.uid ?
            <li><button onClick={handleLogOut}>Sign out</button></li>
            : <li><Link to="/login">Log in</Link></li>}

    </React.Fragment>
    return (

        <div class="navbar bg-slate-100">
            <div class="navbar-start">
                <img className='w-14' src={logo}></img>
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Azad fruit shop</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;