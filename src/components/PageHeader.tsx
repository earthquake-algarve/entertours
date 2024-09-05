import { ReactNode } from 'react';
import { BrandButton } from './BrandButton';

type PageHeaderProps = {
	children: ReactNode;
	buttonChildren?: ReactNode;
	buttonAsChild?: boolean;
};

export function PageHeader({
	children,
	buttonChildren,
	buttonAsChild,
}: PageHeaderProps) {
	return (
		<div className='text-3xl mb-8 flex justify-between w-full xl:w-5/6'>
			{children}
			{buttonChildren ? (
				<BrandButton asChild={buttonAsChild}>
					{buttonChildren}
				</BrandButton>
			) : (
				''
			)}
		</div>
	);
}
