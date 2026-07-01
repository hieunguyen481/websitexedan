import { vehicles } from '@xedan/shared';
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  Camera,
  Check,
  Download,
  FileCheck2,
  Gauge,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';

type InspectionPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ id: vehicle.id }));
}

export default async function InspectionPage({ params }: InspectionPageProps) {
  const { id } = await params;
  const vehicle = vehicles.find((item) => item.id === id);
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
            Hồ sơ xe
          </Link>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-mint">Báo cáo kiểm định</p>
              <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">{vehicle.name}</h1>
              <p className="mt-2 text-sm text-slate-600">
                Kiểm tra ngày {vehicle.inspection.checkedAt}
              </p>
            </div>
            <button className="inline-flex h-11 items-center gap-2 self-start rounded-lg bg-ink px-5 text-sm font-bold text-white sm:self-auto">
              <Download aria-hidden="true" size={17} />
              Tải báo cáo PDF
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_300px]">
        <div>
          <section className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-line bg-white p-5">
              <Gauge aria-hidden="true" className="text-mint" size={22} />
              <p className="mt-4 text-3xl font-extrabold text-ink">{vehicle.inspection.score}/100</p>
              <p className="mt-1 text-sm text-slate-500">Điểm tổng thể</p>
            </div>
            <div className="rounded-lg border border-line bg-white p-5">
              <BadgeCheck aria-hidden="true" className="text-mint" size={22} />
              <p className="mt-4 text-xl font-extrabold text-ink">{vehicle.inspection.result}</p>
              <p className="mt-1 text-sm text-slate-500">Kết luận</p>
            </div>
            <div className="rounded-lg border border-line bg-white p-5">
              <Camera aria-hidden="true" className="text-mint" size={22} />
              <p className="mt-4 text-3xl font-extrabold text-ink">32</p>
              <p className="mt-1 text-sm text-slate-500">Ảnh kiểm định</p>
            </div>
          </section>

          <section className="mt-7 rounded-lg border border-line bg-white p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-ink">
              <Wrench aria-hidden="true" size={21} />
              Kết quả theo hạng mục
            </h2>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {vehicle.inspection.items.map((item) => (
                <div className="flex items-center justify-between gap-4 py-4" key={item.label}>
                  <span className="text-sm font-semibold text-ink">{item.label}</span>
                  <span
                    className={[
                      'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-bold',
                      item.status === 'Tốt'
                        ? 'bg-leaf text-mint'
                        : 'bg-amber-50 text-amber-700',
                    ].join(' ')}
                  >
                    <Check aria-hidden="true" size={14} />
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7 rounded-lg border border-line bg-white p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-ink">
              <FileCheck2 aria-hidden="true" size={21} />
              Phạm vi kiểm tra
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                'Động cơ, hộp số và hệ thống truyền động',
                'Khung gầm, hệ thống treo và phanh',
                'Điện, điều hòa và thiết bị an toàn',
                'Ngoại thất, nội thất và dấu hiệu sửa chữa',
                'Đồng hồ công-tơ-mét và lịch sử bảo dưỡng',
                'Đăng ký, đăng kiểm và quyền sở hữu',
              ].map((item) => (
                <p className="flex items-start gap-2 rounded-lg bg-canvas p-3 text-sm leading-6 text-slate-600" key={item}>
                  <ShieldCheck aria-hidden="true" className="mt-1 shrink-0 text-mint" size={16} />
                  {item}
                </p>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-lg border border-line bg-canvas p-5 lg:sticky lg:top-28">
          <h2 className="font-extrabold text-ink">Thông tin báo cáo</h2>
          <dl className="mt-5 grid gap-4 text-sm">
            <div className="border-b border-line pb-3">
              <dt className="flex items-center gap-2 text-slate-500">
                <CalendarDays aria-hidden="true" size={15} />
                Ngày kiểm định
              </dt>
              <dd className="mt-1 font-bold text-ink">{vehicle.inspection.checkedAt}</dd>
            </div>
            <div className="border-b border-line pb-3">
              <dt className="text-slate-500">Mã báo cáo</dt>
              <dd className="mt-1 font-bold text-ink">KD-{vehicle.id.toUpperCase()}</dd>
            </div>
            <div className="border-b border-line pb-3">
              <dt className="text-slate-500">Kỹ thuật viên</dt>
              <dd className="mt-1 font-bold text-ink">Trần Quốc Minh</dd>
            </div>
          </dl>
          <Link
            className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-mint px-4 text-sm font-bold text-white"
            href={`/vehicles/${vehicle.slug}/book`}
          >
            Đặt lịch xem xe
          </Link>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
