'use client';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

// email signin not working yet in this component, but working with next-auth built-in page
export default function Redirect() {
	const [email, setEmail] = useState("");
	return (
		<div className='flex flex-col jusfity-center items-center space-y-10 m-6'>
			<span className='text-2xl'>Sign in with</span>
			{/* create a component to display the email form and beautify this redirect component */}
			<div className='flex gap-3'>
				<Button
					className='bg-orange-300 hover:bg-bg-orange-300 text-black'
					onClick={() => signIn('google', { callbackUrl: '/' })}>
					Sign in with Google
				</Button>
				<Button
					className='bg-orange-300 hover:bg-bg-orange-300 text-black'
					onClick={() => signIn('github', { callbackUrl: '/' })}>
					Sign in with Github
				</Button>
			</div>
			<form className='flex flex-col'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					className='border-red-50'
					onChange={(e) => {setEmail(e.target.value)}}
				/>
				<Button
					className='bg-orange-300 hover:bg-bg-orange-300 text-black'
					onClick={() => (
						
						signIn('email', { email: email, callbackUrl: '/' })
						)
						}>
					Sign in with email
				</Button>
			</form>
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
