import { Button } from "./ui/button"

type BrandButtonProps = {
	children: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: "button" | "submit" | "reset"
};


export const BrandButton = ({ children, onClick = () => {}, type }: BrandButtonProps) => {
	return (
		<Button
			className='bg-orange-300 hover:bg-bg-orange-300 text-black'
			onClick={onClick}
			type={type}>
			{children}
		</Button>
	);
};