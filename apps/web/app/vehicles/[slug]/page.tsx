import { findVehicleBySlug, vehicles } from '@xedan/shared';
import {
  ArrowLeft,
  BadgeCheck,
  CalendarCheck,
  CarFront,
  ClipboardCheck,
  FileText,
  Fuel,
  Gauge,
  Handshake,
  MapPin,
  MessageCircle,
  Palette,
  Settings,
  ShieldCheck,
} from 'lucide-react';
import { notFound } from 'next/navigation';
import { SiteHeader } from '../../components/SiteHeader';
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

  const specs = [
    ['Hang xe', vehicle.brand],
    ['Dong xe', vehicle.model],
    ['Nam san xuat', String(vehicle.year)],
    ['So km', vehicle.mileage],
    ['Hop so', vehicle.transmission],
    ['Nhien lieu', vehicle.fuel],
    ['So cho', `${vehicle.seats} cho`],
    ['Mau xe', vehicle.color],
    ['Bien so', vehicle.plateArea],
  ];

  return (
    <main>
      <SiteHeader />

      <section className="border-b border-line bg-[#f2f8f7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_390px]">
          <div>
            <a className="text-sm font-black text-mint" href="/vehicles">
              <ArrowLeft aria-hidden="true" className="mr-2 inline" size={16} strokeWidth={2.5} />
              Quay lai danh sach xe
            </a>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-500">
              <MapPin aria-hidden="true" size={16} strokeWidth={2.4} />
              {vehicle.location} - {statusLabel(vehicle.status)}
            </p>
            <h1 className="mt-3 text-5xl font-black leading-tight text-ink md:text-6xl">
              {vehicle.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              {vehicle.summary}
            </p>
          </div>

          <aside className="h-fit rounded-md border border-line bg-white p-5 shadow-soft lg:sticky lg:top-24">
            <p className="text-sm font-bold text-slate-500">Gia niem yet minh bach</p>
            <p className="mt-2 text-4xl font-black text-mint">
              {formatPrice(vehicle.price)}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-sky p-4">
                <Gauge aria-hidden="true" className="mb-2 text-mint" size={22} strokeWidth={2.5} />
                <p className="text-2xl font-black text-ink">
                  {vehicle.inspection.score}
                </p>
                <p className="mt-1 text-xs font-bold text-slate-500">Diem kiem dinh</p>
              </div>
              <div className="rounded-md bg-sky p-4">
                <CarFront aria-hidden="true" className="mb-2 text-mint" size={22} strokeWidth={2.5} />
                <p className="text-2xl font-black text-ink">{vehicle.year}</p>
                <p className="mt-1 text-xs font-bold text-slate-500">Doi xe</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 text-sm font-black text-white transition hover:bg-ink">
                <CalendarCheck aria-hidden="true" size={17} strokeWidth={2.5} />
                Dat lich xem xe
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-black text-ink transition hover:border-mint hover:text-mint">
                <MessageCircle aria-hidden="true" size={17} strokeWidth={2.5} />
                Chat voi tu van vien
              </button>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Lich xem xe se duoc nhan vien xac nhan truoc khi gui dia diem chi
              tiet.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <div
            className="min-h-[520px] rounded-md bg-cover bg-center shadow-soft"
            style={{ backgroundImage: `url(${vehicle.imageUrl})` }}
          />
          <div className="grid gap-4">
            {[
              { label: vehicle.color, icon: Palette },
              { label: vehicle.fuel, icon: Fuel },
              { label: vehicle.transmission, icon: Settings },
            ].map(({ label, icon: Icon }) => (
              <div className="rounded-md border border-line bg-white p-5" key={label}>
                <Icon aria-hidden="true" className="mb-3 text-mint" size={24} strokeWidth={2.4} />
                <p className="text-sm font-bold text-slate-500">Thong tin nhanh</p>
                <p className="mt-2 text-2xl font-black text-ink">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-14 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-6">
          <section className="rounded-md border border-line bg-white p-6">
            <h2 className="text-2xl font-black text-ink">Diem noi bat</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {vehicle.highlights.map((highlight) => (
                <div
                  className="rounded-md bg-sky p-4 text-sm font-bold leading-6 text-ink"
                  key={highlight}
                >
                  <BadgeCheck aria-hidden="true" className="mb-3 text-mint" size={20} strokeWidth={2.5} />
                  {highlight}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-md border border-line bg-white p-6">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h2 className="inline-flex items-center gap-2 text-2xl font-black text-ink">
                  <ShieldCheck aria-hidden="true" size={25} strokeWidth={2.5} />
                  Bao cao kiem dinh
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Kiem dinh ngay {vehicle.inspection.checkedAt}, ket qua{' '}
                  <span className="font-black text-mint">{vehicle.inspection.result}</span>.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-black text-ink">
                <FileText aria-hidden="true" size={17} strokeWidth={2.5} />
                Xem PDF mau
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              {vehicle.inspection.items.map((item) => (
                <div
                  className="grid gap-3 rounded-md border border-line px-4 py-4 text-sm sm:grid-cols-[1fr_auto] sm:items-center"
                  key={item.label}
                >
                  <span className="font-black text-ink">{item.label}</span>
                  <span className="inline-flex items-center gap-2 rounded-md bg-sky px-3 py-2 text-xs font-black text-mint">
                    <BadgeCheck aria-hidden="true" size={14} strokeWidth={2.5} />
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-md border border-line bg-white p-6">
            <h2 className="inline-flex items-center gap-2 text-2xl font-black text-ink">
              <Handshake aria-hidden="true" size={25} strokeWidth={2.5} />
              Giao dich duoc dieu phoi
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                { label: 'Dat lich xem xe', icon: CalendarCheck },
                { label: 'Dat coc an toan', icon: ShieldCheck },
                { label: 'Ban giao va sang ten', icon: ClipboardCheck },
              ].map(({ label, icon: Icon }) => (
                  <div className="rounded-md border border-line p-4" key={label}>
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-sun text-sm font-black text-ink">
                      <Icon aria-hidden="true" size={18} strokeWidth={2.5} />
                    </span>
                    <p className="mt-4 text-sm font-black text-ink">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Nhan vien cap nhat trang thai va nhac viec cho cac ben.
                    </p>
                  </div>
                ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-md border border-line bg-white p-6">
          <h2 className="inline-flex items-center gap-2 text-xl font-black text-ink">
            <ClipboardCheck aria-hidden="true" size={21} strokeWidth={2.5} />
            Thong so xe
          </h2>
          <dl className="mt-5 grid gap-4 text-sm">
            {specs.map(([label, value]) => (
              <div
                className="flex items-center justify-between gap-4 border-b border-line pb-3"
                key={label}
              >
                <dt className="text-slate-600">{label}</dt>
                <dd className="text-right font-black text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </main>
  );
}
