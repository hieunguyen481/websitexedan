import { findVehicleBySlug, vehicles } from '@xedan/shared';
import {
  ArrowLeft,
  BadgeCheck,
  CalendarCheck,
  Check,
  ClipboardCheck,
  FileText,
  Fuel,
  Gauge,
  Heart,
  MapPin,
  MessageCircle,
  Palette,
  Settings2,
  ShieldCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import { formatPrice, statusLabel } from '../../utils';

type VehicleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({
  params,
}: VehicleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = findVehicleBySlug(slug);

  if (!vehicle) return {};

  return {
    title: `${vehicle.name} giá ${formatPrice(vehicle.price)}`,
    description: vehicle.summary,
  };
}

export default async function VehicleDetailPage({ params }: VehicleDetailPageProps) {
  const { slug } = await params;
  const vehicle = findVehicleBySlug(slug);

  if (!vehicle) notFound();

  const specs = [
    ['Hãng xe', vehicle.brand],
    ['Dòng xe', vehicle.model],
    ['Năm sản xuất', String(vehicle.year)],
    ['Số km', vehicle.mileage],
    ['Kiểu dáng', vehicle.bodyStyle],
    ['Hộp số', vehicle.transmission],
    ['Nhiên liệu', vehicle.fuel],
    ['Số chỗ', `${vehicle.seats} chỗ`],
    ['Màu xe', vehicle.color],
    ['Biển số', vehicle.plateArea],
  ];

  return (
    <main>
      <SiteHeader />

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-7">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-mint"
            href="/vehicles"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Danh sách xe
          </Link>
          <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-leaf px-2.5 py-1.5 text-mint">
                  <BadgeCheck aria-hidden="true" size={14} />
                  {statusLabel(vehicle.status)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <MapPin aria-hidden="true" size={14} />
                  {vehicle.location}
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
                {vehicle.name}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                {vehicle.summary}
              </p>
            </div>
            <div className="lg:text-right">
              <p className="text-sm font-medium text-slate-500">Giá niêm yết</p>
              <p className="mt-1 text-3xl font-extrabold text-ink sm:text-4xl">
                {formatPrice(vehicle.price)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-7">
          <div className="grid gap-3 lg:grid-cols-[1.5fr_0.5fr]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-200 lg:aspect-auto lg:min-h-[540px]">
              <Image
                alt={vehicle.name}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 75vw"
                src={vehicle.imageUrl}
              />
              <button
                aria-label="Lưu xe"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm hover:text-rose-600"
                type="button"
              >
                <Heart aria-hidden="true" size={19} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
              {[
                { label: 'Điểm kiểm định', value: `${vehicle.inspection.score}/100`, icon: Gauge },
                { label: 'Nhiên liệu', value: vehicle.fuel, icon: Fuel },
                { label: 'Hộp số', value: vehicle.transmission, icon: Settings2 },
              ].map(({ label, value, icon: Icon }) => (
                <div className="flex flex-col justify-center rounded-lg border border-line bg-white p-4 sm:p-5" key={label}>
                  <Icon aria-hidden="true" className="text-mint" size={21} />
                  <p className="mt-4 text-xs font-medium text-slate-500">{label}</p>
                  <p className="mt-1 text-sm font-extrabold text-ink sm:text-lg">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <section>
              <h2 className="text-2xl font-extrabold text-ink">Điểm đáng chú ý</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {vehicle.highlights.map((highlight) => (
                  <div className="flex gap-3 rounded-lg bg-sky p-4" key={highlight}>
                    <Check aria-hidden="true" className="mt-0.5 shrink-0 text-mint" size={18} />
                    <p className="text-sm font-semibold leading-6 text-ink">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 border-t border-line pt-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="flex items-center gap-2 text-sm font-bold text-mint">
                    <ShieldCheck aria-hidden="true" size={18} />
                    Kiểm định độc lập
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-ink">
                    Báo cáo tình trạng xe
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Kiểm tra ngày {vehicle.inspection.checkedAt} · Kết quả{' '}
                    <strong className="text-mint">{vehicle.inspection.result}</strong>
                  </p>
                </div>
                <button
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 text-sm font-bold text-ink hover:border-mint hover:text-mint"
                  type="button"
                >
                  <FileText aria-hidden="true" size={17} />
                  Xem báo cáo PDF
                </button>
              </div>

              <div className="mt-6 divide-y divide-line border-y border-line">
                {vehicle.inspection.items.map((item) => (
                  <div className="flex items-center justify-between gap-4 py-4 text-sm" key={item.label}>
                    <span className="font-semibold text-ink">{item.label}</span>
                    <span
                      className={[
                        'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-bold',
                        item.status === 'Tốt'
                          ? 'bg-leaf text-mint'
                          : 'bg-amber-50 text-amber-700',
                      ].join(' ')}
                    >
                      <BadgeCheck aria-hidden="true" size={14} />
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 border-t border-line pt-10">
              <h2 className="flex items-center gap-2 text-2xl font-extrabold text-ink">
                <ClipboardCheck aria-hidden="true" size={23} />
                Thông số xe
              </h2>
              <dl className="mt-5 grid gap-x-10 sm:grid-cols-2">
                {specs.map(([label, value]) => (
                  <div className="flex items-center justify-between gap-4 border-b border-line py-3.5 text-sm" key={label}>
                    <dt className="text-slate-500">{label}</dt>
                    <dd className="text-right font-bold text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <aside className="h-fit rounded-lg border border-line bg-canvas p-5 lg:sticky lg:top-36">
            <p className="text-sm font-bold text-ink">Bạn quan tâm chiếc xe này?</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Chọn thời gian thuận tiện, tư vấn viên sẽ xác nhận lịch và địa
              điểm xem xe.
            </p>
            <button
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-mint px-4 text-sm font-bold text-white transition hover:bg-ink"
              type="button"
            >
              <CalendarCheck aria-hidden="true" size={18} />
              Đặt lịch xem xe
            </button>
            <button
              className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 text-sm font-bold text-ink transition hover:border-mint hover:text-mint"
              type="button"
            >
              <MessageCircle aria-hidden="true" size={18} />
              Nhắn tư vấn viên
            </button>
            <div className="mt-5 border-t border-line pt-5">
              <p className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Palette aria-hidden="true" size={15} />
                Màu xe: {vehicle.color}
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck aria-hidden="true" size={15} />
                Không thu phí khi đặt lịch xem
              </p>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
