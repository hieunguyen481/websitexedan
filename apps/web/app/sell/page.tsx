import { processSteps } from '@xedan/shared';

export default function SellPage() {
  return (
    <main>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="/" className="text-lg font-bold text-ink">
            Xe Dan Voi Dan
          </a>
          <nav className="flex items-center gap-5 text-sm font-semibold text-ink">
            <a href="/vehicles">Tim xe</a>
            <a className="rounded-md bg-ink px-4 py-2 text-white" href="/sell">
              Ban xe
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-sky">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-mint">
              Dang ky ban xe
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-ink md:text-5xl">
              Gui thong tin xe, nhan lich kiem dinh va len san minh bach.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Doi ngu se lien he trong gio hanh chinh de xac nhan thong tin,
              chot lich kiem dinh tai nha va tu van muc gia phu hop.
            </p>
            <div className="mt-8 grid gap-3">
              {processSteps.map((step, index) => (
                <div className="flex gap-3 rounded-md border border-line bg-white p-4" key={step.title}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-sun text-sm font-bold text-ink">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="font-bold text-ink">{step.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="grid gap-4 rounded-md border border-line bg-white p-5 shadow-soft">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Ho ten
                <input className="rounded-md border border-line px-4 py-3 font-normal outline-none focus:border-mint" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                So dien thoai
                <input className="rounded-md border border-line px-4 py-3 font-normal outline-none focus:border-mint" />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Hang xe
                <input className="rounded-md border border-line px-4 py-3 font-normal outline-none focus:border-mint" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Dong xe
                <input className="rounded-md border border-line px-4 py-3 font-normal outline-none focus:border-mint" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Nam san xuat
                <input className="rounded-md border border-line px-4 py-3 font-normal outline-none focus:border-mint" />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                So km
                <input className="rounded-md border border-line px-4 py-3 font-normal outline-none focus:border-mint" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Gia mong muon
                <input className="rounded-md border border-line px-4 py-3 font-normal outline-none focus:border-mint" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Khu vuc xe
                <input className="rounded-md border border-line px-4 py-3 font-normal outline-none focus:border-mint" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Ghi chu them
              <textarea
                className="min-h-28 rounded-md border border-line px-4 py-3 font-normal outline-none focus:border-mint"
                placeholder="Tinh trang xe, lich ranh de kiem dinh, thong tin giay to..."
              />
            </label>
            <div className="rounded-md border border-dashed border-line bg-sky p-5">
              <p className="text-sm font-bold text-ink">Anh xe so bo</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Chuc nang upload se ket noi API o buoc tiep theo. Hien tai form nay
                dung de chot UI va luong nhap thong tin.
              </p>
            </div>
            <button className="rounded-md bg-mint px-5 py-3 text-sm font-bold text-white">
              Gui yeu cau ban xe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
