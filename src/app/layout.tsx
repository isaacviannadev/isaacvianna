import '../styles/global.css';

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { Explorer } from '@/components/Explorer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { OpenFilesTabs } from '@/components/OpenFilesTabs';
import { OpenFilesProvider } from '@/hooks/useOpenFiles';

export const metadata = {
  title: {
    default: 'Isaac Vianna',
    template: '%s | Isaac Vianna',
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    'Software Engineer - Senior Frontend Developer. Passionate about technology and focused on delivering experience and results through programming.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <head />
      <body className='bg-[#7F7FD5] bg-app'>
        <div className='z-10 relative h-screen p-20 flex items-center justify-center'>
          <div className='bg-[#232135] overflow-hidden border border-[#72707D] w-full max-w-[1480px] aspect-video shadow-md shadow-black/20 rounded-lg grid grid-rows-layout'>
            <OpenFilesProvider>
              <Header />

              <div className='grid grid-cols-editor max-h-full'>
                <Menu />
                <Explorer />

                <div className='h-full relative flex flex-col'>
                  <OpenFilesTabs />
                  <div className='h-full relative'>{children}</div>
                </div>
              </div>
            </OpenFilesProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
