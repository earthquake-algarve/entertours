import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { CustomerNav } from '@/components/Nav';
import FooterSection from '@/components/sections/FooterSection';
import Provider from '@/components/Provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'EnterTours',
	description: 'Platform for finding, exploring, and managing tours',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'bg-background min-h-screen font-sans antialiased  overflow-x-hidden',
					inter.variable,
					
				)} 
				data-cjcrx='addYes'>
				<Provider>
					<CustomerNav />
					<div className=''>{children}</div>
				</Provider>

				<FooterSection />
			</body>
		</html>
	);
}
