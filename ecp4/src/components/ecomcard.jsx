// ecomcard

import React from 'react';

const styles = {
    img: {
        maxHeight: '250px',
        maxWidth: '700px'
    }
}

const Ecomcard = () => {
    return (
        <div className='flex flex-row items-center content-center justify-center'>
            {/* One */}
            <div className='container shadow min-w-3/5 max-w-3/5 min-h-2/5 max-h-2/5 m-10' id='ecomcard1'>
                <div></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Utah_teapot_simple_2.png" alt="teapot" style={styles.img}/>
                <h1>Short and Stout</h1>
            </div>
            {/* Two */}
            <div className='container shadow min-w-3/5 max-w-3/5 min-h-2/5 max-h-2/5 m-10' id='ecomcard2'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Utah_teapot_simple_2.png" alt="teapot" style={styles.img}/>
                <h1>Short and Stout</h1>
            </div>
            {/* Three */}
            <div className='container shadow min-w-3/5 max-w-3/5 min-h-2/5 max-h-2/5 m-10' id='ecomcard3'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Utah_teapot_simple_2.png" alt="teapot" style={styles.img}/>
                <h1>Short and Stout</h1>
            </div>
        </div>
    )
}

export default Ecomcard