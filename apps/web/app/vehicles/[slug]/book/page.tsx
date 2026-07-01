import { findVehicleBySlug, vehicles } from '@xedan/shared';
import { ArrowLeft, BadgeCheck, Gauge, MapPin, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookingForm } from '../../../components/BookingForm';
import { SiteFooter } from '../../../components/SiteFooter';
import { SiteHeader } from '../../../components/SiteHeader';
import { formatPrice } from '../../../utils';

type BookingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { slug } = await params;
  const vehicle = findVehicleBySlug(slug);
  if (!vehicle) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-mint"
            href={`/vehicles/${vehicle.slug}`}
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Quay lại hồ sơ xe
          </Link>
          <h1 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">
            Đặt lịch xem xe
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Chọn thời gian thuận tiện, chúng tôi sẽ chuẩn bị xe và báo cáo kiểm định.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="h-fit overflow-hidden rounded-lg border border-line bg-white">
          <div className="relative aspect-[16/10] bg-slate-100">
            <Image
              alt={vehicle.name}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              src={vehicle.imageUrl}
            />
          </div>
          <div className="p-5">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-leaf px-2.5 py-1.5 text-xs font-bold text-mint">
              <BadgeCheck aria-hidden="true" size={14} />
              Kiểm định {vehicle.inspection.score}/100
            </span>
            <h2 className="mt-3 text-xl font-extrabold text-ink">{vehicle.name}</h2>
            <p className="mt-2 text-2xl font-extrabold text-ink">{formatPrice(vehicle.price)}</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin aria-hidden="true" className="text-mint" size={16} />
                {vehicle.location}
              </p>
              <p className="flex items-center gap-2">
                <Gauge aria-hidden="true" className="text-mint" size={16} />
                {vehicle.mileage}
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="text-mint" size={16} />
                Không thu phí đặt lịch
              </p>
            </div>
          </div>
        </aside>

        <div className="rounded-lg border border-line bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-xl font-extrabold text-ink">Thời gian xem xe</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Lịch chỉ có hiệu lực sau khi tư vấn viên gọi xác nhận.
          </p>
          <div className="mt-6">
            <BookingForm vehicleName={vehicle.name} />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
