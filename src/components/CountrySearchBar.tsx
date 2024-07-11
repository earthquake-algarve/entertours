'use client';

import {  ChevronsUpDown, Search } from 'lucide-react';
import { useState } from 'react';
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
import Image from 'next/image';

const languages = [
	{
		value: 'portugal',
		label: 'Portuguese',
		flag: (
			<Image src='/flag-of-portugal.svg' alt='' width={30} height={30} />
		),
	},
	{
		value: 'english',
		label: 'English',
		flag: (
			<Image src='/flag-of-uk.svg' alt='' width={30} height={30} />
		),
	},
	{
		value: 'spanish',
		label: 'Spanish',
		flag: (
			<Image src='/flag-of-spain.svg' alt='' width={30} height={30} />
		),
	},
];

export default function CountrySearchBar() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	return (
		<>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant='outline'
						role='combobox'
						aria-expanded={open}
						className='w-60 h-12 justify-between'>
						{value ? (
							languages.find(
								(language) => language.value === value,
							)?.flag
						) : (
							<Search size={35} color='#bababa' />
						)}
						{value
							? languages.find(
									(language) => language.value === value,
							  )?.label
							: 'Select language...'}
						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-60 p-0'>
					<Command>
						<CommandInput placeholder='Search languages...' />
						<CommandList>
							<CommandEmpty>No languages found.</CommandEmpty>
							<CommandGroup>
								{languages.map((language) => (
									<CommandItem
										className='cursor-pointer'
										key={language.value}
										value={language.value}
										onSelect={(currentValue) => {
											setValue(
												currentValue === value
													? ''
													: currentValue,
											);
											setOpen(false);
										}}>
										<Button className='bg-transparent text-black hover:bg-transparent gap-2'>
											{language.flag}
											{language.label}
										</Button>
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</>
	);
}
