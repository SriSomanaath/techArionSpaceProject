import React from 'react';
import {Link} from 'react-router-dom';


const Navbar=()=>{
    return (    
                <div className='navBar'>
                    {/* <div className='stocks'>
                        <Link to="/">Stocks</Link>
                    </div> */}
                    <div className='favourites'>
                        <Link to="/destination">destination</Link>
                    </div>
                    {/* <div className='cart'>
                        <Link to="/">Crew</Link>
                    </div>
                    <div className='cart'>
                        <Link to="/">Technology</Link>
                    </div> */}
                </div>
    )

}

export default Navbar;