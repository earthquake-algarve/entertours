import CompanyRegisterForm from '@/components/CompanyRegisterForm';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/ui/card';

export default async function RegisterCompany() {
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
