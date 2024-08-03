import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { UserRole } from '@prisma/client';

// type AuthRole = 'Admin' | 'Client';

type UserId = string;

declare module 'next-auth/jwt' {
	// interface JWT {
	// 	id: UserId;
    //     role: UserRole;
	// }
    interface JWT {
		/** OpenID ID Token */
        id: UserId;
		role?: UserRole;
	}
}

declare module 'next-auth' {
	// interface Session {
	// 	user: User & {
	//         id : UserId;
	//         role: UserRole;
	//     }
	// }
		interface Session {
			user: {
				/** The user's role. */
                id: UserId;
				role?: UserRole;
			} & DefaultSession['user'];
		}
}

// declare module 'next-auth' {
// 	interface User {
// 		role: AuthRole[];
// 	}



// 	interface Profile {
// 		role: AuthRole[];
// 	}
// }

// declare module 'next-auth' {
// 	/**
// 	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
// 	 */
// 	interface Session {
// 		user: {
// 			/** The user's role. */
// 			role?: string;
// 		} & DefaultSession['user'];
// 	}
// }

// declare module 'next-auth/jwt' {
// 	/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
// 	interface JWT {
// 		/** OpenID ID Token */
// 		role?: string;
// 	}
// }
