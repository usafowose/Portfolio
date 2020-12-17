import React from 'react';
import BodyLeft from './Body_Left';
import BodyRight from './Body_Right';
import styles from './body.module.css'



class Body extends React.Component{
    // constructor(props) {
    //     super(props)
    // }
    render() {
      return (
        <div className={`container-fluid col-11 rounded bodyContainer ${styles.bodyContainer}`}>
          <BodyLeft />
          <BodyRight />
        </div>  
      )
    }
}

export default Body;