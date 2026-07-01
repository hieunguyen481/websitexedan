import { vehicles } from '@xedan/shared';
import { ArrowLeft, BadgeCheck, FileCheck2, LockKeyhole, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckoutForm } from '../../components/CheckoutForm';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import { formatPrice } from '../../utils';

type CheckoutPageProps = {
  params: Promise<{ vehicleId: string }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ vehicleId: vehicle.id }));
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { vehicleId } = await params;
  const vehicle = vehicles.find((item) => item.id === vehicleId);
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
            Đặt cọc giữ xe
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Kiểm tra thông tin xe và chọn phương thức thanh toán.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[360px_1fr]">
        <aside className="h-fit rounded-lg border border-line bg-white p-5 lg:sticky lg:top-28">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-100">
            <Image
              alt={vehicle.name}
              className="object-cover"
              fill
              sizes="360px"
              src={vehicle.imageUrl}
            />
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-leaf px-2.5 py-1.5 text-xs font-bold text-mint">
            <BadgeCheck aria-hidden="true" size={14} />
            Kiểm định {vehicle.inspection.score}/100
          </span>
          <h2 className="mt-3 text-xl font-extrabold text-ink">{vehicle.name}</h2>
          <p className="mt-2 text-2xl font-extrabold text-ink">{formatPrice(vehicle.price)}</p>
          <div className="mt-5 grid gap-3 border-t border-line pt-5 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <FileCheck2 aria-hidden="true" className="text-mint" size={17} />
              Hợp đồng điện tử trước thanh toán
            </p>
            <p className="flex items-center gap-2">
              <LockKeyhole aria-hidden="true" className="text-mint" size={17} />
              Xác nhận giao dịch bằng OTP
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck aria-hidden="true" className="text-mint" size={17} />
              Có chính sách hoàn cọc
            </p>
          </div>
        </aside>

        <div className="rounded-lg border border-line bg-white p-5 shadow-sm sm:p-7">
          <CheckoutForm vehicleName={vehicle.name} vehiclePrice={vehicle.price} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
