import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import NextAuth from 'next-auth';
import { debug } from 'console';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
		// ...add more providers here
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
        async signIn() {
            try {
                // Custom logic here if needed
                return true;
            } catch (error) {
                console.error('Error in signIn callback:', error);
                return false;
            }
        },
	},
	debug: true,
};

export default authOptions;
// export const authOptions= {
// 	providers: [
// 		Google,
// 		Github,

		// GoogleProvider({
		// 	clientId: process.env.GOOGLE_CLIENT_ID as string,
		// 	clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		// }),
		// GithubProvider({
		// 	clientId: process.env.GITHUB_CLIENT_ID as string,
		// 	clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		// })
		// CredentialsProvider({
		// 	name: 'Credentials',

		// 	credentials: {
		// 		email: { label: 'Email', type: 'email' },
		// 		password: { label: 'Password', type: 'password' },
		// 	},

		// 	async authorize(credentials) {
		// 		const user = await findUser(credentials.email);

		// 		if (!user) {
		// 			console.log('User not found');
		// 			return null;
		// 		}

		// 		if (user.password === credentials.password) {
		// 			console.log('Password is correct');
		// 			console.log(user);
		// 			return user;
		// 		} else {
		// 			console.log('Password is incorrect');
		// 			return null;
		// 		}
		// 	},
		// }),
	// ],
	// pages: {
	// 	signIn: '/login',
	// },
	// session: {
	// 	strategy: 'jwt',
	// },

	// callbacks: {
	// 	async jwt({ token, user}) {
	// 		if (user) {
	// 			token.user = user.user

	// 		}
	// 		return token;
	// 	},
	// 	async session ( session, token ){
	// 		if(session?.user) {
	// 			session.user.email = token.email
	// 		}
	// 		return session
	// 	},
	// },
// };
