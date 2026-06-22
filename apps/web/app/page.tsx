import { featuredVehicles, processSteps, trustStats } from '@xedan/shared';

const currencyFormatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

export default function HomePage() {
  return (
    <main>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-mint">
              Xe Dan Voi Dan
            </p>
            <h1 className="text-xl font-bold text-ink">Mua ban xe cu co dieu phoi</h1>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
            <a href="#search">Tim xe</a>
            <a href="#sell">Ban xe</a>
            <a href="#process">Quy trinh</a>
          </nav>
          <a
            className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white"
            href="#sell"
          >
            Dang ban xe
          </a>
        </div>
      </header>

      <section className="bg-sky">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-mint">
              Kiem dinh ro rang, dat coc an toan, ho tro sang ten
            </p>
            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-ink md:text-6xl">
              Tim xe da kiem dinh va giao dich an tam hon.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Website dau tien tap trung vao trai nghiem nguoi mua va nguoi ban:
              loc xe nhanh, xem bao cao kiem dinh, chat tu van, dat lich xem xe va
              theo doi trang thai giao dich.
            </p>
            <form
              className="mt-8 grid gap-3 rounded-md border border-line bg-white p-3 shadow-soft md:grid-cols-[1fr_1fr_auto]"
              id="search"
            >
              <input
                className="rounded-md border border-line px-4 py-3 text-sm outline-none focus:border-mint"
                placeholder="Hang xe, dong xe"
              />
              <input
                className="rounded-md border border-line px-4 py-3 text-sm outline-none focus:border-mint"
                placeholder="Khoang gia mong muon"
              />
              <button className="rounded-md bg-mint px-6 py-3 text-sm font-bold text-white">
                Tim xe
              </button>
            </form>
          </div>
          <div className="rounded-md border border-line bg-white p-4 shadow-soft">
            <div className="aspect-[4/3] rounded-md bg-[linear-gradient(135deg,#ffffff_0%,#eaf6ff_45%,#dff6ef_100%)] p-5">
              <div className="flex h-full flex-col justify-between rounded-md border border-white/80 bg-white/70 p-5">
                <div>
                  <p className="text-sm font-semibold text-mint">Tin dang noi bat</p>
                  <h3 className="mt-2 text-2xl font-bold text-ink">
                    Xe tot duoc xac minh truoc khi len san
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {trustStats.map((item) => (
                    <div key={item.label} className="rounded-md bg-white p-3">
                      <p className="text-xl font-bold text-ink">{item.value}</p>
                      <p className="mt-1 text-xs text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-mint">
              Xe dang ban
            </p>
            <h2 className="mt-2 text-3xl font-bold text-ink">Lua chon phu hop de bat dau</h2>
          </div>
          <a className="hidden text-sm font-bold text-mint md:block" href="#search">
            Xem them
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredVehicles.map((vehicle) => (
            <article
              className="rounded-md border border-line bg-white p-4 shadow-sm"
              key={vehicle.id}
            >
              <div className="aspect-[16/10] rounded-md bg-sky" />
              <div className="mt-4">
                <p className="text-sm text-slate-600">
                  {vehicle.year} - {vehicle.mileage}
                </p>
                <h3 className="mt-1 text-lg font-bold text-ink">{vehicle.name}</h3>
                <p className="mt-2 text-xl font-bold text-mint">
                  {currencyFormatter.format(vehicle.price)}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{vehicle.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white" id="process">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-mint">
            Quy trinh
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ink">Tu dang xe den ban giao</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div className="rounded-md border border-line p-5" key={step.title}>
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-sun text-sm font-bold text-ink">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-2" id="sell">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-mint">
            Danh cho nguoi ban
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ink">Dang ky ban xe trong vai phut</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Dien thong tin xe, chon khung gio kiem dinh, nhan lich hen va theo doi
            trang thai tin dang ngay tren tai khoan ca nhan.
          </p>
        </div>
        <form className="grid gap-3 rounded-md border border-line bg-white p-5 shadow-soft">
          <input className="rounded-md border border-line px-4 py-3 text-sm" placeholder="Ho ten" />
          <input
            className="rounded-md border border-line px-4 py-3 text-sm"
            placeholder="So dien thoai"
          />
          <input
            className="rounded-md border border-line px-4 py-3 text-sm"
            placeholder="Hang xe / doi xe"
          />
          <button className="rounded-md bg-ink px-5 py-3 text-sm font-bold text-white">
            Gui yeu cau
          </button>
        </form>
      </section>
    </main>
  );
}
