import React from 'react';
import styles from './question-page.module.scss';

export const QuestionPage = () => {
    return (
        <div className={styles.container}>
            <a href='/' className={styles.exit}>X</a>
            <h4 className={styles.numOfQuestion}>Вопрос №1</h4>
            <h3 className={styles.questionUnderNum}>1. Сколько нужно купить акций, чтобы жить на дивиденды?</h3>
        </div>
    )
}