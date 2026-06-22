import { getVehicleBrands, vehicles } from '@xedan/shared';
import { formatPrice, statusLabel } from '../utils';

export default function VehiclesPage() {
  const brands = getVehicleBrands();
  const availableCount = vehicles.filter((vehicle) => vehicle.status === 'available').length;

  return (
    <main>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="/" className="text-lg font-bold text-ink">
            Xe Dan Voi Dan
          </a>
          <nav className="flex items-center gap-5 text-sm font-semibold text-ink">
            <a href="/vehicles">Tim xe</a>
            <a className="rounded-md bg-ink px-4 py-2 text-white" href="/sell">
              Ban xe
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-mint">
            {availableCount} xe san sang giao dich
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-ink md:text-5xl">
            Danh sach xe da kiem dinh, co ho so ro rang.
          </h1>
          <div className="mt-8 grid gap-3 rounded-md border border-line bg-white p-4 shadow-soft lg:grid-cols-[1fr_180px_180px_180px_auto]">
            <input
              className="rounded-md border border-line px-4 py-3 text-sm outline-none focus:border-mint"
              placeholder="Tim theo hang, dong xe"
            />
            <select className="rounded-md border border-line px-4 py-3 text-sm outline-none focus:border-mint">
              <option>Hang xe</option>
              {brands.map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </select>
            <select className="rounded-md border border-line px-4 py-3 text-sm outline-none focus:border-mint">
              <option>Khoang gia</option>
              <option>Duoi 500 trieu</option>
              <option>500 - 700 trieu</option>
              <option>Tren 700 trieu</option>
            </select>
            <select className="rounded-md border border-line px-4 py-3 text-sm outline-none focus:border-mint">
              <option>Nam san xuat</option>
              <option>Tu 2022</option>
              <option>2020 - 2021</option>
              <option>Truoc 2020</option>
            </select>
            <button className="rounded-md bg-mint px-6 py-3 text-sm font-bold text-white">
              Loc xe
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-10 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-md border border-line bg-white p-5">
          <h2 className="text-base font-bold text-ink">Bo loc nhanh</h2>
          <div className="mt-5 grid gap-4">
            <label className="flex items-center justify-between gap-3 text-sm text-slate-700">
              Chi xe dang ban
              <input type="checkbox" defaultChecked className="h-4 w-4 accent-mint" />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm text-slate-700">
              Kiem dinh dat
              <input type="checkbox" defaultChecked className="h-4 w-4 accent-mint" />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm text-slate-700">
              Co lich xem xe
              <input type="checkbox" className="h-4 w-4 accent-mint" />
            </label>
          </div>
          <div className="mt-6 rounded-md bg-sky p-4">
            <p className="text-sm font-bold text-ink">Can tu van nhanh?</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              De lai tieu chi, tu van vien se goi lai voi danh sach xe phu hop.
            </p>
          </div>
        </aside>

        <div className="grid gap-5 md:grid-cols-2">
          {vehicles.map((vehicle) => (
            <article
              className="overflow-hidden rounded-md border border-line bg-white shadow-sm"
              key={vehicle.id}
            >
              <a href={`/vehicles/${vehicle.slug}`}>
                <div
                  className="flex aspect-[16/10] items-start justify-between bg-cover bg-center p-4"
                  style={{ backgroundImage: `url(${vehicle.imageUrl})` }}
                >
                  <span className="rounded-md bg-white/95 px-3 py-2 text-xs font-bold text-ink">
                    {statusLabel(vehicle.status)}
                  </span>
                  <span className="rounded-md bg-mint px-3 py-2 text-xs font-bold text-white">
                    {vehicle.inspection.score}/100
                  </span>
                </div>
              </a>
              <div className="p-5">
                <p className="text-sm text-slate-600">
                  {vehicle.year} - {vehicle.mileage} - {vehicle.location}
                </p>
                <a href={`/vehicles/${vehicle.slug}`}>
                  <h2 className="mt-2 text-xl font-bold text-ink">{vehicle.name}</h2>
                </a>
                <p className="mt-2 text-2xl font-bold text-mint">
                  {formatPrice(vehicle.price)}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{vehicle.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[vehicle.transmission, vehicle.fuel, `${vehicle.seats} cho`].map(
                    (item) => (
                      <span
                        className="rounded-md border border-line px-3 py-2 text-xs font-semibold text-ink"
                        key={item}
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
