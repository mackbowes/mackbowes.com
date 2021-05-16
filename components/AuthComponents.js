import {useRouter} from 'next/router';

export const AuthCheck = () => {
	const router = useRouter();
	const user = JSON.parse(localStorage.user);
	if (user.isAuthenticated === false) {
		router.push('/LogIn');
	}
}