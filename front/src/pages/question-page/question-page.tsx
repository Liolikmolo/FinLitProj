import React from 'react';
import prisma from '@/lib/prisma';
import { QuestionTab } from '@/entities/question-tab/ui/question-tab';
import styles from './question-page.module.scss';

export const QuestionPage = async () => {
	const data = await prisma.question.findMany();
	const question = data.map((item) => {
		const text = item.content;
		return text;
	});
	return (
		<div className={styles.container}>
			<a href="/" className={styles.exit}>
				X
			</a>
			<h4 className={styles.numOfQuestion}>Вопрос №1</h4>
			<h3 className={styles.questionUnderNum}>{question}</h3>
			<QuestionTab />
		</div>
	);
};
