import React from 'react'; 

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

const ResumeTab = (props) => {
  return (
    <div className='container-fluid col-12 row rounded justify-content-center' style={divStyle[0]}>
      <div className='rounded' id="oval_parent" style={divStyle[2]}>
        <a href='https://www.google.com'>
          <div id="oval" className='justify-content-center border border-info' style={divStyle[3]}>
          <p style={divStyle[4]}><strong>Check Out My Resume</strong></p>
        </div></a>
        
      </div>
    </div>
  )
}

export default ResumeTab;