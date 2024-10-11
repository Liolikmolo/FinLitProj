import React from 'react';
import styles from './question.module.scss';

export const Question = () => {
    return (
        <div className={styles.container}>
            <a href='/' className={styles.exit}>X</a>
            <h4 className={styles.numOfQuestion}>Вопрос № 1</h4>
            <h3 className={styles.questionUnderNum}>1. Блаблабла</h3>
        </div>
    )
}