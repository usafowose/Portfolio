import React from 'react'
import AddTab from './../Body_Left/Tech_Stack_Item'
import techStackItems from './Tech_Stack_Item/all_stack_items'


const bodyLeftStyles = [{
    minHeight: '25',
    margin: 10,
    marginRight: 23,
    marginLeft: 1,
    // backgroundColor: 'lightBlue',
    float: 'left',
    width: '48%',
    overflow: 'auto'
},
{
    color: 'white'
}]

const BodyLeft = (props) => {

    return (
        <div className='container-fluid rounded' style={bodyLeftStyles[0]}>
            <AddTab items={techStackItems} />
        </div>
    )
}

export default BodyLeft;
