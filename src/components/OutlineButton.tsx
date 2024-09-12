'use client';

import { ReactNode } from 'react';
import { Button } from './ui/button';

type OutlineButtonProps = {
	children: ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	asChild?: boolean;
};

export const OutlineButton = ({
	children,
	onClick = () => {},
	type,
	disabled,
	asChild,
}: OutlineButtonProps) => {
	return (
		<Button
			className='bg-white outline-none hover:bg-white hover:scale-110  text-black'
			onClick={onClick}
			type={type}
			disabled={disabled}
			asChild={asChild}>
			{children}
		</Button>
	);
};
