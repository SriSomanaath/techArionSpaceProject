import React from 'react';
import Europe from './DestinationPages/Europe';
import Moon from './DestinationPages/Moon';
import Mars from './DestinationPages/Mars';
import Titan from './DestinationPages/Titan';

const Destination = () =>{

    return(
        <>
            <Moon />
            <Mars />
            <Europe />
            <Titan />
        </>
    )
}

export default Destination;