import { BadgeCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LoginForm } from '../../components/AuthForms';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Đăng nhập',
  description: 'Đăng nhập để quản lý xe đã lưu, lịch xem và giao dịch.',
};

type LoginPageProps = {
  searchParams: Promise<{ next?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { next } = await searchParams;

  return (
    <main>
      <SiteHeader />
      <section className="bg-canvas">
        <div className="mx-auto grid min-h-[640px] max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1fr_440px] lg:items-center">
          <div>
            <p className="text-sm font-bold text-mint">Tài khoản của bạn</p>
            <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Mọi lịch hẹn và giao dịch ở cùng một nơi.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Đăng nhập để tiếp tục xem xe đã lưu, lịch kiểm định và tiến độ hồ sơ.
            </p>
            <ul className="mt-7 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-2 lg:max-w-xl">
              {[
                'Lưu và so sánh xe',
                'Theo dõi lịch xem',
                'Nhận cập nhật giao dịch',
                'Trao đổi với tư vấn viên',
              ].map((item) => (
                <li className="flex items-center gap-2" key={item}>
                  <BadgeCheck aria-hidden="true" className="text-mint" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <LoginForm nextPath={next} />
            <p className="mt-5 text-center text-sm text-slate-500">
              Chưa có tài khoản?{' '}
              <Link className="font-bold text-mint hover:underline" href="/auth/register">
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
