'use client';
import React from 'react';
import styles from './footer-nav.module.scss';
import { QuestFetch } from '@/app/api/question/route';

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
				← Предыдущий вопрос
			</a>
			<a className={styles.nextQuestion} onClick={onNextClick}>
				Следующий вопрос →
			</a>
		</div>
	);
};
