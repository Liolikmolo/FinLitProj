import React from 'react';
import prisma from '@/lib/prisma';
import styles from './question-tab.module.scss';
import { ProgressBar } from '@/features';

export const QuestionTab = async () => {
	const answers = await prisma.answer.findMany();

	/* const filteredAnswers = answers.filter(
		(answer) => answers.question_id === currentQuestion.id
	);  */

	return (
		<div className={styles.questionTab}>
			<main className={styles.main}>
				<ProgressBar />
			</main>
			<div className={styles.answers}>
				{answers.map((answer) => {
					return (
						<>
							<div className={styles.answer}>
								<ul>
									<li>{answer.content}</li>
								</ul>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};