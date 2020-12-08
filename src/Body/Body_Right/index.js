import React from 'react'
import HorizontalDiv from '../Body_Left/horizontalDiv'
// import styles from './../index.css'

const bodyRightStyle = [
    {
        minHeight: '25',
        float: 'left',
        // backgroundColor: 'grey',
        margin: 10,
        marginLeft: 13,
        width: '48%',
        overflow: 'auto'
    },
    {
        color: 'white'
    }]

const BodyRight = (props) => {
    return (
        <div className='container-fluid border border-success rounded' style={bodyRightStyle[0]}>
            <HorizontalDiv />
            <p style={bodyRightStyle[1]}>Hello</p>
            <p style={bodyRightStyle[1]}>Hello</p>
            <HorizontalDiv />
            <p style={bodyRightStyle[1]}>Hello</p>
            <p style={bodyRightStyle[1]}>Hello</p>
            <HorizontalDiv />
            <p style={bodyRightStyle[1]}>Hello</p>
            <p style={bodyRightStyle[1]}>Hello</p>
            <HorizontalDiv />
            <p style={bodyRightStyle[1]}>Hello</p>
            <p style={bodyRightStyle[1]}>Hello</p>
            <HorizontalDiv />
            <p style={bodyRightStyle[1]}>Hello</p>
        </div>
    )
}

export default BodyRight;
