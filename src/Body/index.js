import React from 'react';
import BodyLeft from './Body_Left'
import BodyRight from './Body_Right'

const bodyContainerStyle = {
    minHeight: '60rem',
    marginTop: 20,
    overflow: 'auto',
    padding: 'none', 
    opacity: 0.95,
    backgroundColor: 'white'
}

const Body = (props) => {
    return (
        <div className='container-fluid border border-success col-10' style={bodyContainerStyle}>
            <BodyLeft />
            <BodyRight />
        </div>
    )
}

export default Body;