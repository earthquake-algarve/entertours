import { Button } from "./ui/button"

type BrandButtonProps = {
	children: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};


export const BrandButton = ({ children, onClick = () => {} }: BrandButtonProps) => {
	return (
		<Button
			className='bg-orange-300 hover:bg-bg-orange-300 text-black'
			onClick={onClick}>
			{children}
		</Button>
	);
};