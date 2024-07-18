'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Label } from './ui/label';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { emailSchema } from '@/app/validation/schema';
import { signIn } from 'next-auth/react';
import { BrandButton } from './BrandButton';

export default function SigninForm() {
	const form = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
	});

	function formSubmit(values: z.infer<typeof emailSchema>) {
		console.log(values);
	}

	function googleSignin() {
		signIn('google', { callbackUrl: '/' });
	}
	function githubSignin() {
		signIn('github', { callbackUrl: '/' });
	}

	return (
		<div className='space-y-8 flex flex-col items-center' >
			<div className='flex gap-3'>
				<BrandButton onClick={googleSignin}>
					Sign in with Google
				</BrandButton>
				<BrandButton onClick={githubSignin}>
					Sign in with Github
				</BrandButton>
			</div>
            <div>or</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(formSubmit)}
					className='space-y-4 w-full flex flex-col'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder='example@mail.com'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className='bg-orange-300 hover:bg-bg-orange-300 text-black'
						type='submit'>
						Sign in with Email
					</Button>
				</form>
			</Form>
		</div>
	);
}
