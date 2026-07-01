import { getVehicleBrands, vehicles } from '@xedan/shared';
import { BadgeCheck, Gauge, Headphones } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { VehicleExplorer } from '../components/VehicleExplorer';

export const metadata: Metadata = {
  title: 'Tìm xe cũ đã kiểm định',
  description: 'Tìm và lọc xe cũ theo hãng, giá, nhiên liệu và điểm kiểm định.',
};

type VehiclesPageProps = {
  searchParams: Promise<{
    q?: string;
    price?: string;
    style?: string;
  }>;
};

export default async function VehiclesPage({ searchParams }: VehiclesPageProps) {
  const params = await searchParams;
  const availableCount = vehicles.filter((vehicle) => vehicle.status === 'available').length;
  const averageScore = Math.round(
    vehicles.reduce((total, vehicle) => total + vehicle.inspection.score, 0) /
      vehicles.length,
  );

  return (
    <main>
      <SiteHeader />

      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:py-12">
          <p className="text-sm font-bold text-mint">{availableCount} xe đang sẵn sàng</p>
          <div className="mt-2 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
                Tìm chiếc xe hợp nhu cầu, không chỉ hợp giá.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Lọc theo thông số quan trọng, sau đó mở hồ sơ để xem kết quả
                kiểm định và hạng mục cần lưu ý.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-2">
                <Gauge aria-hidden="true" className="text-mint" size={18} />
                Điểm trung bình {averageScore}/100
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck aria-hidden="true" className="text-mint" size={18} />
                Hồ sơ rõ ràng
              </span>
              <span className="flex items-center gap-2">
                <Headphones aria-hidden="true" className="text-mint" size={18} />
                Có tư vấn đi cùng
              </span>
            </div>
          </div>
        </div>
      </section>

      <VehicleExplorer
        brands={getVehicleBrands()}
        initialPrice={params.price}
        initialQuery={params.q}
        initialStyle={params.style}
        vehicles={vehicles}
      />

      <SiteFooter />
    </main>
  );
}
