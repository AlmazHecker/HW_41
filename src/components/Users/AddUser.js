import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from '../UI/Button/Button';
import classes from './AddUser.module.css';
import ModalOverlay from "../UI/Modal/ModalOverlay";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }


    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
            {error && <ModalOverlay title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        value={enteredUsername}
                        type='text'
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input
                        id="age"
                        type='number'
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;