import React from 'react';

const divStyle = [{
    // backgroundColor: 'teal', 
    marginTop: 10,
    marginBottom: 10,
    minHeight: 150,
    overflow: 'auto',
    marginLeft: 1,
    paddingLeft: 0,
    paddingRight: 0,
    opacity: 1.0
},
{
    color: 'grey'
}]

const YoutubeEmbed = (props) => {
    return (

        <div className='container-fluid col-12 row rounded justify-content-center' style={divStyle[0]} >

            <iframe title='JS Method Map Video' width="655" height="355" src="https://www.youtube.com/embed/CG1LP9Bb5dc?autoplay=1&mute=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
    )
}

export default YoutubeEmbed;