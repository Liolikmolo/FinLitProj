import { signIn } from '@/auth';

export const authenticate = async (
	_currentState: unknown,
	formData: FormData
) => {
	try {
		await signIn('credentials', formData);
	} catch (error) {
		if (error) {
			switch (error) {
				case 'CredentialsSignin':
					return 'Invalid credentials';

				default:
					return 'Something went wrong';
			}
		}
	}
	throw Error;
};
