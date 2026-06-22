import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Xe Dan Voi Dan',
  description:
    'Nen tang mua ban xe cu co kiem dinh, dat coc an toan va ho tro sang ten.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
