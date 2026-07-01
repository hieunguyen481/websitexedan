import { ArrowRight, BadgeCheck, LockKeyhole, Phone, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Đăng nhập',
  description: 'Đăng nhập để quản lý xe đã lưu, lịch xem và giao dịch.',
};

export default function LoginPage() {
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
              Đăng nhập bằng số điện thoại để tiếp tục xem xe đã lưu, lịch kiểm
              định và tiến độ hồ sơ.
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

          <form
            action="/account"
            className="rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-leaf text-mint">
              <ShieldCheck aria-hidden="true" size={22} />
            </div>
            <h2 className="mt-5 text-2xl font-extrabold text-ink">Đăng nhập</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Mã xác thực sẽ được gửi tới số điện thoại của bạn.
            </p>
            <label className="mt-6 grid gap-2 text-sm font-bold text-ink">
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
            <label className="mt-4 grid gap-2 text-sm font-bold text-ink">
              <span className="flex items-center gap-2">
                <LockKeyhole aria-hidden="true" className="text-slate-400" size={16} />
                Mã OTP
              </span>
              <div className="grid grid-cols-[1fr_auto] gap-2">
                <input
                  autoComplete="one-time-code"
                  className="h-12 min-w-0 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="6 chữ số"
                  required
                />
                <button
                  className="rounded-lg border border-line bg-white px-3 text-xs font-bold text-mint hover:border-mint"
                  type="button"
                >
                  Gửi mã
                </button>
              </div>
            </label>
            <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white transition hover:bg-ink">
              Tiếp tục
              <ArrowRight aria-hidden="true" size={17} />
            </button>
            <p className="mt-5 text-center text-sm text-slate-500">
              Chưa có tài khoản?{' '}
              <Link className="font-bold text-mint hover:underline" href="/auth/register">
                Đăng ký
              </Link>
            </p>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
