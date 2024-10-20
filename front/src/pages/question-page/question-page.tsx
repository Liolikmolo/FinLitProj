'use client';

import React from 'react';
// import prisma from '@/lib/prisma';
import { QuestionTab } from '@/entities/question-tab/ui/question-tab';
import styles from './question-page.module.scss';
import { FooterNav } from '@/shared/ui';

export const QuestionPage = () => {
	// const data = await prisma.question.findMany();
	// const question = data.map((item) => {
	// 	return item.content;
	// });

	// const questions = prisma.question.findMany();
	// const [questionIndex, setQuestionIndex] = useState(0);
	// let currentQuestion = questions[questionIndex];

	return (
		<div className={styles.container}>
			<a href="/" className={styles.exit}>
				X
			</a>
			<h4 className={styles.numOfQuestion}>Вопрос №1</h4>
			<h3 className={styles.questionUnderNum}>question</h3>
			<QuestionTab />
			<footer className={styles.footer}>
				<FooterNav />
			</footer>
		</div>
	);
};