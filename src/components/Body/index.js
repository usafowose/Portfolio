import React from 'react';
import BodyLeft from './Body_Left'
import BodyRight from './Body_Right'

const bodyContainerStyle = {
    minHeight: '60rem',
    marginTop: 20,
    overflow: 'auto',
    padding: 'none', 
    opacity: 1.0,
    backgroundColor: 'none'
}

const Body = (props) => {
    return (
        <div className='container-fluid col-11 rounded' style={bodyContainerStyle}>
            <BodyLeft />
            <BodyRight />
        </div>
    )
}

export default Body;