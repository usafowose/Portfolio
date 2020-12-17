import React from 'react'
import ResumeTab from './Resume_Tab'
import YoutubeEmbed from './../../Embed-iFrame'
import HorizontalDiv from './../Body_Left/horizontalDiv'
import PersonalLife from './Personal_Life'
import styles from './bodyRight.module.css'

class BodyRight extends React.Component{
    // constructor(props) {
    //   super(props)
    // }
    render() {
        return (
            <div className={`container-fluid rounded justify-content-center bodyRightContainer ${styles.bodyRightContainer}`}>
                <ResumeTab />
                <YoutubeEmbed />
                {/* <HorizontalDiv/> */}
                <PersonalLife />
            </div>
        )
    }
}

export default BodyRight;