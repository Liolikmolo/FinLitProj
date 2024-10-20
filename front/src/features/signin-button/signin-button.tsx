import { signIn } from '@/auth';

export const SignIn = () => {
	return (
		<form
			action={async () => {
				'use server';
				await signIn('github', { redirectTo: '/' });
			}}>
			<button type="submit">Sign In</button>
		</form>
	);
};
