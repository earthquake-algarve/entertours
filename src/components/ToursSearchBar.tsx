'use client';

import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import Link from 'next/link';
import { Tour } from '@/generated/prisma';


export default function ToursSearchBar() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const [tours, setTours] = useState<Tour[]>();

	useEffect(() => {
		async function fetchToursData() {
			try {
				const toursData = await fetch('/api/tours').then((res) =>
					res.json(),
				);
				if(!toursData || !Array.isArray(toursData)) {
					throw new Error('Invalid tours data format');
				}
				setTours(toursData);
			} catch (error) {
				console.error('Failed to fetch tours data:', error);
			}
		}
		fetchToursData();
	}, []);

	return (
		<>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant='outline'
						role='combobox'
						aria-expanded={open}
						className='w-96 h-12 justify-between'>
						<Search size={35} color='#bababa' />
						{value
							? tours?.find((tour) => tour.name === value)?.name
							: 'Search for tours...'}
						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-96 p-0'>
					<Command>
						<CommandInput placeholder='Search tours...' />
						<CommandList>
							<CommandEmpty>No tours found.</CommandEmpty>
							<CommandGroup>
								{tours?.map((tour) => (
									<Link
										href={`/tours/${tour.id}`}
										key={tour.id}>
										<CommandItem
											className='cursor-pointer'
											value={tour.name}
											onSelect={(currentValue) => {
												setValue(
													currentValue === value
														? ''
														: currentValue,
												);
												setOpen(false);
											}}>
											<Check
												className={cn(
													'mr-2 h-4 w-4',
													value === tour.name
														? 'opacity-100'
														: 'opacity-0',
												)}
											/>

											{tour.name}
										</CommandItem>
									</Link>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</>
	);
}
