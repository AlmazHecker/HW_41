import React from "react";
import Card from "../UI/Card/Card";
import classes from "./UsersList.module.css";

import RenderUsers from './RenderUsers'

const UsersList = props => {

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user =>
                    <RenderUsers key={user.id} id={user.id} onDelete={props.onDelete}>
                        {user.name} {user.age}
                    </RenderUsers>)}
            </ul>
        </Card>
    )
}

export default UsersList;