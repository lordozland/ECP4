import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    render() {
        return (
            <nav className="mb-5">
            <Link to='/' className='pl-8 text-4xl'>Equinox Crest Productions</Link>
            <div className='flex flex-row items-center justify-center mt-5'>
                <Link to='/eCommerce' className='bg-black text-white mx-10 px-5 rounded-2xl'>eCommerce</Link>
                <Link to='/webapi' className='bg-black text-white mx-10 px-5 rounded-2xl'>Web API</Link>
                <Link to='/astrolove' className='bg-black text-white mx-10 px-5 rounded-2xl'>AstroLove</Link>
                <Link to='/sounds' className='bg-black text-white mx-10 px-5 rounded-2xl'>Sounds</Link>
                <Link to='/connect' className='bg-black text-white mx-10 px-5 rounded-2xl'>Connect</Link>
            </div>
            </nav>
        )
    }
}

export default Navbar;