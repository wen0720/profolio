import { Noto_Sans_TC } from 'next/font/google';

import '@workspace/ui/globals.css';
import './globals.css';
import { Providers } from '@/components/providers';

const fontDisplay = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '700', '900'],
});

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
