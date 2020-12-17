import React from 'react'
import styles from './header.module.css'

class Header extends React.Component{
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <header>
        <nav className={`navbar justify-content-start bg-dark rounded headerNav ${styles.headerNav}`}>
  
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
  
              <ul className="nav nav-justified">
                {this.props.tabNames.map((tabName => <li className={`nav-item orderedList ${styles.orderedList}`} key={tabName}>
                  <a className={`nav-link aTag ${styles.aTag}`}  href="#">{tabName}</a>
                </li>))}
              </ul>
  
            </div>
          </div>
  
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" ></span>
            </button>
          </nav>
  
        </nav>
      </header>
  
    )
  }
}

export default Header;