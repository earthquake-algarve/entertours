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
import { companyRegisterSchema } from '@/app/validation/schema';
import { BrandButton } from './BrandButton';

export default function CompanyRegisterForm() {
    	const form = useForm<z.infer<typeof companyRegisterSchema>>({
			resolver: zodResolver(companyRegisterSchema),
		});

		function formSubmit(values: z.infer<typeof companyRegisterSchema>) {
			console.log(values);
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
						name='nif'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Fiscal Number (NIF)</FormLabel>
								<FormControl>
									<Input
										placeholder='540234589'
										{...field}
									/>
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
