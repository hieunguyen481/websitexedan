'use client';

import { CheckCircle2, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-leaf p-6">
        <CheckCircle2 aria-hidden="true" className="text-mint" size={28} />
        <h2 className="mt-4 text-xl font-extrabold text-ink">Đã nhận yêu cầu hỗ trợ</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Đội ngũ sẽ liên hệ theo thông tin bạn cung cấp trong giờ làm việc.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-4 rounded-lg border border-line bg-white p-5 shadow-sm sm:p-7" onSubmit={handleSubmit}>
      <h2 className="text-xl font-extrabold text-ink">Gửi yêu cầu</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <ContactField label="Họ và tên" placeholder="Nguyễn Văn A" />
        <ContactField label="Số điện thoại" placeholder="09xx xxx xxx" type="tel" />
      </div>
      <label className="grid gap-2 text-sm font-bold text-ink">
        Chủ đề
        <select className="h-11 rounded-lg border border-line bg-canvas px-3 font-normal outline-none focus:border-mint">
          <option>Tư vấn mua xe</option>
          <option>Hỗ trợ bán xe</option>
          <option>Đặt cọc và thanh toán</option>
          <option>Khiếu nại giao dịch</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-ink">
        Nội dung
        <textarea
          className="min-h-28 rounded-lg border border-line bg-canvas px-4 py-3 font-normal outline-none focus:border-mint"
          placeholder="Mô tả điều bạn cần hỗ trợ..."
          required
        />
      </label>
      <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white">
        <Send aria-hidden="true" size={17} />
        Gửi yêu cầu
      </button>
    </form>
  );
}

function ContactField({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink">
      {label}
      <input
        className="h-11 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
        placeholder={placeholder}
        required
        type={type}
      />
    </label>
  );
}
