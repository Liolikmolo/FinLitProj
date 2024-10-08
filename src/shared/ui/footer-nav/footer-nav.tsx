import React from "react";
import styles from "./footer-nav.module.scss";

export const FooterNav = () => {
    return (
        <div className={styles.footerContainer}>
            <a className={styles.checkAnswer}>Проверить</a>
            <a className={styles.prevQuestion}>← Предыдущий вопрос</a>
            <a className={styles.nextQuestion}>Следующий вопрос →</a>
        </div>
    );
};