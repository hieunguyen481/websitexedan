'use client';

import { BellRing, CheckCircle2, Plus, Trash2 } from 'lucide-react';
import { FormEvent, useState } from 'react';

type Alert = {
  id: number;
  title: string;
  criteria: string;
  active: boolean;
};

const initialAlerts: Alert[] = [
  {
    id: 1,
    title: 'SUV gia đình dưới 700 triệu',
    criteria: 'SUV · Hà Nội · 2020 trở lên · dưới 700 triệu',
    active: true,
  },
  {
    id: 2,
    title: 'Xe điện đi phố',
    criteria: 'Xe điện · dưới 35.000 km · kiểm định từ 90 điểm',
    active: true,
  },
];

export function SearchAlertsManager() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [created, setCreated] = useState(false);

  function addAlert(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAlerts((items) => [
      ...items,
      {
        id: Date.now(),
        title: 'Xe theo nhu cầu mới',
        criteria: 'Toyota · Sedan · dưới 600 triệu · Hà Nội',
        active: true,
      },
    ]);
    setCreated(true);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <section>
        <div className="grid gap-4">
          {alerts.map((alert) => (
            <article className="rounded-lg border border-line bg-white p-5" key={alert.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-leaf text-mint">
                    <BellRing aria-hidden="true" size={19} />
                  </span>
                  <div>
                    <h2 className="font-extrabold text-ink">{alert.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{alert.criteria}</p>
                  </div>
                </div>
                <button
                  aria-label={`Xóa ${alert.title}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-slate-400 hover:text-rose-600"
                  onClick={() => setAlerts((items) => items.filter((item) => item.id !== alert.id))}
                  type="button"
                >
                  <Trash2 aria-hidden="true" size={16} />
                </button>
              </div>
              <label className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm font-semibold text-slate-600">
                Nhận thông báo khi có xe mới
                <input
                  checked={alert.active}
                  className="h-4 w-4 accent-mint"
                  onChange={() =>
                    setAlerts((items) =>
                      items.map((item) =>
                        item.id === alert.id ? { ...item, active: !item.active } : item,
                      ),
                    )
                  }
                  type="checkbox"
                />
              </label>
            </article>
          ))}
        </div>
      </section>

      <form className="h-fit rounded-lg border border-line bg-white p-5" onSubmit={addAlert}>
        <h2 className="text-lg font-extrabold text-ink">Tạo tin tìm kiếm</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Chúng tôi sẽ báo khi có xe mới khớp lựa chọn.
        </p>
        {created && (
          <p className="mt-4 flex items-center gap-2 rounded-lg bg-leaf p-3 text-xs font-bold text-mint">
            <CheckCircle2 aria-hidden="true" size={16} />
            Đã tạo thông báo mới
          </p>
        )}
        <div className="mt-5 grid gap-4">
          <AlertSelect label="Hãng xe" options={['Toyota', 'Honda', 'Mazda', 'VinFast']} />
          <AlertSelect label="Kiểu dáng" options={['Sedan', 'SUV', 'Bán tải']} />
          <AlertSelect label="Khoảng giá" options={['Dưới 500 triệu', '500 - 700 triệu', 'Trên 700 triệu']} />
          <AlertSelect label="Khu vực" options={['Hà Nội', 'TP.HCM', 'Toàn quốc']} />
        </div>
        <button className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-mint px-4 text-sm font-bold text-white">
          <Plus aria-hidden="true" size={17} />
          Tạo thông báo
        </button>
      </form>
    </div>
  );
}

function AlertSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink">
      {label}
      <select className="h-11 rounded-lg border border-line bg-canvas px-3 font-normal outline-none focus:border-mint">
        <option value="">Tất cả</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
