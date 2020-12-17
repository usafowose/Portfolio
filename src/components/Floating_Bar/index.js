import React from 'react';
import styles from './floatingBar.module.css'

class FloatingBar extends React.Component{
  // constructor(props) {
  //   super(props)
  // }
  
  render() {
    return (
      <div className={`container-fluid col-11 containerClass ${styles.containerClass}`}>
        <nav className="navbar navbar-expand-lg justify-content-start navbar-dark rounded">
          <ul className="navbar-nav">
  
            <div className={`card profileImageDiv ${styles.profileImageDiv}`}>
              <li className={`nav-item ${styles.navItem}`} >
                <img className={`card-img-top cardImg ${styles.cardImg}`} src='https://unsplash.it/600/400' alt="Me, Andrew"/>
              </li>
            </div>
  
            <div className={`row ${styles.row}`}>
              <li className={`col-10 listItem ${styles.listItem}`}>
                <p className={`anyText ${styles.anyText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tellus pulvinar, fermentum lorem sed, venenatis velit. Morbi varius pulvinar vulputate. Sed vulputate ullamcorper dolor eu auctor. Integer consequat nulla at augue molestie dictum. Vestibulum sit amet ante id nunc commodo egestas vel at magna. Aliquam et consequat felis, a convallis nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed venenatis augue at nisl tincidunt, et facilisis erat aliquam. Vivamus eros enim, pharetra eu dui blandit, sagittis volutpat justo. Sed vehicula nunc at ipsum pretium consectetur. Quisque molestie orci vel est aliquet posuere. Nullam. </p>
              </li>
            </div>
  
          </ul>
        </nav>
      </div>
    )
  }
}
export default FloatingBar; 