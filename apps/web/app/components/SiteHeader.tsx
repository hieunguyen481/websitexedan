'use client';

import {
  BadgeCheck,
  BatteryCharging,
  Bell,
  CarFront,
  ChevronDown,
  CircleUserRound,
  ClipboardCheck,
  Heart,
  LogIn,
  LogOut,
  Menu,
  ReceiptText,
  Search,
  UserPlus,
  UserRound,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProvider';

type SiteHeaderProps = {
  tone?: 'light' | 'transparent';
};

const mainLinks = [
  { label: 'Mua xe', href: '/vehicles', icon: Search },
  { label: 'Bán xe', href: '/sell', icon: ClipboardCheck },
  { label: 'Hãng xe', href: '/brands', icon: CarFront },
  { label: 'Xe điện', href: '/fuel/electric', icon: BatteryCharging },
];

const userLinks = [
  { label: 'Tổng quan tài khoản', href: '/account', icon: CircleUserRound },
  { label: 'Hồ sơ cá nhân', href: '/account/profile', icon: UserRound },
  { label: 'Xe đã lưu', href: '/account/favorites', icon: Heart },
  { label: 'Giao dịch', href: '/account/transactions', icon: ReceiptText },
  { label: 'Thông báo', href: '/account/notifications', icon: Bell },
];

function getInitials(fullName: string) {
  return fullName
    .split(' ')
    .slice(-2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export function SiteHeader({ tone = 'light' }: SiteHeaderProps) {
  const { ready, user, logout } = useAuth();
  const router = useRouter();
  const isLoggedIn = ready && Boolean(user);

  function handleLogout() {
    logout();
    router.push('/');
  }

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
            {isLoggedIn && user ? (
              <Link className="transition hover:text-mint" href="/account">
                Xin chào, {user.fullName}
              </Link>
            ) : (
              <Link className="transition hover:text-mint" href="/auth/register">
                Đăng ký
              </Link>
            )}
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
          {isLoggedIn && user ? (
            <div className="group relative">
              <button
                aria-label="Mở menu tài khoản"
                className="flex h-10 items-center gap-2 rounded-lg border border-line bg-white px-2 text-ink transition hover:border-mint"
                title="Xem tài khoản"
                type="button"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-leaf text-xs font-extrabold text-mint">
                  {getInitials(user.fullName)}
                </span>
                <span className="hidden max-w-28 truncate text-sm font-semibold xl:block">
                  {user.fullName}
                </span>
                <ChevronDown aria-hidden="true" size={15} />
              </button>

              <div className="invisible absolute right-0 top-full w-72 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-lg border border-line bg-white shadow-lift">
                  <div className="border-b border-line bg-canvas p-4">
                    <p className="font-extrabold text-ink">{user.fullName}</p>
                    <p className="mt-1 truncate text-xs text-slate-500">
                      {user.email ?? user.phone ?? 'Tài khoản đã xác thực'}
                    </p>
                  </div>
                  <nav className="grid gap-1 p-2" aria-label="Menu người dùng">
                    {userLinks.map(({ label, href, icon: Icon }) => (
                      <Link
                        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-leaf hover:text-mint"
                        href={href}
                        key={href}
                      >
                        <Icon aria-hidden="true" size={17} />
                        {label}
                      </Link>
                    ))}
                    <div className="my-1 border-t border-line" />
                    <button
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
                      onClick={handleLogout}
                      type="button"
                    >
                      <LogOut aria-hidden="true" size={17} />
                      Đăng xuất
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link
                className="hidden h-10 items-center px-2 text-sm font-semibold text-slate-600 transition hover:text-mint xl:inline-flex"
                href="/auth/register"
              >
                Đăng ký
              </Link>
              <Link
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-white px-3.5 text-sm font-semibold text-ink transition hover:border-mint hover:text-mint"
                href="/auth/login"
              >
                <LogIn aria-hidden="true" size={16} />
                Đăng nhập
              </Link>
            </>
          )}

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

              {isLoggedIn && user ? (
                <>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf text-xs font-extrabold text-mint">
                      {getInitials(user.fullName)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold text-ink">{user.fullName}</span>
                      <span className="block truncate text-xs text-slate-500">
                        {user.email ?? user.phone}
                      </span>
                    </span>
                  </div>
                  {userLinks.map(({ label, href, icon: Icon }) => (
                    <Link
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas"
                      href={href}
                      key={href}
                    >
                      <Icon aria-hidden="true" className="text-mint" size={18} />
                      {label}
                    </Link>
                  ))}
                  <button
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold text-rose-600 hover:bg-rose-50"
                    onClick={handleLogout}
                    type="button"
                  >
                    <LogOut aria-hidden="true" size={18} />
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas"
                    href="/auth/login"
                  >
                    <LogIn aria-hidden="true" className="text-mint" size={18} />
                    Đăng nhập
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-canvas"
                    href="/auth/register"
                  >
                    <UserPlus aria-hidden="true" className="text-mint" size={18} />
                    Đăng ký
                  </Link>
                </>
              )}

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
