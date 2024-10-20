import React from 'react';
import styles from './progress-bar.module.scss';
import prisma from '@/lib/prisma';

export const ProgressBar = async () => {
	const numbers = await prisma.question.count({
		// where: { quizId: '5a34035e-85be-4ba6-b3' },
	});

	/* questionIndex */

	return (
		<div className={styles.barContainer}>
			<div className={styles.progress_bar}>
				<div className={styles.progress}></div>
				<div className={styles.progress_number}>1 из {numbers}</div>
			</div>
		</div>
	);
};