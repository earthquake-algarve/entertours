import Image from "next/image";

export default function HeroSection() {
  return (
		//   <section className="flex">
		//       <Image
		//           src="/banner.png"
		//           alt="banner"
		//           width={1600}
		//           height={500}
		//           className="w-screen max-h-96 opacity-80 relative"
		//       />
		//       <span className=" absolute text-white font-bold top-24 xl:text-6xl  xl:left-16  xl:w-1/2 md:text-5xl md:left-16  md:w-2/3 sm:text-4xl sm:left-10 sm:w-2/3">
		//           Crie memórias incríveis no Algarve com a EnterTours
		//       </span>
		//   </section>

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
						Explore Tours
					</button>
					<button className='px-6 py-3 text-lg font-semibold  rounded-2xl bg-white transition'>
						Join as a Company
					</button>
				</div>
			</div>

			{/* Optional: Background Visual */}
			<div className="absolute inset-0 -z-10 opacity-50 bg-[url('/banner.png')] bg-cover bg-center"></div>
		</section>
  );
}
