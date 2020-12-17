import React from 'react'
import styles from './moreInfo.module.css'

const PersonalLife = (props) => {
  return (
    <div className={`container-fluid col-11 row rounded border justify-content-center bioDiv ${styles.bioDiv}`}>
        <h4 className={`alert alert-primary`}>More About Me</h4>
        <div className={`bioHeader ${styles.bioHeader}`}>
            <h6 className={`innerBioText ${styles.innerBioText}`}>Non Nobis Solum Nati Sumus: Not For Ourselves Only Are We Born</h6>
        </div>
    </div>
  )
}

// ANY CARDS TO POPULATE PERSONAL LIFE?

export default PersonalLife