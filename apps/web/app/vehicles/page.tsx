import { getVehicleBrands, vehicles } from '@xedan/shared';
import { SiteHeader } from '../components/SiteHeader';
import { VehicleCard } from '../components/VehicleCard';

export default function VehiclesPage() {
  const brands = getVehicleBrands();
  const availableCount = vehicles.filter((vehicle) => vehicle.status === 'available').length;
  const averageScore = Math.round(
    vehicles.reduce((total, vehicle) => total + vehicle.inspection.score, 0) /
      vehicles.length,
  );

  return (
    <main>
      <SiteHeader />

      <section className="border-b border-line bg-[#f2f8f7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-mint">
              {availableCount} xe san sang giao dich
            </p>
            <h1 className="mt-3 text-5xl font-black leading-tight text-ink md:text-6xl">
              Tim xe da co nguoi kiem tra giup ban.
            </h1>
          </div>
          <div className="rounded-md border border-line bg-white p-5 shadow-soft">
            <div className="grid gap-3 lg:grid-cols-[1fr_160px_160px_auto]">
              <input
                className="rounded-md border border-line bg-[#fbfdfd] px-4 py-3 text-sm outline-none focus:border-mint"
                placeholder="Tim theo hang, dong xe, khu vuc"
              />
              <select className="rounded-md border border-line bg-[#fbfdfd] px-4 py-3 text-sm outline-none focus:border-mint">
                <option>Hang xe</option>
                {brands.map((brand) => (
                  <option key={brand}>{brand}</option>
                ))}
              </select>
              <select className="rounded-md border border-line bg-[#fbfdfd] px-4 py-3 text-sm outline-none focus:border-mint">
                <option>Khoang gia</option>
                <option>Duoi 500 trieu</option>
                <option>500 - 700 trieu</option>
                <option>Tren 700 trieu</option>
              </select>
              <button className="rounded-md bg-mint px-6 py-3 text-sm font-black text-white transition hover:bg-ink">
                Loc xe
              </button>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              <span className="rounded-md bg-sky px-3 py-2 font-bold text-ink">
                Diem TB {averageScore}/100
              </span>
              <span className="rounded-md bg-sky px-3 py-2 font-bold text-ink">
                Ho so phap ly ro
              </span>
              <span className="rounded-md bg-sky px-3 py-2 font-bold text-ink">
                Co tu van di kem
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-10 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-md border border-line bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-lg font-black text-ink">Loc nhanh</h2>
          <div className="mt-5 grid gap-4">
            {['Chi xe dang ban', 'Kiem dinh dat', 'Co lich xem xe', 'Gia da tham chieu'].map(
              (item, index) => (
                <label
                  className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-700"
                  key={item}
                >
                  {item}
                  <input
                    type="checkbox"
                    defaultChecked={index < 2}
                    className="h-4 w-4 accent-mint"
                  />
                </label>
              ),
            )}
          </div>

          <div className="mt-6 rounded-md bg-ink p-5 text-white">
            <p className="text-sm font-black">Chua biet chon xe nao?</p>
            <p className="mt-2 text-sm leading-6 text-white/75">
              Gui ngan sach va nhu cau, tu van vien se goi lai voi danh sach
              hop ly hon viec tu loc tung tin.
            </p>
            <a
              className="mt-4 inline-flex rounded-md bg-white px-4 py-2 text-sm font-black text-ink"
              href="/sell"
            >
              Nhan tu van
            </a>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-col justify-between gap-3 rounded-md border border-line bg-white p-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-black text-ink">{vehicles.length} xe phu hop</p>
              <p className="mt-1 text-sm text-slate-500">
                Sap xep mac dinh theo xe moi cap nhat va diem kiem dinh.
              </p>
            </div>
            <select className="rounded-md border border-line px-4 py-3 text-sm font-semibold outline-none focus:border-mint">
              <option>Moi cap nhat</option>
              <option>Gia thap den cao</option>
              <option>Diem kiem dinh cao</option>
            </select>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
