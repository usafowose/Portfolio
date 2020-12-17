import React from 'react'
import styles from './moreInfo.module.css'


// ANY CARDS TO POPULATE PERSONAL LIFE?


class PersonalLife extends React.Component{
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div className={`container-fluid col-11 row rounded border justify-content-center bioDiv ${styles.bioDiv}`}>
          <h4 className={`alert alert-primary`}>More About Me</h4>
          <div className={`bioHeader ${styles.bioHeader}`}>
              <h6 className={`innerBioText ${styles.innerBioText}`}>Non Nobis Solum Nati Sumus: Not For Ourselves Only Are We Born</h6>
          </div>
      </div>
    )
  }
}

export default PersonalLife
