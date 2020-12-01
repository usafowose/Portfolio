import React from 'react'
import HorizontalDiv from './../Body_Left/horizontal_cards'

const bodyRightStyle = {
    minHeight: '25',
    float: 'left',
    backgroundColor: 'grey',
    margin: 10,
    marginLeft: 13,
    width: '48%',
    overflow: 'auto'
}

const BodyRight = (props) => {
    return (
        <div className='container-fluid border border-success rounded' style={bodyRightStyle}>
            <HorizontalDiv />
            <p>Hello</p>
            <p>Hello</p>
            <HorizontalDiv />
            <p>Hello</p>
            <p>Hello</p>
            <HorizontalDiv />
            <p>Hello</p>
            <p>Hello</p>
            <HorizontalDiv />
            <p>Hello</p>
            <p>Hello</p>
            <HorizontalDiv />
            <p>Hello</p>
        </div>
    )
}

export default BodyRight;
