import { vehicles } from '@xedan/shared';
import { ArrowRight, GitCompareArrows, Search } from 'lucide-react';
import Link from 'next/link';
import { AccountPageHeader } from '../../components/AccountPageHeader';
import { VehicleCard } from '../../components/VehicleCard';

const favoriteVehicles = [vehicles[3], vehicles[6], vehicles[7]];

export default function FavoritesPage() {
  return (
    <div>
      <AccountPageHeader
        description="Danh sách xe bạn đang cân nhắc. Có thể mở hồ sơ hoặc đưa tối đa ba xe vào bảng so sánh."
        title="Xe đã lưu"
      />

      <div className="mt-6 flex flex-col justify-between gap-3 rounded-lg bg-sky p-4 sm:flex-row sm:items-center">
        <p className="text-sm font-semibold text-slate-700">
          Đã chọn {favoriteVehicles.length} xe để theo dõi
        </p>
        <div className="flex gap-2">
          <Link
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-white px-4 text-sm font-bold text-ink"
            href="/vehicles"
          >
            <Search aria-hidden="true" size={16} />
            Tìm thêm xe
          </Link>
          <Link
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-ink px-4 text-sm font-bold text-white"
            href="/compare"
          >
            <GitCompareArrows aria-hidden="true" size={16} />
            So sánh
          </Link>
        </div>
      </div>

      <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {favoriteVehicles.map((vehicle) => (
          <VehicleCard compact key={vehicle.id} vehicle={vehicle} />
        ))}
      </section>

      <Link
        className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-mint"
        href="/search-alerts"
      >
        Tạo thông báo khi có xe tương tự <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </div>
  );
}
