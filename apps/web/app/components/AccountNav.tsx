'use client';

import {
  Bell,
  CalendarDays,
  CarFront,
  Heart,
  LayoutDashboard,
  ReceiptText,
  UserRound,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const accountLinks = [
  { label: 'Tổng quan', href: '/account', icon: LayoutDashboard },
  { label: 'Xe đã lưu', href: '/account/favorites', icon: Heart },
  { label: 'Lịch xem xe', href: '/account/appointments', icon: CalendarDays },
  { label: 'Xe đang bán', href: '/account/vehicles', icon: CarFront },
  { label: 'Giao dịch', href: '/account/transactions', icon: ReceiptText },
  { label: 'Thông báo', href: '/account/notifications', icon: Bell },
  { label: 'Hồ sơ', href: '/account/profile', icon: UserRound },
];

export function AccountNav() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden lg:block">
        <nav
          aria-label="Điều hướng tài khoản"
          className="sticky top-28 grid gap-1 rounded-lg border border-line bg-white p-2"
        >
          {accountLinks.map(({ label, href, icon: Icon }) => {
            const isActive =
              href === '/account' ? pathname === href : pathname.startsWith(href);

            return (
              <Link
                className={[
                  'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold transition',
                  isActive
                    ? 'bg-leaf text-mint'
                    : 'text-slate-600 hover:bg-canvas hover:text-ink',
                ].join(' ')}
                href={href}
                key={href}
              >
                <Icon aria-hidden="true" size={17} />
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <nav
        aria-label="Điều hướng tài khoản di động"
        className="flex gap-1 overflow-x-auto border-b border-line pb-3 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {accountLinks.map(({ label, href, icon: Icon }) => {
          const isActive =
            href === '/account' ? pathname === href : pathname.startsWith(href);

          return (
            <Link
              className={[
                'inline-flex min-w-fit items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold',
                isActive ? 'bg-leaf text-mint' : 'bg-white text-slate-600',
              ].join(' ')}
              href={href}
              key={href}
            >
              <Icon aria-hidden="true" size={15} />
              {label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
