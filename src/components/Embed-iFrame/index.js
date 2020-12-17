import React from 'react';
import styles from './iFrame.module.css'


const YoutubeEmbed = (props) => {
    return (

        <div className={`container-fluid col-12 row rounded justify-content-center iFrameContainer ${styles.iFrameContainer}`} >

            <iframe title='JS Method Map Video' width="655" height="355" src="https://www.youtube.com/embed/CG1LP9Bb5dc?autoplay=1&mute=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
    )
}

export default YoutubeEmbed;