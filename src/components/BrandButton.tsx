import { Button } from "./ui/button"

type BrandButtonProps = {
	children: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	asChild? : boolean
};


export const BrandButton = ({ children, onClick = () => {}, type, disabled,asChild}: BrandButtonProps) => {
	return (
		<Button
			className='bg-orange-300 hover:bg-bg-orange-300 text-black'
			onClick={onClick}
			type={type}
			disabled={disabled}
			asChild={asChild}>
			{children}
		</Button>
	);
};