import { findVehicleBySlug } from '@xedan/shared';
import { ArrowRight, CalendarClock, ClipboardCheck, Eye, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AccountPageHeader } from '../../components/AccountPageHeader';
import { listingStatusLabels, userListings } from '../../data/account';

export default function AccountVehiclesPage() {
  return (
    <div>
      <AccountPageHeader
        description="Theo dõi lịch kiểm định, trạng thái tin đăng và việc cần làm cho từng xe."
        title="Xe đang bán"
      />

      <div className="mt-6 flex justify-end">
        <Link
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white"
          href="/sell"
        >
          <Plus aria-hidden="true" size={17} />
          Đăng thêm xe
        </Link>
      </div>

      <section className="mt-4 grid gap-4">
        {userListings.map((listing) => {
          const vehicle = findVehicleBySlug(listing.vehicleSlug);
          if (!vehicle) return null;

          return (
            <article
              className="grid gap-5 rounded-lg border border-line bg-white p-4 md:grid-cols-[180px_1fr_auto] md:items-center"
              key={listing.id}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-100">
                <Image
                  alt={vehicle.name}
                  className="object-cover"
                  fill
                  sizes="180px"
                  src={vehicle.imageUrl}
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-leaf px-2.5 py-1.5 text-xs font-bold text-mint">
                    {listingStatusLabels[listing.status]}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{listing.id}</span>
                </div>
                <h2 className="mt-3 text-lg font-extrabold text-ink">{vehicle.name}</h2>
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  {listing.status === 'scheduled' ? (
                    <CalendarClock aria-hidden="true" className="text-mint" size={17} />
                  ) : (
                    <ClipboardCheck aria-hidden="true" className="text-mint" size={17} />
                  )}
                  {listing.nextAction}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Cập nhật {listing.updatedAt}
                </p>
              </div>
              <div className="flex gap-2 md:flex-col">
                <Link
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-bold text-ink"
                  href={`/vehicles/${vehicle.slug}`}
                >
                  <Eye aria-hidden="true" size={16} />
                  Xem tin
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-bold text-white"
                  href={`/inspection/${vehicle.id}`}
                >
                  Hồ sơ
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
