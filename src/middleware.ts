import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request: NextRequest) {
	const token = await getToken({ req: request, secret });

	if (request.nextUrl.pathname.startsWith('/admin')) {
		if (!token || token.role !== 'ADMIN') {
			// Redirect if no token found
			return NextResponse.rewrite(new URL('/notAuthorized', request.url));
		}
	}
	
	if (
		request.nextUrl.pathname.startsWith('/company/profile') ||
		request.nextUrl.pathname.startsWith('/company/tours')
	) {
		if (!token || token.hasCompany == false) {
			// Redirect if no token found
			return NextResponse.rewrite(new URL('/notAuthorized', request.url));
		}
	}

	return NextResponse.next();
}

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { isValidPassword } from './lib/isValidPassword';
// import { getServerSession } from 'next-auth';
// import authOptions from './app/api/auth/[...nextauth]/authOptions';

// export async function middleware(req: NextRequest) {
// const session = await getServerSession(authOptions);
// if (session?.user?.role !== 'ADMIN') {
// return <NotAuthorized />;
// }
// if ((await isAuthenticated(req)) === false) {
// 	return new NextResponse('Unauthorized', {
// 		status: 401,
// 		headers: { 'WWW-Authenticate': 'Basic' },
// 	});
// }

// }

// async function isAuthenticated(req: NextRequest) {
// 	const authHeader =
// 		req.headers.get('authorization') || req.headers.get('Authorization');

// 	if (authHeader == null) return false;

// 	const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64')
// 		.toString()
// 		.split(':');

// 	return (
// 		username === process.env.ADMIN_USERNAME &&
// 		(await isValidPassword(
// 			password,
// 			process.env.HASHED_ADMIN_PASSWORD as string,
// 		))
// 	);
// }

// export async function middleware(request: NextRequest) {
// 	const session = await getServerSession(authOptions)
// 	console.log(session)
// 	if (request.nextUrl.pathname.startsWith('/admin')) {
// 		if(session?.user?.role !== 'ADMIN'){

// 			return NextResponse.rewrite(new URL('/notAuthorized', request.url));
// 		}
// 	}

// if (request.nextUrl.pathname.startsWith('/dashboard')) {
// 	return NextResponse.rewrite(new URL('/dashboard/user', request.url));
// }
// }

// export const config = {
// 	matcher: ['/admin/:path*', '/company/tours/:path*','/company/profile/:*',]
// };
