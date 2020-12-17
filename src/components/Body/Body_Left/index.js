import React from 'react'
import AddTab from './Tech_Stack_Item'
import techStackItems from './Tech_Stack_Item/all_stack_items'
import styles from './bodyLeft.module.css'



const BodyLeft = (props) => {
    console.log(props)
    return (

        <div className={`container-fluid rounded ${styles.container}`}  >
            <AddTab
                items={techStackItems}                
            />
        </div>
    )
}

export default BodyLeft;
