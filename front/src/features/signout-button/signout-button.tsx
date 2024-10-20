import { signOut } from '@/auth';

export const SignOut = () => {
	return (
		<form
			action={async () => {
				'use server';
				await signOut();
			}}>
			<button type="submit">Sign Out</button>
		</form>
	);
};
