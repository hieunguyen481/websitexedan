import { featuredVehicles, processSteps, trustStats, vehicles } from '@xedan/shared';
import { SiteHeader } from './components/SiteHeader';
import { VehicleCard } from './components/VehicleCard';
import { formatPrice } from './utils';

const heroVehicle = featuredVehicles[1];
const recentVehicle = vehicles[3];

export default function HomePage() {
  return (
    <main>
      <SiteHeader tone="transparent" />

      <section className="relative overflow-hidden border-b border-line bg-[#f2f8f7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div>
            <p className="inline-flex rounded-md border border-mint/20 bg-white px-3 py-2 text-sm font-black text-mint shadow-sm">
              San xe cu co kiem dinh va dieu phoi giao dich
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.03] text-ink md:text-7xl">
              Mua xe cu nhu co mot nguoi trong nghe di cung.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Xe Dan Voi Dan gom xe da kiem dinh, ho so phap ly ro rang, lich
              xem xe minh bach va doi ngu tu van theo sat tu luc chon xe den
              ban giao.
            </p>

            <div className="mt-8 grid gap-3 rounded-md border border-line bg-white p-3 shadow-soft md:grid-cols-[1fr_1fr_auto]">
              <input
                className="rounded-md border border-line bg-[#fbfdfd] px-4 py-3 text-sm outline-none focus:border-mint"
                placeholder="Hang xe, dong xe"
              />
              <input
                className="rounded-md border border-line bg-[#fbfdfd] px-4 py-3 text-sm outline-none focus:border-mint"
                placeholder="Khoang gia mong muon"
              />
              <a
                className="rounded-md bg-mint px-6 py-3 text-center text-sm font-black text-white transition hover:bg-ink"
                href="/vehicles"
              >
                Tim xe phu hop
              </a>
            </div>

            <div className="mt-7 grid max-w-2xl grid-cols-3 gap-3">
              {trustStats.map((item) => (
                <div className="rounded-md border border-line bg-white p-4" key={item.label}>
                  <p className="text-2xl font-black text-ink">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="min-h-[540px] rounded-md bg-cover bg-center shadow-soft"
              style={{ backgroundImage: `url(${heroVehicle.imageUrl})` }}
            >
              <div className="flex h-full min-h-[540px] flex-col justify-between rounded-md bg-gradient-to-t from-ink/75 via-ink/10 to-transparent p-5">
                <div className="flex justify-end">
                  <span className="rounded-md bg-white px-3 py-2 text-sm font-black text-ink">
                    Kiem dinh {heroVehicle.inspection.score}/100
                  </span>
                </div>
                <div className="rounded-md bg-white/95 p-5 shadow-soft">
                  <p className="text-sm font-bold text-slate-500">
                    Xe dang duoc quan tam
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-ink">{heroVehicle.name}</h2>
                  <p className="mt-2 text-3xl font-black text-mint">
                    {formatPrice(heroVehicle.price)}
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-xs font-bold text-ink">
                    <span className="rounded-md bg-sky px-3 py-2">{heroVehicle.year}</span>
                    <span className="rounded-md bg-sky px-3 py-2">{heroVehicle.mileage}</span>
                    <span className="rounded-md bg-sky px-3 py-2">{heroVehicle.fuel}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-mint">
              Xe dang ban
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-ink">
              Nhung xe co ho so dep de bat dau xem.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
            Moi xe trong danh sach deu co diem kiem dinh, thong so chinh, trang
            thai giao dich va trang chi tiet de nguoi mua ra quyet dinh nhanh
            hon.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard compact key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            className="rounded-md border border-line bg-white px-5 py-3 text-sm font-black text-ink transition hover:border-mint hover:text-mint"
            href="/vehicles"
          >
            Xem tat ca xe
          </a>
        </div>
      </section>

      <section className="border-y border-line bg-white" id="process">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-mint">
                Quy trinh
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-ink">
                It buoc hon, nhung moi buoc deu co nguoi chiu trach nhiem.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <div className="rounded-md border border-line bg-[#fbfdfd] p-5" key={step.title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sun text-sm font-black text-ink">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-black text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div
          className="min-h-[420px] rounded-md bg-cover bg-center shadow-soft"
          style={{ backgroundImage: `url(${recentVehicle.imageUrl})` }}
        />
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-mint">
            Danh cho nguoi ban
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-ink">
            Ban xe khong can tu dang, tu tra loi, tu xoay ho so.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Ban gui thong tin xe, doi ngu xac nhan lich kiem dinh, chuan hoa
            mo ta va dua tin len san. Khi co khach phu hop, giao dich duoc dieu
            phoi theo tung trang thai.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {['Kiem dinh tai nha', 'Tu van gia ban', 'Ho tro ban giao'].map((item) => (
              <div className="rounded-md border border-line bg-white p-4 text-sm font-black text-ink" key={item}>
                {item}
              </div>
            ))}
          </div>
          <a
            className="mt-7 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-mint"
            href="/sell"
          >
            Dang ky ban xe
          </a>
        </div>
      </section>
    </main>
  );
}
