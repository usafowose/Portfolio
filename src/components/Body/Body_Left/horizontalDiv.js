import React from 'react'


const divStyle = [{
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 1,
  minHeight: 150,
  overflow: 'auto',
  float: 'left'
}]

class HorizontalDiv extends React.Component{
  // constructor(props){
  //   super(props)
  // }

  // Above un-commented due to no unusued constructor rule. work must be done within constructor for the constructor to be necessary. Ohterwise, babel, will automatically implement the constructor itself once it compiles. 

  render() {
    return (
      <div className='container-fluid col-12 row rounded border justify-content-center' style={divStyle[0]}>
        <p>HelloOO</p>
      </div>
    )
  }
}

export default HorizontalDiv