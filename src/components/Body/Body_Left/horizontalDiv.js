import React from 'react'


const divStyle = [{
  // backgroundColor: 'teal', 
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 1,
  minHeight: 150,
  overflow: 'auto', 
  float:'left'
},
{
  color: 'grey'
}]

const HorizontalDiv = (props) => {
  return (
    <div className='container-fluid col-12 row rounded border' style={divStyle[0]} >
    </div>
  )
}

export default HorizontalDiv