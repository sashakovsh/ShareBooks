import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Link to='/'>Main</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/recs'>Recs</Link>
            <Link to='/likeit'>Favourite</Link>
        </div>
    )
}

export default Navigation;