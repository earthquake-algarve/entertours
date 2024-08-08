'use client';

import { Input } from '@/components/ui/input';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { registerCompanySchema } from '@/app/validation/schema';
import { BrandButton } from './BrandButton';
import { useSession } from 'next-auth/react';
import { registerCompany } from '@/app/company/_actions/register';

export default function CompanyRegisterForm() {
	const form = useForm<z.infer<typeof registerCompanySchema>>({
		resolver: zodResolver(registerCompanySchema),
	});

	const { data: session } = useSession();
	// console.log(session)

	async function formSubmit(values: z.infer<typeof registerCompanySchema>) {
		const formData = new FormData();
		// console.log(values);

		(Object.keys(values) as Array<keyof typeof values>).forEach((key) => {
			formData.append(key, values[key]);
		});

		if(session){

			formData.append("userId", session?.user?.id);
		}

		await registerCompany(formData)
	}
	return (
		<div className='p-8 space-y-8 flex flex-col items-center w-96'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(formSubmit)}
					className='space-y-4 w-full flex flex-col'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										placeholder='Company XPTO'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
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
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone number</FormLabel>
								<FormControl>
									<Input
										placeholder='+44077504231'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='address'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Address</FormLabel>
								<FormControl>
									<Input
										placeholder='Estrada da Meia Praia, 8B'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='nif'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Fiscal Number (NIF)</FormLabel>
								<FormControl>
									<Input placeholder='540234589' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<BrandButton type='submit'>Register</BrandButton>
				</form>
			</Form>
		</div>
	);
}
