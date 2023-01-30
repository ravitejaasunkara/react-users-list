import React from "react";
import Button from "../Button/Button";
import styles from './Errormodal.module.css';
const Errormodal = props => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.closeModal}>
                <div className={styles.modal}>
                    <header className={styles.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={styles.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={styles.actions}>
                        <Button onClick={props.closeModal}>Okay</Button>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Errormodal;