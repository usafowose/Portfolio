import React from 'react';
import BodyLeft from './Body_Left'
import BodyRight from './Body_Right'


const Body = (props) => {
    return (
        <div className='container-fluid border border-danger col-10 rounded' style={{ minHeight: '60rem', marginTop: 20, backgroundColor: '', overflow: 'auto', padding: 'none' }}>
            <BodyLeft />
            <BodyRight />
        </div>
    )
}

export default Body;