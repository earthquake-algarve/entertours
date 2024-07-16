import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Nav } from '@/components/Nav';
import FooterSection from "@/components/sections/FooterSection";
import Provider from "@/components/Provider";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
	title: "EnterTours",
	description: "",
}

// export const dynamic = 'force-dynamic'; cache

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>)

{
	return (
		<html lang='en'>
			{/* <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased overflow-y-hidden overflow-x-hidden flex",
          inter.variable
        )}
      > */}
			<body
				className={cn(
					'bg-background min-h-screen font-sans antialiased  overflow-x-hidden',
					inter.variable,
				)}>
				<Provider>
					<Nav />
				</Provider>
				{/* <div className='container my-6'>{children}</div> */}
				<div className=''>{children}</div>

				<FooterSection />
			</body>
		</html>
	);
}