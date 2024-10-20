'use client';

import React from 'react';
import styles from './question-page.module.scss';

export const QuestionPage = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.container}>
			<a href="/" className={styles.exit}>
				X
			</a>

			{children}
		</div>
	);
};
