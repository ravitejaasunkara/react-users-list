import React from "react";
import styles from './Allusers.module.css';
const Allusers = props => {
    //console.log(props.usersList);
    const users = props.usersList.map(item => {
        return <p className={styles.userItem} key={item.id}>{item.name} is {item.age} years old.</p>
    })
    return(
        <div>
            {users}
        </div>
    );
}

export default Allusers;