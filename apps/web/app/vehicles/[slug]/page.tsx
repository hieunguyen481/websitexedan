import { findVehicleBySlug, vehicles } from '@xedan/shared';
import { notFound } from 'next/navigation';
import { formatPrice, statusLabel } from '../../utils';

type VehicleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export default async function VehicleDetailPage({ params }: VehicleDetailPageProps) {
  const { slug } = await params;
  const vehicle = findVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <main>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="/" className="text-lg font-bold text-ink">
            Xe Dan Voi Dan
          </a>
          <nav className="flex items-center gap-5 text-sm font-semibold text-ink">
            <a href="/vehicles">Danh sach xe</a>
            <a className="rounded-md bg-ink px-4 py-2 text-white" href="/sell">
              Ban xe
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-sky">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_380px]">
          <div>
            <a className="text-sm font-bold text-mint" href="/vehicles">
              Quay lai danh sach
            </a>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-5xl">
              {vehicle.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
              {vehicle.summary}
            </p>
          </div>
          <aside className="rounded-md border border-line bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold text-slate-600">
              {statusLabel(vehicle.status)}
            </p>
            <p className="mt-2 text-3xl font-bold text-mint">
              {formatPrice(vehicle.price)}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md bg-sky p-3">
                <p className="font-bold text-ink">{vehicle.inspection.score}/100</p>
                <p className="mt-1 text-slate-600">Diem kiem dinh</p>
              </div>
              <div className="rounded-md bg-sky p-3">
                <p className="font-bold text-ink">{vehicle.location}</p>
                <p className="mt-1 text-slate-600">Khu vuc</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              <button className="rounded-md bg-mint px-5 py-3 text-sm font-bold text-white">
                Dat lich xem xe
              </button>
              <button className="rounded-md border border-line px-5 py-3 text-sm font-bold text-ink">
                Chat voi tu van vien
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_360px]">
        <div>
          <div
            className="aspect-[16/9] rounded-md bg-cover bg-center shadow-soft"
            style={{ backgroundImage: `url(${vehicle.imageUrl})` }}
          />

          <div className="mt-8 rounded-md border border-line bg-white p-6">
            <h2 className="text-2xl font-bold text-ink">Diem noi bat</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {vehicle.highlights.map((highlight) => (
                <div className="rounded-md bg-sky p-4 text-sm font-semibold text-ink" key={highlight}>
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-md border border-line bg-white p-6">
            <h2 className="text-2xl font-bold text-ink">Bao cao kiem dinh</h2>
            <p className="mt-2 text-sm text-slate-600">
              Kiem dinh ngay {vehicle.inspection.checkedAt}, ket qua:{' '}
              <span className="font-bold text-mint">{vehicle.inspection.result}</span>
            </p>
            <div className="mt-5 grid gap-3">
              {vehicle.inspection.items.map((item) => (
                <div
                  className="flex items-center justify-between rounded-md border border-line px-4 py-3 text-sm"
                  key={item.label}
                >
                  <span className="font-semibold text-ink">{item.label}</span>
                  <span className="font-bold text-mint">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-md border border-line bg-white p-6">
          <h2 className="text-xl font-bold text-ink">Thong so xe</h2>
          <dl className="mt-5 grid gap-4 text-sm">
            {[
              ['Hang xe', vehicle.brand],
              ['Dong xe', vehicle.model],
              ['Nam san xuat', String(vehicle.year)],
              ['So km', vehicle.mileage],
              ['Hop so', vehicle.transmission],
              ['Nhien lieu', vehicle.fuel],
              ['So cho', `${vehicle.seats} cho`],
              ['Mau xe', vehicle.color],
              ['Bien so', vehicle.plateArea],
            ].map(([label, value]) => (
              <div className="flex items-center justify-between gap-4 border-b border-line pb-3" key={label}>
                <dt className="text-slate-600">{label}</dt>
                <dd className="font-bold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </main>
  );
}
