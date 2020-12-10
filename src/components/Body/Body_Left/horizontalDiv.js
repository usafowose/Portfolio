import React from 'react'


const divStyle = [{
  // backgroundColor: 'teal', 
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 1,
  minHeight: 150,
  overflow: 'auto',
  float: 'left'
},
{
  color: 'grey'
},
{
  marginTop: 25,
  background: 'none',
  width: 220,
  height: 100,
  overflow: 'hidden'
},
{

  width: 220,
  height: 100,
  margin: '10px, 0, 0, 10px',
  background: 'white',
  borderRadius: '100px / 50px'
}, 
{

  marginLeft: 27, 
  marginTop: 35 
}]

const HorizontalDiv = (props) => {
  return (
    <div className='container-fluid col-12 row rounded border justify-content-center' style={divStyle[0]}>
      
    </div>
  )
}

export default HorizontalDiv