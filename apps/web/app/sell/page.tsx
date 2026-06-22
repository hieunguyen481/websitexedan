import { processSteps, vehicles } from '@xedan/shared';
import { SiteHeader } from '../components/SiteHeader';

const previewVehicle = vehicles[4];

export default function SellPage() {
  return (
    <main>
      <SiteHeader />

      <section className="border-b border-line bg-[#f2f8f7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-mint">
              Dang ky ban xe
            </p>
            <h1 className="mt-3 text-5xl font-black leading-tight text-ink md:text-6xl">
              Ban xe co doi ngu kiem dinh, dinh gia va dieu phoi.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Ban khong can tu viet tin, tu sap lich va tu giai thich tung cau
              hoi cua nguoi mua. Gui thong tin, chung toi se goi lai de chot
              lich kiem dinh va phuong an ban phu hop.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {['Phan hoi trong ngay', 'Kiem dinh tai nha', 'Tin dang co bao cao'].map(
                (item) => (
                  <div className="rounded-md border border-line bg-white p-4 text-sm font-black text-ink" key={item}>
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div
            className="min-h-[500px] rounded-md bg-cover bg-center shadow-soft"
            style={{ backgroundImage: `url(${previewVehicle.imageUrl})` }}
          >
            <div className="flex min-h-[500px] items-end rounded-md bg-gradient-to-t from-ink/70 to-transparent p-5">
              <div className="rounded-md bg-white/95 p-5">
                <p className="text-sm font-bold text-slate-500">Tin dang mau</p>
                <h2 className="mt-2 text-2xl font-black text-ink">{previewVehicle.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Anh xe, thong so, diem kiem dinh va ho so phap ly se duoc
                  chuan hoa truoc khi len san.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="h-fit rounded-md border border-line bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-2xl font-black text-ink">Quy trinh ban xe</h2>
          <div className="mt-6 grid gap-4">
            {processSteps.map((step, index) => (
              <div className="flex gap-4" key={step.title}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sun text-sm font-black text-ink">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-black text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <form className="grid gap-5 rounded-md border border-line bg-white p-6 shadow-soft">
          <div>
            <h2 className="text-2xl font-black text-ink">Thong tin nguoi ban</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Thong tin nay dung de nhan vien lien he xac nhan, chua cong khai
              tren website.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-ink">
              Ho ten
              <input
                className="rounded-md border border-line bg-[#fbfdfd] px-4 py-3 font-normal outline-none focus:border-mint"
                placeholder="Nguyen Van A"
              />
            </label>
            <label className="grid gap-2 text-sm font-black text-ink">
              So dien thoai
              <input
                className="rounded-md border border-line bg-[#fbfdfd] px-4 py-3 font-normal outline-none focus:border-mint"
                placeholder="09..."
              />
            </label>
          </div>

          <div className="border-t border-line pt-5">
            <h2 className="text-2xl font-black text-ink">Thong tin xe</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {['Hang xe', 'Dong xe', 'Nam san xuat'].map((label) => (
              <label className="grid gap-2 text-sm font-black text-ink" key={label}>
                {label}
                <input className="rounded-md border border-line bg-[#fbfdfd] px-4 py-3 font-normal outline-none focus:border-mint" />
              </label>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {['So km', 'Gia mong muon', 'Khu vuc xe'].map((label) => (
              <label className="grid gap-2 text-sm font-black text-ink" key={label}>
                {label}
                <input className="rounded-md border border-line bg-[#fbfdfd] px-4 py-3 font-normal outline-none focus:border-mint" />
              </label>
            ))}
          </div>

          <label className="grid gap-2 text-sm font-black text-ink">
            Tinh trang xe va lich ranh
            <textarea
              className="min-h-32 rounded-md border border-line bg-[#fbfdfd] px-4 py-3 font-normal outline-none focus:border-mint"
              placeholder="Xe co lich su bao duong, can luu y gi, khung gio nao tien kiem dinh..."
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-md border border-dashed border-line bg-sky p-5">
              <p className="text-sm font-black text-ink">Anh xe so bo</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Upload anh se duoc noi API o buoc sau. UI hien tai giu cho luong
                dang xe day du.
              </p>
            </div>
            <div className="rounded-md border border-line bg-[#fbfdfd] p-5">
              <p className="text-sm font-black text-ink">Ho so can chuan bi</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Dang ky xe, CCCD, dang kiem va bao duong gan nhat neu co.
              </p>
            </div>
          </div>

          <button className="rounded-md bg-mint px-5 py-4 text-sm font-black text-white transition hover:bg-ink">
            Gui yeu cau ban xe
          </button>
        </form>
      </section>
    </main>
  );
}
