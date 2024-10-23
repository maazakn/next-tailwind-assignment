import '@/styles/globals.css';
import Image from 'next/image';
import { goToProduction } from '@/assets';
import localFont from 'next/font/local';
import Header from '@/components/Header';

const pretendardFont = localFont({
  src: './fonts/pretendard.ttf',
  variable: '--font-pretendard',
  fallback: ['system-ui', 'sans-serif'],
});
const interFont = localFont({
  src: './fonts/inter.ttf',
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
});
const helveticaFont = localFont({
  src: './fonts/helvetica.ttf',
  variable: '--font-helvetica',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata = {
  title: 'Nextjs with Tailwind | Maaz',
  description: 'Task Submitted By Maaz Ahmed',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`bg-black text-white ${pretendardFont.variable} ${interFont.variable} ${helveticaFont.variable} antialiased`}>
        <main className='h-dvh w-full relative overflow-hidden flex flex-col'>
          <Header />
          <section className='flex-1 overflow-auto'>{children}</section>

          <Image
            className='fixed top-1/3 right-8 cursor-pointer lg:inline hidden'
            src={goToProduction}
            alt='goToProduction'
            height={90}
            width={90}
          />
        </main>
      </body>
    </html>
  );
}
