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
		<div className='text-3xl mb-8 flex justify-between w-full'>
			<h1>{children}</h1>
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
