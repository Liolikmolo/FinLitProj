import React from 'react';
import prisma from '@/lib/prisma';
import styles from './question-tab.module.scss';
import { ProgressBar } from '@/features';
import { FooterNav } from '@/shared/ui';

export const QuestionTab = async () => {
	const answers = await prisma.answer.findMany();

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
			<footer className={styles.footer}>
				<FooterNav />
			</footer>
		</div>
	);
};
