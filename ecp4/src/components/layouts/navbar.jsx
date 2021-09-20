import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
    navbar: {
        height: "100px"
    }
}


export class Navbar extends Component {
    render() {
        return (
            <nav className="mb-5 bg-black" style={styles.navbar}>
            <Link to='/' className='pl-8 text-4xl text-white'>Equinox Crest Productions</Link>
            <div className='flex flex-row items-center justify-center mt-5'>
                <Link to='/eCommerce' className='text-black bg-white mx-10 px-5 rounded-2xl'>eCommerce</Link>
                <Link to='/webapi' className='text-black bg-white mx-10 px-5 rounded-2xl'>Web API</Link>
                <Link to='/astrolove' className='text-black bg-white mx-10 px-5 rounded-2xl'>AstroLove</Link>
                <Link to='/sounds' className='text-black bg-white mx-10 px-5 rounded-2xl'>Sounds</Link>
                <Link to='/connect' className='text-black bg-white mx-10 px-5 rounded-2xl'>Connect</Link>
            </div>
            </nav>
        )
    }
}

export default Navbar;