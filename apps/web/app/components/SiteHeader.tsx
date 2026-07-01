import {
  BadgeCheck,
  BatteryCharging,
  CarFront,
  ChevronDown,
  ClipboardCheck,
  LogIn,
  Menu,
  Search,
  UserPlus,
} from 'lucide-react';
import Link from 'next/link';

type SiteHeaderProps = {
  tone?: 'light' | 'transparent';
};

const mainLinks = [
  { label: 'Mua xe', href: '/vehicles', icon: Search },
  { label: 'Bán xe', href: '/sell', icon: ClipboardCheck },
  { label: 'Hãng xe', href: '/brands', icon: CarFront },
  { label: 'Xe điện', href: '/fuel/electric', icon: BatteryCharging },
];

export function SiteHeader({ tone = 'light' }: SiteHeaderProps) {
  return (
    <header
      className={[
        'sticky top-0 z-40 border-b border-line/90 backdrop-blur-xl',
        tone === 'transparent' ? 'bg-white/90' : 'bg-white/95',
      ].join(' ')}
    >
      <div className="hidden border-b border-line/70 bg-canvas md:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-5 text-xs font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <BadgeCheck aria-hidden="true" className="text-mint" size={14} />
            Xe có kiểm định, hồ sơ rõ ràng, giao dịch có điều phối
          </span>
          <div className="flex items-center gap-5">
            <a className="transition hover:text-mint" href="tel:19000000">
              Hotline 1900 0000
            </a>
            <Link className="transition hover:text-mint" href="/auth/register">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-5">
        <Link className="flex min-w-0 items-center gap-2.5" href="/">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mint text-white shadow-sm">
            <CarFront aria-hidden="true" size={22} strokeWidth={2.4} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[15px] font-extrabold text-ink sm:text-base">
              Xe Dân Với Dân
            </span>
            <span className="hidden text-[11px] font-medium text-slate-500 sm:block">
              Kiểm định trước, an tâm sau
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
          {mainLinks.map(({ label, href, icon: Icon }) => (
            <Link
              className="inline-flex h-10 items-center gap-2 rounded-lg px-3.5 text-sm font-semibold text-slate-700 transition hover:bg-canvas hover:text-mint"
              href={href}
              key={href}
            >
              <Icon aria-hidden="true" size={16} strokeWidth={2.2} />
              {label}
            </Link>
          ))}
          <Link
            className="inline-flex h-10 items-center gap-1 rounded-lg px-3.5 text-sm font-semibold text-slate-700 transition hover:bg-canvas hover:text-mint"
            href="/#process"
          >
            Quy trình
            <ChevronDown aria-hidden="true" size={15} />
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            aria-label="Đăng nhập"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-white px-3.5 text-sm font-semibold text-ink transition hover:border-mint hover:text-mint"
            href="/auth/login"
          >
            <LogIn aria-hidden="true" size={16} />
            Đăng nhập
          </Link>
          <Link
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-ink px-4 text-sm font-bold text-white transition hover:bg-mint"
            href="/sell"
          >
            <UserPlus aria-hidden="true" size={16} />
            Đăng bán xe
          </Link>
        </div>

        <details className="group relative md:hidden">
          <summary
            aria-label="Mở menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-line bg-white text-ink [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden="true" size={20} />
          </summary>
          <div className="absolute right-0 top-12 w-[min(320px,calc(100vw-2.5rem))] rounded-lg border border-line bg-white p-3 shadow-lift">
            <nav className="grid gap-1" aria-label="Điều hướng di động">
              {mainLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas"
                  href={href}
                  key={href}
                >
                  <Icon aria-hidden="true" className="text-mint" size={18} />
                  {label}
                </Link>
              ))}
              <div className="my-2 border-t border-line" />
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas"
                href="/auth/login"
              >
                <LogIn aria-hidden="true" className="text-mint" size={18} />
                Đăng nhập
              </Link>
              <Link
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-3 text-sm font-bold text-white"
                href="/sell"
              >
                <UserPlus aria-hidden="true" size={17} />
                Đăng bán xe
              </Link>
            </nav>
          </div>
        </details>
      </div>

    </header>
  );
}
