import React, {useState} from 'react'
import ModalOverlay from '../UI/Modal/ModalOverlay'
import Button from '../UI/Button/Button'

function RenderUsers(props){

    const [user, DeleteUser] = useState(false)

    function onDelete(){
        props.onDelete(props.id)
    }

    return(
        <>
              { user ? <ModalOverlay onDelete={onDelete} onCancel={() => DeleteUser(false)} /> : '' }
            <li style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
             {props.children}
              <Button onClick={() => DeleteUser(true)} >delete User</Button>
            </li>
        </>
    )
}

export default RenderUsers;