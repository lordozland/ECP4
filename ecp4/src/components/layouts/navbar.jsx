import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    render() {
        return (
            <nav className="mb-20 flex flex-row">
            <Link to='/' className='pl-8'>MainPage</Link>
            <div>
                <Link to='/' className='bg-black text-white mx-20'>eCommerce</Link>
                <Link to='/' className='bg-black text-white mx-20'>Web API</Link>
                <Link to='/' className='bg-black text-white mx-20'>AstroLove</Link>
                <Link to='/' className='bg-black text-white mx-20'>Sounds</Link>
                <Link to='/' className='bg-black text-white mx-20'>Connect</Link>
            </div>
            </nav>
        )
    }
}

export default Navbar;