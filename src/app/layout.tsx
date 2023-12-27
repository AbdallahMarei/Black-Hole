import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss'
import StarsCanvas from '@/components/StarsCanvas/StarsCanvas'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: "BlackHole",
	description: "Black hole with stars",
	keywords: [
		"nextjs",
		"react",
		"react server components",
		"blackHole",
	],
	authors: [
		{
			name: "AbdallahMarei",
		},
	],
	creator: "AbdallahMarei",
}

export default function RootLayout({
  	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StarsCanvas />
				{children}
			</body>
		</html>
	)
}
