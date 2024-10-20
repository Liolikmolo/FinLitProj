import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Landing } from '@/pages/landing-page';

const Home = ({ pageProps }: AppProps) => {
	return (
		<SessionProvider>
			<Landing {...pageProps} />
		</SessionProvider>
	);
};

export default Home;
