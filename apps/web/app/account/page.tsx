import { findVehicleBySlug } from '@xedan/shared';
import {
  ArrowRight,
  Bell,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Heart,
  ReceiptText,
} from 'lucide-react';
import Link from 'next/link';
import { AccountPageHeader } from '../components/AccountPageHeader';
import {
  accountNotifications,
  accountProfile,
  appointments,
  transactionStatusLabels,
  transactions,
  userListings,
} from '../data/account';
import { formatPrice } from '../utils';

export default function AccountPage() {
  const nextAppointment = appointments.find((item) => item.status === 'confirmed');
  const activeTransaction = transactions.find((item) => item.status !== 'completed');
  const appointmentVehicle = nextAppointment
    ? findVehicleBySlug(nextAppointment.vehicleSlug)
    : undefined;
  const transactionVehicle = activeTransaction
    ? findVehicleBySlug(activeTransaction.vehicleSlug)
    : undefined;

  const stats = [
    { label: 'Xe đã lưu', value: '3', href: '/account/favorites', icon: Heart },
    {
      label: 'Lịch xem sắp tới',
      value: String(appointments.filter((item) => item.status === 'confirmed').length),
      href: '/account/appointments',
      icon: CalendarDays,
    },
    {
      label: 'Xe đang bán',
      value: String(userListings.length),
      href: '/account/vehicles',
      icon: CarFront,
    },
    {
      label: 'Thông báo mới',
      value: String(accountNotifications.filter((item) => item.unread).length),
      href: '/account/notifications',
      icon: Bell,
    },
  ];

  return (
    <div>
      <AccountPageHeader
        description={`Chào ${accountProfile.fullName}. Đây là các việc đang cần bạn theo dõi.`}
        title="Tổng quan"
      />

      <section className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, href, icon: Icon }) => (
          <Link
            className="group rounded-lg border border-line bg-white p-4 transition hover:border-mint"
            href={href}
            key={label}
          >
            <div className="flex items-center justify-between">
              <Icon aria-hidden="true" className="text-mint" size={19} />
              <ArrowRight
                aria-hidden="true"
                className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-mint"
                size={17}
              />
            </div>
            <p className="mt-5 text-2xl font-extrabold text-ink">{value}</p>
            <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
          </Link>
        ))}
      </section>

      <section className="mt-8 grid gap-5 xl:grid-cols-2">
        <div className="rounded-lg border border-line bg-white p-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-extrabold text-ink">Lịch xem gần nhất</h2>
            <CalendarDays aria-hidden="true" className="text-mint" size={20} />
          </div>
          {nextAppointment && appointmentVehicle ? (
            <div className="mt-5">
              <p className="text-lg font-extrabold text-ink">{appointmentVehicle.name}</p>
              <p className="mt-2 text-sm text-slate-600">{nextAppointment.scheduledAt}</p>
              <p className="mt-1 text-sm text-slate-500">{nextAppointment.location}</p>
              <Link
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-mint"
                href="/account/appointments"
              >
                Xem lịch hẹn <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          ) : (
            <p className="mt-5 text-sm text-slate-500">Bạn chưa có lịch xem xe.</p>
          )}
        </div>

        <div className="rounded-lg border border-line bg-white p-5">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-extrabold text-ink">Giao dịch đang xử lý</h2>
            <ReceiptText aria-hidden="true" className="text-mint" size={20} />
          </div>
          {activeTransaction && transactionVehicle ? (
            <div className="mt-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-extrabold text-ink">{transactionVehicle.name}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {formatPrice(activeTransaction.amount)}
                  </p>
                </div>
                <span className="rounded-md bg-leaf px-2.5 py-1.5 text-xs font-bold text-mint">
                  {transactionStatusLabels[activeTransaction.status]}
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-mint"
                  style={{ width: `${activeTransaction.progress}%` }}
                />
              </div>
              <Link
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-mint"
                href={`/transactions/${activeTransaction.id}`}
              >
                Xem tiến độ <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          ) : (
            <p className="mt-5 text-sm text-slate-500">Không có giao dịch đang xử lý.</p>
          )}
        </div>
      </section>

      <section className="mt-8 rounded-lg bg-sky p-5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex gap-3">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-mint" size={20} />
            <div>
              <h2 className="font-extrabold text-ink">Hồ sơ đã xác thực</h2>
              <p className="mt-1 text-sm text-slate-600">
                Số điện thoại và danh tính của bạn đã sẵn sàng cho giao dịch.
              </p>
            </div>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-lg border border-line bg-white px-4 text-sm font-bold text-ink"
            href="/account/profile"
          >
            Xem hồ sơ
          </Link>
        </div>
      </section>
    </div>
  );
}
