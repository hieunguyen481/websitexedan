import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Xe Dân Với Dân | Mua bán xe cũ đã kiểm định',
    template: '%s | Xe Dân Với Dân',
  },
  description:
    'Nền tảng mua bán xe cũ có kiểm định, đặt cọc an toàn và hỗ trợ sang tên.',
  metadataBase: new URL('https://xedanvoidan.vn'),
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
