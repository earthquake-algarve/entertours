import getSession from '@/lib/session/session';
import Image from 'next/image';
import Link from 'next/link';

export default async function HeroSection() {
	const session = await getSession() ?? null;

	return (
		<section className='relative  py-20 px-6 text-center'>
			<div className='max-w-4xl mx-auto'>
				<h1 className='text-4xl md:text-6xl font-bold mb-6'>
					Discover Unforgettable Tours — Wherever You Are.
				</h1>
				<h3 className='text-lg md:text-xl mb-8 font-semibold'>
					Entertours connects travelers with nearby adventures while
					giving companies the tools to manage and grow their
					offerings — all in real time.
				</h3>
				<div className='flex flex-col sm:flex-row justify-center gap-4 mb-10'>
					<button className='px-6 py-3 text-lg font-semibold bg-orange-300 rounded-2xl shadow-md hover:bg-orange-400 transition'>
						<Link href='/tours' className='flex justify-center'>
							Explore tours
						</Link>
					</button>
					<button className='px-6 py-3 text-lg font-semibold  rounded-2xl bg-white transition'>
						<Link
							href={
								session
									? session?.user.hasCompany
										? `/company/profile`
										: '/company/register'
									: '/login'
							}
							className='flex justify-center'>
							Join as a company
						</Link>
					</button>
				</div>
			</div>

			{/* Optional: Background Visual */}
			<div className="absolute inset-0 -z-10 opacity-50 bg-[url('/banner.png')] bg-cover bg-center"></div>
		</section>
	);
}
