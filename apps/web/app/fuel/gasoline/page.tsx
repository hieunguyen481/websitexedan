import { getVehiclesByFuelGroup } from '@xedan/shared';
import { Fuel, Gauge, ShieldCheck, Wrench } from 'lucide-react';
import type { Metadata } from 'next';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import { VehicleCard } from '../../components/VehicleCard';

export const metadata: Metadata = {
  title: 'Xe xăng và dầu',
  description: 'Xe xăng và dầu cũ đã kiểm tra động cơ, hộp số và khung gầm.',
};

export default function GasolineVehiclesPage() {
  const gasolineVehicles = getVehiclesByFuelGroup('gasoline');

  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line bg-sky">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:py-14">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold text-mint">
              <Fuel aria-hidden="true" size={18} />
              Xe xăng và dầu
            </p>
            <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Dễ sử dụng, dễ bảo dưỡng, dễ so sánh.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Kiểm tra kỹ động cơ, hộp số, khung gầm và lịch sử bảo dưỡng để
              bạn nhìn đúng chi phí sở hữu sau khi mua.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Động cơ', icon: Wrench },
              { label: 'Khung gầm', icon: ShieldCheck },
              { label: 'Vận hành', icon: Gauge },
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
          <p className="text-sm font-bold text-mint">{gasolineVehicles.length} xe phù hợp</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink">Xe xăng và dầu đang có</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gasolineVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
