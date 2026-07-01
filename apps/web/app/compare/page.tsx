import { vehicles } from '@xedan/shared';
import { ArrowLeft, BadgeCheck, CalendarCheck, Check, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { formatPrice } from '../utils';

const comparedVehicles = [vehicles[3], vehicles[6], vehicles[7]];

export default function ComparePage() {
  const rows = [
    { label: 'Giá bán', values: comparedVehicles.map((vehicle) => formatPrice(vehicle.price)) },
    { label: 'Năm sản xuất', values: comparedVehicles.map((vehicle) => String(vehicle.year)) },
    { label: 'Số km', values: comparedVehicles.map((vehicle) => vehicle.mileage) },
    { label: 'Kiểu dáng', values: comparedVehicles.map((vehicle) => vehicle.bodyStyle) },
    { label: 'Nhiên liệu', values: comparedVehicles.map((vehicle) => vehicle.fuel) },
    { label: 'Hộp số', values: comparedVehicles.map((vehicle) => vehicle.transmission) },
    { label: 'Điểm kiểm định', values: comparedVehicles.map((vehicle) => `${vehicle.inspection.score}/100`) },
    { label: 'Khu vực', values: comparedVehicles.map((vehicle) => vehicle.location) },
  ];

  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-7xl px-5 py-9">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-mint"
            href="/account/favorites"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Xe đã lưu
          </Link>
          <h1 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">So sánh xe</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Đặt các thông số, giá và điểm kiểm định cạnh nhau để chọn xe phù hợp hơn.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="overflow-x-auto">
          <div className="min-w-[860px]">
            <div className="grid grid-cols-[170px_repeat(3,1fr)] gap-px overflow-hidden rounded-lg border border-line bg-line">
              <div className="bg-canvas p-4" />
              {comparedVehicles.map((vehicle) => (
                <article className="bg-white p-4" key={vehicle.id}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-100">
                    <Image
                      alt={vehicle.name}
                      className="object-cover"
                      fill
                      sizes="300px"
                      src={vehicle.imageUrl}
                    />
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-leaf px-2.5 py-1.5 text-xs font-bold text-mint">
                    <BadgeCheck aria-hidden="true" size={14} />
                    {vehicle.inspection.result}
                  </span>
                  <h2 className="mt-3 min-h-12 text-lg font-extrabold text-ink">{vehicle.name}</h2>
                  <Link
                    className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-ink px-3 text-sm font-bold text-white"
                    href={`/vehicles/${vehicle.slug}/book`}
                  >
                    <CalendarCheck aria-hidden="true" size={16} />
                    Đặt lịch xem
                  </Link>
                </article>
              ))}

              {rows.flatMap((row) => [
                <div className="bg-canvas p-4 text-sm font-bold text-slate-600" key={`${row.label}-label`}>
                  {row.label}
                </div>,
                ...row.values.map((value, index) => (
                  <div
                    className="flex items-center bg-white p-4 text-sm font-semibold text-ink"
                    key={`${row.label}-${comparedVehicles[index].id}`}
                  >
                    {value}
                  </div>
                )),
              ])}

              <div className="bg-canvas p-4 text-sm font-bold text-slate-600">Hồ sơ pháp lý</div>
              {comparedVehicles.map((vehicle) => (
                <div className="flex items-center gap-2 bg-white p-4 text-sm font-semibold text-ink" key={`${vehicle.id}-legal`}>
                  <Check aria-hidden="true" className="text-mint" size={17} />
                  Đã đối chiếu
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-lg bg-leaf/50 p-4 text-sm text-slate-600">
          <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-mint" size={18} />
          Bảng so sánh dùng dữ liệu trên hồ sơ gần nhất. Hãy mở báo cáo kiểm định
          để xem từng hạng mục chi tiết.
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
