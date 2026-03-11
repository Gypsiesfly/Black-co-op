import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'Black Co-op CIC',
  description: 'Building Black generational wealth through cooperative economics',
  icons: {
    icon: [
      { url: '/images/site-icon.png' },
      { url: '/images/site-icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/images/site-icon.png',
  },
  other: {
    'material-icons': 'https://fonts.googleapis.com/icon?family=Material+Icons',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  )
}
