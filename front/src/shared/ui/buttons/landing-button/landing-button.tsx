import React from 'react';
import styles from './landing-button.module.scss';
import Image from 'next/image';
import arrowUp from '@/shared/assets/icons/arrow-up.svg';

type LandingButtonProps = {
	width: number;
	height: number;
	fontSize: number;
	color?: string;
	children: React.ReactNode;
};

export const LandingButton = ({
	width,
	height,
	fontSize = 16,
	color = 'white',
	children,
}: LandingButtonProps) => {
	const buttonStyle = {
		height: height,
		width: width,
		fontSize: fontSize,
		color: color,
	};

	return (
		<button style={buttonStyle} className={styles.button}>
			{children}{' '}
			<Image className={styles.arrowUp} src={arrowUp} alt="arrow-up-image" />
		</button>
	);
};
