import type { Vehicle } from '@xedan/shared';
import { ArrowRight, BadgeCheck, Fuel, Gauge, MapPin, Settings, Users } from 'lucide-react';
import { formatPrice, statusLabel } from '../utils';

type VehicleCardProps = {
  vehicle: Vehicle;
  compact?: boolean;
};

export function VehicleCard({ vehicle, compact = false }: VehicleCardProps) {
  return (
    <article className="group overflow-hidden rounded-md border border-line bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <a href={`/vehicles/${vehicle.slug}`}>
        <div
          className="relative aspect-[16/10] bg-cover bg-center"
          style={{ backgroundImage: `url(${vehicle.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
          <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
            <span className="rounded-md bg-white/95 px-3 py-2 text-xs font-black text-ink">
              <BadgeCheck aria-hidden="true" className="mr-1 inline" size={14} strokeWidth={2.5} />
              {statusLabel(vehicle.status)}
            </span>
            <span className="rounded-md bg-mint px-3 py-2 text-xs font-black text-white">
              {vehicle.inspection.score}/100
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-bold uppercase tracking-wide text-white/80">
              {vehicle.location}
            </p>
            <h3 className="mt-1 text-xl font-black text-white">{vehicle.name}</h3>
          </div>
        </div>
      </a>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">
              <MapPin aria-hidden="true" className="mr-1 inline" size={14} strokeWidth={2.3} />
              {vehicle.year} - {vehicle.mileage}
            </p>
            <p className="mt-2 text-2xl font-black text-mint">
              {formatPrice(vehicle.price)}
            </p>
          </div>
          <span className="rounded-md bg-sky px-3 py-2 text-xs font-bold text-ink">
            {vehicle.inspection.result}
          </span>
        </div>

        {!compact && (
          <p className="mt-4 text-sm leading-6 text-slate-600">{vehicle.summary}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { label: vehicle.transmission, icon: Settings },
            { label: vehicle.fuel, icon: Fuel },
            { label: `${vehicle.seats} cho`, icon: Users },
          ].map(({ label, icon: Icon }) => (
            <span
              className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-xs font-bold text-ink"
              key={label}
            >
              <Icon aria-hidden="true" size={14} strokeWidth={2.4} />
              {label}
            </span>
          ))}
        </div>

        <a
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-bold text-white transition group-hover:bg-mint"
          href={`/vehicles/${vehicle.slug}`}
        >
          <Gauge aria-hidden="true" size={17} strokeWidth={2.5} />
          Xem ho so xe
          <ArrowRight aria-hidden="true" size={17} strokeWidth={2.5} />
        </a>
      </div>
    </article>
  );
}
