import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }
    

    return (
        <nav className='bg-slate-100'>
            <div className='h-20 flex justify-between items-center container mx-auto'>
            <div className="logo">
                <h2 className='text-2xl font-bold'>Gadget Freks</h2>
            </div>
            <div className="nav-link">
                <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to='/products'>Products</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to='/addproduct'>Add Product</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to='/orderlist'>Order List</NavLink>
                {user ? <button onClick={logout} className='nav-btn'>Log Out</button> : <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to='/login'>Log In</NavLink>}
            </div>
            <div className="user-info">
                    <p className='text-xl font-semibold text-teal-500 font-mono'>{ user ? user.displayName : 'Guest'}</p>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;