import React from "react";
import styles from "./footer-nav.module.scss";

export const FooterNav = () => {
  function checkAnswer() {
    // if (currentQuestion.correct === true)
    // currentQuestion (add styles with green or red colours)
  }

  function prevQuestion() {
    // if (questionIndex > 0)
    // setQuestionIndex(questionIndex - 1)
  }

  function nextQuestion() {
    // setQuestionIndex(questionIndex + 1)
    /* тут не нужна проверка, т.к. мы будем перерендеривать страницу
    на страницу с результатом */
  }

  return (
    <div className={styles.footerContainer}>
      <a onClick={checkAnswer} className={styles.checkAnswer}>
        Проверить
      </a>
      <a onClick={prevQuestion} className={styles.prevQuestion}>
        ← <span>Предыдущий вопрос</span>
      </a>
      <a onClick={nextQuestion} className={styles.nextQuestion}>
        <span>Следующий вопрос</span> →
      </a>
    </div>
  );
};