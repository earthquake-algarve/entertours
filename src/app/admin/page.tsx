import { getServerSession } from 'next-auth'
import React from 'react'
import authOptions from '../api/auth/[...nextauth]/authOptions'
import Link from 'next/link';
import { Button } from '@/components/ui/button';



export default async function AdminPage() {

  const session = await getServerSession(authOptions);
  console.log(session)


  if(session?.user?.role !== 'ADMIN'){
    return (
		<div className='flex flex-col space-y-6'>
			<h1>You are not authorized to view this page.</h1>
			<Button asChild>
				<Link href='/'>Back to Home page</Link>
			</Button>
		</div>
	);
  }
  return (
    <h1>Admin page</h1>
  )
}
