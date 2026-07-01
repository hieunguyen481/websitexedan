import { BadgeCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RegisterForm } from '../../components/AuthForms';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Đăng ký tài khoản',
  description: 'Tạo tài khoản để lưu xe, đặt lịch xem và theo dõi xe đang bán.',
};

export default function RegisterPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-canvas">
        <div className="mx-auto grid min-h-[640px] max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1fr_440px] lg:items-center">
          <div>
            <p className="text-sm font-bold text-mint">Tạo tài khoản miễn phí</p>
            <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Một tài khoản cho cả mua xe và bán xe.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Lưu lựa chọn đang cân nhắc, đặt lịch xem và theo dõi từng bước
              kiểm định hoặc giao dịch.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink">
              {['Không cần mật khẩu', 'Xác thực bằng OTP', 'Thông tin được bảo vệ'].map(
                (item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <BadgeCheck aria-hidden="true" className="text-mint" size={18} />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div>
            <RegisterForm />
            <p className="mt-5 text-center text-sm text-slate-500">
              Đã có tài khoản?{' '}
              <Link className="font-bold text-mint hover:underline" href="/auth/login">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
