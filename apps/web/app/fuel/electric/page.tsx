import { getVehiclesByFuelGroup } from '@xedan/shared';
import { BatteryCharging, BatteryFull, BadgeCheck, Leaf, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import { VehicleCard } from '../../components/VehicleCard';

export const metadata: Metadata = {
  title: 'Xe điện và hybrid',
  description: 'Xe điện và hybrid cũ với thông tin pin, sạc và kiểm định rõ ràng.',
};

export default function ElectricVehiclesPage() {
  const electricVehicles = getVehiclesByFuelGroup('electric');

  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line bg-leaf">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:py-14">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold text-mint">
              <BatteryCharging aria-hidden="true" size={18} />
              Xe điện và hybrid
            </p>
            <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Đi xe xanh, hiểu rõ tình trạng pin.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Hồ sơ xe điện bổ sung lịch sử sạc, bảo hành pin và kiểm tra hệ
              thống điện áp cao để bạn dễ cân nhắc chi phí sử dụng lâu dài.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Pin & sạc', icon: BatteryFull },
              { label: 'Chi phí thấp', icon: Leaf },
              { label: 'Kiểm tra riêng', icon: BadgeCheck },
            ].map(({ label, icon: Icon }) => (
              <div className="border-l border-mint/20 pl-4" key={label}>
                <Icon aria-hidden="true" className="text-mint" size={21} />
                <p className="mt-3 text-sm font-bold text-ink">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <p className="flex items-center gap-2 text-sm font-bold text-mint">
            <Zap aria-hidden="true" size={17} />
            {electricVehicles.length} xe phù hợp
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink">
            Xe điện và hybrid đang có
          </h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {electricVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
