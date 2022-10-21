import React from "react";
import styles from './ErrorModule.module.css'

const ErrorModule = ({title, message, closeModal}) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <header>
          <h2>{title}</h2>
        </header>
        <div>
          <p>{message}</p>
        </div>
        <footer>
          <button onClick={closeModal}>ok it's right</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModule;
