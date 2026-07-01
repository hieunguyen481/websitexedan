import { findVehicleBySlug } from '@xedan/shared';
import { CalendarDays, Clock3, MapPin, MessageCircle, UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AccountPageHeader } from '../../components/AccountPageHeader';
import { appointmentStatusLabels, appointments } from '../../data/account';

export default function AppointmentsPage() {
  return (
    <div>
      <AccountPageHeader
        description="Theo dõi thời gian, địa điểm và tư vấn viên phụ trách từng lịch xem xe."
        title="Lịch xem xe"
      />

      <section className="mt-6 grid gap-4">
        {appointments.map((appointment) => {
          const vehicle = findVehicleBySlug(appointment.vehicleSlug);
          if (!vehicle) return null;

          return (
            <article
              className="grid gap-5 rounded-lg border border-line bg-white p-4 sm:grid-cols-[150px_1fr_auto] sm:items-center"
              key={appointment.id}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
                <Image
                  alt={vehicle.name}
                  className="object-cover"
                  fill
                  sizes="150px"
                  src={vehicle.imageUrl}
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-leaf px-2.5 py-1.5 text-xs font-bold text-mint">
                    {appointmentStatusLabels[appointment.status]}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{appointment.id}</span>
                </div>
                <h2 className="mt-3 text-lg font-extrabold text-ink">{vehicle.name}</h2>
                <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                  <p className="flex items-center gap-2">
                    <Clock3 aria-hidden="true" className="text-mint" size={16} />
                    {appointment.scheduledAt}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin aria-hidden="true" className="text-mint" size={16} />
                    {appointment.location}
                  </p>
                  <p className="flex items-center gap-2 sm:col-span-2">
                    <UserRound aria-hidden="true" className="text-mint" size={16} />
                    Tư vấn viên: {appointment.advisor}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:flex-col">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-ink px-4 text-sm font-bold text-white"
                  href={`/vehicles/${vehicle.slug}`}
                >
                  Xem xe
                </Link>
                <Link
                  aria-label="Nhắn tư vấn viên"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 text-sm font-bold text-ink"
                  href="/chat"
                >
                  <MessageCircle aria-hidden="true" size={16} />
                  Nhắn tin
                </Link>
              </div>
            </article>
          );
        })}
      </section>

      <Link
        className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white"
        href="/vehicles"
      >
        <CalendarDays aria-hidden="true" size={17} />
        Đặt thêm lịch xem
      </Link>
    </div>
  );
}
