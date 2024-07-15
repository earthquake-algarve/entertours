'use client';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

export default function Redirect() {
	return (
		<div className='flex flex-col jusfity-center items-center space-y-10 m-6'>
			<span className='text-2xl'>
				You are not logged in, please sign in
			</span>
			<div className='flex gap-3'>
				<Button
					className='bg-orange-300 hover:bg-bg-orange-300 text-black'
					onClick={() => signIn('google')}>
					Sign in with Google
				</Button>
				<Button
					className='bg-orange-300 hover:bg-bg-orange-300 text-black'
					onClick={() => signIn('github')}>
					Sign in with Github
				</Button>
			</div>
		</div>
	);
}

// import { Button } from '@/components/ui/button';
// import { signIn } from '@/api/auth/[...nextauth]/authOptions';

// export default function Redirect() {
// 	return (
// 		<form className='flex flex-col jusfity-center items-center space-y-10 m-6'
//         action={async () => {
//             'use server'
// 			await signIn('github');
//         }}>
// 			<span className='text-2xl'>
// 				You are not logged in, please sign in
// 			</span>
// 			<Button
// 				className='bg-orange-300 hover:bg-bg-orange-300 text-black'
// 				type='submit'>
// 				Sign in with Google
// 			</Button>
// 		</form>
// 	);
// }
