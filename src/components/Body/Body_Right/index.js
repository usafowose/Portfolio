import React from 'react'
import ResumeTab from './Resume_Tab'
import YoutubeEmbed from './../../Embed-iFrame'
import HorizontalDiv from './../Body_Left/horizontalDiv'

const bodyRightStyle = [
    {
        minHeight: '25',
        float: 'left',
        // backgroundColor: 'grey',
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
        <div className='container-fluid rounded' style={bodyRightStyle[0]}>
            <ResumeTab/>
            <YoutubeEmbed />
            <HorizontalDiv/>
        </div>
    )
}

export default BodyRight;
