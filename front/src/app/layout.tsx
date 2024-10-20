import type { Metadata } from 'next';

import { Montserrat } from 'next/font/google';
import './globals.scss';

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Школа финансовой грамоты "Филин"',
	description: 'Научись управлять своими финансами вместе с нами!',
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				{children}
			</body>
		</html>
	);
}
