import React from 'react'
import HorizontalDiv from '../Body_Left/horizontalDiv'
import YoutubeEmbed from './../../Embed-iFrame'

const bodyRightStyle = [
    {
        minHeight: '25',
        float: 'left',
        backgroundColor: 'grey',
        marginLeft: 13,
        width: '49%',
        overflow: 'hidden', 
        padding: 0
    },
    {
        color: 'white'
    }]

const BodyRight = (props) => {
    return (
        <div className='container-fluid border border-success rounded' style={bodyRightStyle[0]}>
            <YoutubeEmbed />
            <HorizontalDiv />
            <p style={bodyRightStyle[1]}>Hello</p>
        </div>
    )
}

export default BodyRight;
