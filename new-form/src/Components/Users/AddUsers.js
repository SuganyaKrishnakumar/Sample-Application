import React from 'react';
import Card from '../UI/Card';
const AddUsers = props =>{

    const addUserHandler = (event) =>{
        event.preventDefault();
        return (
            console.log('Hi')
            )
    }
    return (
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username"/>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" />
            <button type="submit">Add User</button>
        </form>
        </Card>
    );
}

export default AddUsers;