import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    if (window.location.pathname === '/') {
        return <div></div>;
    }
    else {
        return (
            <div className='ui secondary pointing menu'>
                <Link to='/posts' className='item'>Posts</Link>
                <Link to='/albums' className='item'>Albums</Link>
                <div className='right menu'>
                    <Link to='/logout' className='item'>Logout</Link>
                </div>
            </div>
        );
    }
}

export default Header;