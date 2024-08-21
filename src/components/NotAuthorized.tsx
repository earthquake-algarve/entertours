import Link from 'next/link';
import { PageHeader } from './PageHeader';

export default function NotAuthorized() {
	return (
		<div className='container mt-8 h-96 flex justify-center items-center'>
			<PageHeader
				buttonAsChild={true}
				buttonChildren={<Link href='/'>Back to home page</Link>}>
				You are not authorized to view this page.
			</PageHeader>
		</div>
	);
}
