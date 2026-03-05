import { Noto_Sans_TC } from 'next/font/google';
import type { Metadata } from 'next';
import '@workspace/ui/globals.css';
import './globals.css';
import { Providers } from '@/components/providers';

const fontDisplay = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Tim Chen - site',
  description: 'Make it work first, make it right, make it fast.',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={`${fontDisplay.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
