import React from 'react';
import styles from './stackItemRow.module.css'


class AddTab extends React.Component {
  
  render() {
    return this.props.items.map(techItem => {
      return (
          <div className={`container-fluid justify-content-center row col-12 alert alert-success techStackRow ${styles.techStackRow}`} id='tech_stack_whole_row' key={techItem.key}>
              <div className={`col-sm logoDiv ${styles.logoDiv}`} onClick={() => alert('You Clicked In This Div')} id='lang_logo'>
                  <img className={`logoImg ${styles.logoImg}`} src={techItem.logoSrc} alt={`${techItem.name} Logo`}></img>
              </div>

              <div className={`col-sm projDefntn ${styles.projDefntn}`}id='proj_defntn'>
                  <h6>{techItem.tabTitle}</h6>
                  <p>{techItem.tabContent}</p>
              </div>

          </div>
      )
    });
  }
}

export default AddTab;