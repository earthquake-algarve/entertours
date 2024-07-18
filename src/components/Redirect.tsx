import SigninForm from './SigninForm';
import { Card } from './ui/card';

// email signin not working yet in this component, but working with next-auth built-in page
export default function Redirect() {

	return (
		<div className='flex flex-col jusfity-center items-center'>
			<Card className='flex flex-col jusfity-center items-center space-y-10 m-6 p-8 w-96 border-none shadow-lg'>
				<span className='text-2xl'>Sign in with</span>
				<SigninForm />
			</Card>
		</div>
	);
}


