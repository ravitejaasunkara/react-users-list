import React from "react";
import styles from './Adduser.module.css';
import '../Button/Button';
import Button from "../Button/Button";
import { useState } from "react";
import Errormodal from "../ErrorModal/Errormodal";
const Adduser = (props) => {
    const [username, setUsername] = useState('');
    const [flag, setFlag] = useState();
    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }
    const [age, setAge] = useState('');
    const ageHandler = (event) => {
        setAge(event.target.value);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setFlag({
                title: 'Invalid Input',
                message: 'Please enter a valid username and age(non-empty values)'
            })
            return;
        }
        if (age < 0) {
            setFlag({
                title: 'Invalid Age',
                'message': 'Age must be greater than 0'
            })
            return;
        }
        const userData = {
            name: username,
            age: age,
            id: Math.random().toString(),
        };
        props.updateUsersList(userData);
        setUsername('');
        setAge('');
    }
    const closeModalHandler = () => {
        setFlag(null);
    }
    return (
        <div>
            <form onSubmit={addUserHandler}>
                <div className={styles.formHolder}>
                    <label>Username</label>
                    <input type="text" className="form-control mt-2"
                        onChange={usernameHandler}
                        value={username} />
                    <label>Age</label>
                    <input type="number" className="form-control mt-2"
                        onChange={ageHandler}
                        value={age} />
                    <Button type="submit" onClick={addUserHandler}>Add User</Button>
                </div>
            </form>
            {
                (flag && <Errormodal title={flag.title} message={flag.message} closeModal={closeModalHandler}/>)
            }
        </div>
    );
}
export default Adduser;