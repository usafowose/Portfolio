import React from 'react'


const divStyle = [{
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 1,
  minHeight: 150,
  overflow: 'auto',
  float: 'left'
}]

const HorizontalDiv = (props) => {
  return (
    <div className='container-fluid col-12 row rounded border justify-content-center' style={divStyle[0]}>
      <p>HelloOO</p>
    </div>
  )
}

export default HorizontalDiv