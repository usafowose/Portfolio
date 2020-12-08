import React from 'react'


const divStyle = [{
  // backgroundColor: 'teal', 
  marginTop: 10,
  marginBottom: 10,
  minHeight: 150,
  overflow: 'auto'
},
{
  color: 'grey'
}]

const HorizontalDiv = (props) => {
  return (
    <div className='container-fluid rounded' style={divStyle[0]} >
      <p style={divStyle[1]}>Hi</p>
      <p style={divStyle[1]}>Hi</p>
      <p style={divStyle[1]}>Hi</p>
      <p style={divStyle[1]}>Hi</p>
      <p style={divStyle[1]}>Hi</p>
      <p style={divStyle[1]}>Hi</p>
      <p style={divStyle[1]}>Hi</p>
      <p style={divStyle[1]}>Hi</p>
      <p style={divStyle[1]}>Hi</p>
      <p style={divStyle[1]}>Hi</p>
    </div>
  )
}

export default HorizontalDiv