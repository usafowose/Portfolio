import React from 'react'


const HeaderStyle = {
  headerNav: {
    // position: 'static',
    opacity: 0.4,
    // height: 100
  },
  unorderedList: {
    marginRight: '5rem',
    marginLeft: '5rem'
  },
  aTag: {
    fontFamily: 'sans-serif',
    color: 'white'
  }
}



const Header = (props) => {
  return (
    <header>
      <nav className="navbar justify-content-start bg-dark rounded" style={HeaderStyle.headerNav}>
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <ul className="nav nav-justified">
              {props.tabNames.map((tabName => <li className="nav-item" style={HeaderStyle.unorderedList}>
                <a className="nav-link" href="#" style={HeaderStyle.aTag}>{tabName}</a>
              </li>))}
            </ul>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" ></span>
          </button>
        </nav>
      </nav>
    </header>


  )
}

export default Header;