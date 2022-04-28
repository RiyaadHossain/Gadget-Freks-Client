import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
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
            </div>
            <div className="user-info">
                <p className='text-xl font-semibold text-teal-500 font-mono'>User</p>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;