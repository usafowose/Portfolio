import React from 'react';

const FloatingBar = (props) => {
    return (
        <div className='container-fluid col-11' style={{marginTop: 5}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-secodary rounded-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#" style={{color: 'grey', fontFamily: 'sans-serif' }}>Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" style={{fontFamily: 'sans-serif' }}>Link</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true" style={{color: 'grey', fontFamily: 'sans-serif' }}>Disabled</a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
            </nav>
        </div>
    )
}

export default FloatingBar