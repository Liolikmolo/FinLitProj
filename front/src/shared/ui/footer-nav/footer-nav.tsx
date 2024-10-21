'use client';
import React from 'react';
import styles from './footer-nav.module.scss';
import { QuestFetch } from '@/pages/question-page/question-fetch';

export const FooterNav = () => {
	const check = () => {
		QuestFetch().then(check);
	};
	const onPrevClick = () => {
		QuestFetch().then(onPrevClick);
	};
	const onNextClick = () => {
		QuestFetch().then(onNextClick);
	};
	return (
		<div className={styles.footerContainer}>
			<a className={styles.checkAnswer} onClick={check}>
				Проверить
			</a>
			<a className={styles.prevQuestion} onClick={onPrevClick}>
			← <span>Предыдущий вопрос</span>
			</a>
			<a className={styles.nextQuestion} onClick={onNextClick}>
			<span>Следующий вопрос</span> →
			</a>
		</div>
	);
};
