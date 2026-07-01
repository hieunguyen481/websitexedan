import {
  bodyStyleLinks,
  featuredVehicles,
  processSteps,
  trustStats,
  vehicles,
} from '@xedan/shared';
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  CalendarCheck,
  CarFront,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  Headphones,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { VehicleCard } from './components/VehicleCard';

const heroVehicle = vehicles[3];
const sellerVehicle = vehicles[4];
const processIcons = [FileCheck2, ShieldCheck, Sparkles, Handshake];
const statIcons = [ClipboardCheck, CalendarCheck, Headphones];

const discoveryLinks = [
  {
    title: 'Xe gia đình',
    description: 'Sedan và SUV dễ dùng',
    href: '/vehicles?style=suv',
    icon: CarFront,
    tone: 'bg-sky text-sky-700',
  },
  {
    title: 'Xe điện',
    description: 'Điện và hybrid tiết kiệm',
    href: '/fuel/electric',
    icon: BatteryCharging,
    tone: 'bg-leaf text-mint',
  },
  {
    title: 'Xe dưới 500 triệu',
    description: 'Lựa chọn vừa ngân sách',
    href: '/vehicles?price=under-500',
    icon: BadgeCheck,
    tone: 'bg-amber-50 text-amber-700',
  },
];

const statTones = [
  'bg-leaf text-mint',
  'bg-amber-50 text-amber-700',
  'bg-sky text-sky-700',
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader tone="transparent" />

      <section className="relative h-[calc(100svh-176px)] min-h-[500px] max-h-[680px] overflow-hidden bg-ink">
        <Image
          alt="Xe cũ đã kiểm định sẵn sàng giao dịch"
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src={heroVehicle.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 py-8">
          <div className="min-w-0 w-full max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-bold text-mint">
              <ShieldCheck aria-hidden="true" size={18} strokeWidth={2.4} />
              Xe cũ có kiểm định và hồ sơ rõ ràng
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
              Chọn đúng chiếc xe, không phải đoán.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
              Xem điểm kiểm định, tình trạng pháp lý và giá niêm yết trên cùng
              một hồ sơ. Có tư vấn viên theo sát từ lịch xem đến bàn giao.
            </p>

            <form
              action="/vehicles"
              className="mt-7 grid w-full min-w-0 max-w-2xl gap-2 overflow-hidden rounded-lg border border-white/60 bg-white/95 p-2 shadow-lift backdrop-blur sm:grid-cols-[minmax(0,1fr)_150px_auto]"
            >
              <label className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  aria-label="Tìm hãng hoặc dòng xe"
                  className="h-12 w-full rounded-md border-0 bg-canvas pl-10 pr-3 text-sm outline-none"
                  name="q"
                  placeholder="Hãng xe, dòng xe..."
                />
              </label>
              <select
                aria-label="Khoảng giá"
                className="h-12 w-full min-w-0 rounded-md border-0 bg-canvas px-3 text-sm outline-none"
                name="price"
              >
                <option value="">Khoảng giá</option>
                <option value="under-500">Dưới 500 triệu</option>
                <option value="500-700">500 - 700 triệu</option>
                <option value="over-700">Trên 700 triệu</option>
              </select>
              <button className="inline-flex h-12 w-full min-w-0 items-center justify-center gap-2 rounded-md bg-mint px-5 text-sm font-bold text-white transition hover:bg-ink">
                Tìm xe
                <ArrowRight aria-hidden="true" size={17} />
              </button>
            </form>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-600 sm:text-sm">
              <span className="text-slate-500">Tìm nhanh:</span>
              {bodyStyleLinks.slice(0, 4).map((link) => (
                <Link className="transition hover:text-mint" href={link.href} key={link.href}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-5 hidden rounded-md bg-ink/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur sm:block">
          Ảnh hồ sơ minh họa · Giá niêm yết rõ ràng
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {trustStats.map((item, index) => {
            const Icon = statIcons[index] ?? BadgeCheck;

            return (
              <div className="flex items-center gap-4 py-5 sm:px-5 sm:first:pl-0" key={item.label}>
                <span
                  className={[
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
                    statTones[index],
                  ].join(' ')}
                >
                  <Icon aria-hidden="true" size={20} strokeWidth={2.3} />
                </span>
                <div>
                  <p className="text-lg font-extrabold text-ink">{item.value}</p>
                  <p className="text-xs font-medium text-slate-500">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-mint">Khám phá nhanh</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink">
                Bắt đầu theo nhu cầu của bạn
              </h2>
            </div>
            <Link className="inline-flex items-center gap-1 text-sm font-bold text-mint" href="/brands">
              Xem tất cả hãng xe <ChevronRight aria-hidden="true" size={17} />
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {discoveryLinks.map(({ title, description, href, icon: Icon, tone }) => (
              <Link
                className="group flex items-center gap-4 rounded-lg border border-line bg-canvas p-5 transition hover:border-mint hover:bg-white hover:shadow-soft"
                href={href}
                key={href}
              >
                <span
                  className={[
                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg shadow-sm',
                    tone,
                  ].join(' ')}
                >
                  <Icon aria-hidden="true" size={23} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-extrabold text-ink">{title}</span>
                  <span className="mt-1 block text-sm text-slate-500">{description}</span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-mint"
                  size={19}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-mint">Xe vừa kiểm định</p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
                Hồ sơ rõ, xem xe nhanh hơn
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Mỗi xe đều có điểm kiểm định, thông số chính và hạng mục cần
                lưu ý trước khi bạn đặt lịch.
              </p>
            </div>
            <Link
              className="inline-flex h-10 items-center gap-2 self-start rounded-lg border border-line bg-white px-4 text-sm font-bold text-ink transition hover:border-mint hover:text-mint sm:self-auto"
              href="/vehicles"
            >
              Xem toàn bộ xe <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard compact key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" id="process">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold text-mint">Một quy trình, một đầu mối</p>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                Bốn bước để giao dịch bớt rủi ro
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                Từng trạng thái đều có người phụ trách, lịch hẹn rõ ràng và
                thông tin được cập nhật cho cả người mua lẫn người bán.
              </p>
            </div>
            <ol className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {processSteps.map((step, index) => {
                const Icon = processIcons[index] ?? ClipboardCheck;

                return (
                  <li className="flex gap-4 border-t border-line pt-5" key={step.title}>
                    <span
                      className={[
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
                        index % 2 === 0
                          ? 'bg-leaf text-mint'
                          : 'bg-amber-50 text-amber-700',
                      ].join(' ')}
                    >
                      <Icon aria-hidden="true" size={19} />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-400">0{index + 1}</p>
                      <h3 className="mt-1 font-extrabold text-ink">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-sky">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[500px]">
            <Image
              alt="Xe được chuẩn hóa hình ảnh trước khi đăng bán"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={sellerVehicle.imageUrl}
            />
          </div>
          <div className="flex items-center px-5 py-12 lg:px-14">
            <div>
              <p className="text-sm font-bold text-mint">Dành cho người bán</p>
              <h2 className="mt-2 max-w-xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                Đăng xe nhẹ việc, vẫn kiểm soát được tiến độ
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Gửi thông tin một lần. Đội ngũ hỗ trợ kiểm định tại nhà, tư vấn
                giá, chuẩn hóa tin đăng và điều phối khi có người mua phù hợp.
              </p>
              <ul className="mt-6 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-2">
                {[
                  'Phản hồi trong ngày',
                  'Kiểm định tại nhà',
                  'Hỗ trợ hồ sơ sang tên',
                  'Theo dõi từng trạng thái',
                ].map((item) => (
                  <li className="flex items-center gap-2" key={item}>
                    <BadgeCheck aria-hidden="true" className="text-mint" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-ink px-5 text-sm font-bold text-white transition hover:bg-mint"
                href="/sell"
              >
                Đăng ký bán xe <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
