import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'My New App',
    description: 'Generated by Onlook',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="20cucqd">
            <body className={inter.className} data-oid="f2k8fy:">
                {children}
            </body>
        </html>
    );
}
