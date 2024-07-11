import Image from "next/image";

export default function BannerSection() {
  return (
      <section className="flex">
          <Image
              src="/banner.png"
              alt="banner"
              width={1600}
              height={500}
              className="w-screen max-h-96 opacity-80 relative"
          />
          <span className=" absolute text-white font-bold top-24 xl:text-6xl  xl:left-16  xl:w-1/2 md:text-5xl md:left-16  md:w-2/3 sm:text-4xl sm:left-10 sm:w-2/3">
              Crie memórias incríveis no Algarve com a EnterTours
          </span>
      </section>
  )
}
