import React from 'react';


const addTabStyle = {
    techStackRow: {
        paddingLeft: 0,
        paddingRight: 0,
        marginBottom: '10px',
        marginLeft: '-10',
        marginTop: 10
    },
    logoDiv: {
        backgroundColor: 'green',
        overflow: 'hidden',
        marginTop: 8,
        top: '12%',
        paddingLeft: 0,
        maxHeight: '5rem',
        maxWidth: '5rem',

    },
    logoImg: {
        width: '100%',
        height: '100%'
    },
    proj_defntn: {
        backgroundColor: 'aqua',
        margin: 0,
        paddingTop: 10,
        maxHeight: '10rem',
        overflow: 'auto'
    }

}



const AddTab = (props) => {

    return props.items.map(techItem => {
        return (
            <div className=' container-fluid justify-content-center row col-12 border border-danger' id='tech_stack_whole_row' style={addTabStyle.techStackRow} key={techItem.key}>

                <div className='col-sm border border-danger' style={addTabStyle.logoDiv} onClick={() => alert('You Clicked In This Div')} id='lang_logo'>
                    <img src={techItem.logoSrc} alt={`${techItem.name} Logo`} style={addTabStyle.logoImg}></img>
                </div>

                <div className='col-sm' style={addTabStyle.proj_defntn} id='proj_defntn'>
                    <h6>{techItem.tabTitle}</h6>
                    <p>{techItem.tabContent}</p>
                </div>

            </div>
        )
    }
    )
}

export default AddTab