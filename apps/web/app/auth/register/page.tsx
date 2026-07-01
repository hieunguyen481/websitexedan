import { ArrowRight, BadgeCheck, Phone, User, UserPlus } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
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

          <form
            action="/account"
            className="rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-leaf text-mint">
              <UserPlus aria-hidden="true" size={22} />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold text-ink">Đăng ký</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Chỉ cần thông tin cơ bản để bắt đầu.
            </p>
            <label className="mt-6 grid gap-2 text-sm font-bold text-ink">
              <span className="flex items-center gap-2">
                <User aria-hidden="true" className="text-slate-400" size={16} />
                Họ và tên
              </span>
              <input
                autoComplete="name"
                className="h-12 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
                placeholder="Nguyễn Văn A"
                required
              />
            </label>
            <label className="mt-4 grid gap-2 text-sm font-bold text-ink">
              <span className="flex items-center gap-2">
                <Phone aria-hidden="true" className="text-slate-400" size={16} />
                Số điện thoại
              </span>
              <input
                autoComplete="tel"
                className="h-12 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
                inputMode="tel"
                placeholder="09xx xxx xxx"
                required
                type="tel"
              />
            </label>
            <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-500">
              <input className="mt-1 h-4 w-4 accent-mint" required type="checkbox" />
              Tôi đồng ý với điều khoản sử dụng và chính sách quyền riêng tư.
            </label>
            <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white transition hover:bg-ink">
              Tạo tài khoản
              <ArrowRight aria-hidden="true" size={17} />
            </button>
            <p className="mt-5 text-center text-sm text-slate-500">
              Đã có tài khoản?{' '}
              <Link className="font-bold text-mint hover:underline" href="/auth/login">
                Đăng nhập
              </Link>
            </p>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
