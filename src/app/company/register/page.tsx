import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import CompanyRegisterForm from '@/components/CompanyRegisterForm';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { getServerSession } from 'next-auth';

export default async function RegisterCompany() {
	const session = await getServerSession(authOptions)
	// console.log(session)

	if (!session) return <span>You are not authorized to see this page</span>
	
	return (
		<>
        <div className='flex flex-col justify-center items-center p-10'>
			<PageHeader>Register your company and start selling tours</PageHeader>
			<div className='flex justify-center items-center'>
				<Card className='border-none shadow-lg'>
					<CompanyRegisterForm />
				</Card>
			</div>
        </div>
		</>
	);
}
