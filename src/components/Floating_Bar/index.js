import React from 'react';
// import Background from './../../assets/images/glow-wave-system.jpg'


const FloatingBarStyles = {
  containerClass: {
    marginTop: 10,
    opacity: 1.0,
    overflow: 'hidden'
  },
  anyText: {
    color: 'white',
    fontFamily: 'sans-serif'
  },
  cardMargin: {
    marginRight: 10
  },
  profileImageDiv: {
    width: "15rem",
    backgroundColor: "black",
    marginLeft: '4rem',
    marginRight: '13rem',
    position: 'absolute',
    overflow: 'hidden',
    top: '12%' //adjusting image to center of div (based on heigth of image, tho, so as div changes/expands, this must be adjusted to stay centered)
  }
}

const FloatingBar = (props) => {
  return (
    <div className='container-fluid col-11' style={FloatingBarStyles.containerClass}>
      <nav className="navbar navbar-expand-lg justify-content-start navbar-dark rounded">
        <ul className="navbar-nav">

          <div className="card " style={FloatingBarStyles.profileImageDiv}>
            <li className="nav-item" style={{ overflow: 'hidden' }}>
              <img className="card-img-top" src='https://unsplash.it/600/400' alt="Me, Andrew" style={{ minHeight: 160 }} />
            </li>
          </div>

          <div className='row' style={{ marginLeft: '30rem', textAlign: 'center' }}>
            <li className='col-10' style={{ marginTop: 15 }}>
              <p style={FloatingBarStyles.anyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus pulvinar, fermentum lorem sed, venenatis velit. Morbi varius pulvinar vulputate. Sed vulputate ullamcorper dolor eu auctor. Integer consequat nulla at augue molestie dictum. Vestibulum sit amet ante id nunc commodo egestas vel at magna. Aliquam et consequat felis, a convallis nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis augue at nisl tincidunt, et facilisis erat aliquam. Vivamus eros enim, pharetra eu dui blandit, sagittis volutpat justo. Sed vehicula nunc at ipsum pretium consectetur. Quisque molestie orci vel est aliquet posuere. Nullam. </p>
            </li>
          </div>

        </ul>
      </nav>
    </div>
  )
}

export default FloatingBar