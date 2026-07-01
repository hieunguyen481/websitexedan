import type { Vehicle } from '@xedan/shared';
import {
  ArrowUpRight,
  BadgeCheck,
  Fuel,
  Gauge,
  Heart,
  MapPin,
  Settings2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice, statusLabel } from '../utils';

type VehicleCardProps = {
  vehicle: Vehicle;
  compact?: boolean;
};

export function VehicleCard({ vehicle, compact = false }: VehicleCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-white transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Link href={`/vehicles/${vehicle.slug}`}>
          <Image
            alt={vehicle.name}
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            src={vehicle.imageUrl}
          />
        </Link>
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1.5 text-xs font-bold text-ink shadow-sm backdrop-blur">
            <BadgeCheck aria-hidden="true" className="text-mint" size={14} />
            {statusLabel(vehicle.status)}
          </span>
          <button
            aria-label={`Lưu ${vehicle.name}`}
            className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-sm transition hover:text-rose-600"
            type="button"
          >
            <Heart aria-hidden="true" size={17} />
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <MapPin aria-hidden="true" size={14} />
              {vehicle.location}
            </p>
            <Link href={`/vehicles/${vehicle.slug}`}>
              <h3 className="mt-2 line-clamp-2 text-lg font-extrabold leading-6 text-ink transition group-hover:text-mint">
                {vehicle.name}
              </h3>
            </Link>
          </div>
          <span className="shrink-0 rounded-md bg-leaf px-2.5 py-1.5 text-xs font-extrabold text-mint">
            {vehicle.inspection.score}/100
          </span>
        </div>

        <p className="mt-3 text-2xl font-extrabold text-ink">{formatPrice(vehicle.price)}</p>

        {!compact && (
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
            {vehicle.summary}
          </p>
        )}

        <div className="mt-4 grid grid-cols-3 border-y border-line py-3 text-xs text-slate-600">
          <span className="flex items-center gap-1.5">
            <Gauge aria-hidden="true" size={15} />
            {vehicle.mileage}
          </span>
          <span className="flex items-center justify-center gap-1.5 border-x border-line">
            <Settings2 aria-hidden="true" size={15} />
            {vehicle.transmission}
          </span>
          <span className="flex items-center justify-end gap-1.5">
            <Fuel aria-hidden="true" size={15} />
            {vehicle.fuel}
          </span>
        </div>

        <Link
          className="mt-4 flex items-center justify-between text-sm font-bold text-ink transition group-hover:text-mint"
          href={`/vehicles/${vehicle.slug}`}
        >
          Xem hồ sơ kiểm định
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </article>
  );
}
