import React from 'react'
import HorizontalDiv from './horizontal_cards'

const bodyLeftStyles = {
    minHeight: '25',
    margin: 10,
    marginRight: 13,
    marginLeft: 11,
    backgroundColor: 'lightBlue',
    float: 'left',
    width: '48%',
    overflow: 'auto'
}

const BodyLeft = (props) => {
    return (
        <div className='container-fluid border border-success rounded' style={bodyLeftStyles}>
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

export default BodyLeft;
