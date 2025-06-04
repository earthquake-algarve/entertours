import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { NextAuthOptions } from 'next-auth';

const prisma = new PrismaClient();


export const authOptions:NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			allowDangerousEmailAccountLinking: true, // Enable cross-provider linking
		}),
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
			allowDangerousEmailAccountLinking: true,
		}),
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: Number(process.env.EMAIL_SERVER_PORT),
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
			
		}),
		// ...add more providers here
	],
	adapter: PrismaAdapter(prisma) as any,
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
		async jwt({ token, user }) {

			const dbUser = await prisma.user.findFirst({
				where: {
					email: token.email ?? undefined,
				}
			})

			if (!dbUser) {
				if (user && user.id) {
					token.id = user.id;
				}
				return token as any; // Ensure token has id property
			}
			return {
				...token,
				id: dbUser.id,
				name: dbUser.name,
				email: dbUser.email,
				image: dbUser.image,
				role: dbUser.role,
				hasCompany: dbUser.hasCompany,
				isActive: dbUser.isActive,
			} as any; // Ensure returned object matches JWT interface
		},
		async session({ session, token }) {
			if(token) {
				session.user.id = token.id;
				session.user.name = token.name;
				session.user.email = token.email;
				session.user.image = token.image as string;
				session.user.role = token.role;
				session.user.hasCompany = token.hasCompany;
				session.user.isActive = token.isActive;
			}
			return session;
		},
	},
	// allowDangerousEmailAccountLinking: true ,// Enable cross-provider linking

	session:{
		strategy: "jwt",
	},
	theme: {
		logo: '/logo.png',
	},
	// debug: true,
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
