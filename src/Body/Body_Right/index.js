import React from 'react'
import HorizontalDiv from './../Body_Left/horizontal_cards'

const BodyRight = (props) => {
    return (
        <div className='container-fluid border border-success rounded' style={{ minHeight: '25', float: 'left', backgroundColor: 'orange', margin: 10, marginLeft: 13, width: '48%', paddingTop:10, overflow: 'auto' }}>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <HorizontalDiv />
        </div>
    )
}

export default BodyRight;
