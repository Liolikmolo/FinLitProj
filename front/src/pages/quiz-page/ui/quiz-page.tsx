import React from "react";
import styles from "./quiz-page.module.scss";
import { LandingButton } from "@/shared/ui";

export const QuizPage = () => {
  return (
    <div className={styles.start_content}>
      <h2 className={styles.start_title}>
        Топ-5 причин изучать финансовую грамотность:
      </h2>
      <div className={styles.reasons}>
        <p className={styles.reason_item}>
          <span>1</span>Планирование бюджета
        </p>
        <p className={styles.reason_item}>
          <span>2</span>
          Улучшение финансовой самодисциплины
        </p>
        <p className={styles.reason_item}>
          <span>3</span>Достижение финансовой свободы
        </p>
        <p className={styles.reason_item}>
          <span>4</span>Защита от финансовых мошенников
        </p>
        <p className={styles.reason_item}>
          <span>5</span>
          Мотивация на высокооплачиваемые профессии
        </p>
      </div>
      <LandingButton width={300} height={85} fontSize={20} href={"/question"}>
        Начать опрос
      </LandingButton>
    </div>
  );
};
