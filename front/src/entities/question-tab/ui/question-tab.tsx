import React from 'react';
import prisma from '@/lib/prisma';
import styles from './question-tab.module.scss';
import { ProgressBar } from '@/features';
import { FooterNav } from '@/shared/ui';

export const QuestionTab = async () => {
	const answers = await prisma.answer.findMany();
	const question = await prisma.question.findFirst();

	return (
		<div className={styles.questionTab}>
			<h4 className={styles.numOfQuestion}>{question?.content}</h4>
			{/* <h3 className={styles.questionUnderNum}></h3> */}
			<main className={styles.main}>
				<ProgressBar />
			</main>
			<div className={styles.answers}>
				{answers.map((answer, key) => {
					return (
						<>
							<div className={styles.answer}>
								<ul>
									<li key={key}>{answer.content}</li>
								</ul>
							</div>
						</>
					);
				})}
			</div>
			<footer className={styles.footer}>
				<FooterNav />
			</footer>
		</div>
	);
};
