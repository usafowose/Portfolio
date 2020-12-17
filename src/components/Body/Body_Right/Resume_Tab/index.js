import React from 'react'; 
import styles from './resume.module.css'

class ResumeTab extends React.Component{
  // constructor(props) {
  //   super(props)
  // }
  render() {
   return (
    <div className={`container-fluid col-12 row rounded justify-content-center resumeContainer ${styles.resumeContainer}`}>
      <div className={`rounded ovalParent ${styles.ovalParent}`} id="oval_parent">
        <a href='https://www.google.com'>
          <div className={`justify-content-center border border-info ovalChild ${styles.ovalChild}`}>
          <p className={`innerText ${styles.innerText}`}><strong>Check Out My Resume</strong></p>
        </div></a>
        
      </div>
    </div>
  ) 
  }
}
export default ResumeTab;