'use client';

import { CalendarCheck, CheckCircle2, Clock3, MapPin, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function BookingForm({ vehicleName }: { vehicleName: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-mint/20 bg-leaf p-6">
        <CheckCircle2 aria-hidden="true" className="text-mint" size={28} />
        <h2 className="mt-4 text-xl font-extrabold text-ink">Đã gửi yêu cầu đặt lịch</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Tư vấn viên sẽ gọi xác nhận lịch xem {vehicleName} trong thời gian sớm nhất.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          <span className="flex items-center gap-2">
            <CalendarCheck aria-hidden="true" className="text-slate-400" size={16} />
            Ngày xem xe
          </span>
          <input
            className="h-12 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
            min="2026-07-02"
            required
            type="date"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          <span className="flex items-center gap-2">
            <Clock3 aria-hidden="true" className="text-slate-400" size={16} />
            Khung giờ
          </span>
          <select
            className="h-12 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
            required
          >
            <option value="">Chọn khung giờ</option>
            <option>08:00 - 10:00</option>
            <option>10:00 - 12:00</option>
            <option>14:00 - 16:00</option>
            <option>16:00 - 18:00</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-ink">
        <span className="flex items-center gap-2">
          <MapPin aria-hidden="true" className="text-slate-400" size={16} />
          Khu vực thuận tiện
        </span>
        <select
          className="h-12 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
          required
        >
          <option>Điểm trưng bày của Xe Dân Với Dân</option>
          <option>Đề nghị địa điểm khác</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-ink">
        Ghi chú cho tư vấn viên
        <textarea
          className="min-h-24 rounded-lg border border-line bg-canvas px-4 py-3 font-normal outline-none focus:border-mint"
          placeholder="Nội dung cần kiểm tra kỹ, số người đi cùng..."
        />
      </label>
      <label className="flex items-start gap-3 text-xs leading-5 text-slate-500">
        <input className="mt-1 h-4 w-4 accent-mint" required type="checkbox" />
        Tôi đồng ý để tư vấn viên liên hệ xác nhận thời gian và địa điểm.
      </label>
      <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white transition hover:bg-ink">
        <Send aria-hidden="true" size={17} />
        Gửi yêu cầu đặt lịch
      </button>
    </form>
  );
}
