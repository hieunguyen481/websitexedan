import { getVehicleBrands, getVehiclesByBrand } from '@xedan/shared';
import { ArrowRight, CarFront, Search } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { VehicleCard } from '../components/VehicleCard';

export const metadata: Metadata = {
  title: 'Hãng xe',
  description: 'Khám phá xe cũ đã kiểm định theo hãng xe phổ biến.',
};

export default function BrandsPage() {
  const brands = getVehicleBrands();

  return (
    <main>
      <SiteHeader />

      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14">
          <p className="text-sm font-bold text-mint">Duyệt theo hãng</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Bắt đầu từ thương hiệu bạn đã tin dùng.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            So sánh lựa chọn theo hãng, kiểu dáng và mức giá trước khi mở hồ
            sơ kiểm định chi tiết.
          </p>
          <form action="/vehicles" className="mt-7 flex max-w-xl gap-2">
            <label className="relative flex-1">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                aria-label="Tìm hãng xe"
                className="h-12 w-full rounded-lg border border-line bg-white pl-11 pr-4 text-sm outline-none focus:border-mint"
                name="q"
                placeholder="Toyota, Honda, VinFast..."
              />
            </label>
            <button className="h-12 rounded-lg bg-mint px-5 text-sm font-bold text-white hover:bg-ink">
              Tìm xe
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand) => {
              const brandVehicles = getVehiclesByBrand(brand);

              return (
                <Link
                  className="group flex items-center gap-4 rounded-lg border border-line p-4 transition hover:border-mint hover:shadow-soft"
                  href={`/vehicles?q=${encodeURIComponent(brand)}`}
                  id={brand}
                  key={brand}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-canvas text-mint">
                    <CarFront aria-hidden="true" size={21} />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-extrabold text-ink">{brand}</span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {brandVehicles.length} xe
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-auto hidden text-slate-400 transition group-hover:translate-x-1 group-hover:text-mint sm:block"
                    size={17}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-mint">Gợi ý nổi bật</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink">
                Một lựa chọn từ mỗi hãng
              </h2>
            </div>
            <Link className="hidden text-sm font-bold text-mint sm:block" href="/vehicles">
              Xem tất cả xe
            </Link>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {brands.slice(0, 6).map((brand) => {
              const vehicle = getVehiclesByBrand(brand)[0];
              return vehicle ? <VehicleCard compact key={vehicle.id} vehicle={vehicle} /> : null;
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
