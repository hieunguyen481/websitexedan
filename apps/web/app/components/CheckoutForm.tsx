'use client';

import { CheckCircle2, CreditCard, Landmark, ShieldCheck, Smartphone } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';
import { formatPrice } from '../utils';

type CheckoutFormProps = {
  vehicleName: string;
  vehiclePrice: number;
};

const paymentMethods = [
  { id: 'momo', label: 'MoMo', icon: Smartphone },
  { id: 'vnpay', label: 'VNPAY', icon: CreditCard },
  { id: 'bank', label: 'Chuyển khoản', icon: Landmark },
];

export function CheckoutForm({ vehicleName, vehiclePrice }: CheckoutFormProps) {
  const suggestedDeposit = useMemo(
    () => Math.round((vehiclePrice * 0.1) / 1_000_000) * 1_000_000,
    [vehiclePrice],
  );
  const [method, setMethod] = useState('momo');
  const [completed, setCompleted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCompleted(true);
  }

  if (completed) {
    return (
      <div className="rounded-lg border border-mint/20 bg-leaf p-6">
        <CheckCircle2 aria-hidden="true" className="text-mint" size={30} />
        <h2 className="mt-4 text-xl font-extrabold text-ink">Đã tạo yêu cầu đặt cọc</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Yêu cầu cho {vehicleName} đã được ghi nhận. Tư vấn viên sẽ xác nhận
          và gửi hướng dẫn thanh toán bảo mật.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <section>
        <h2 className="font-extrabold text-ink">Số tiền đặt cọc</h2>
        <div className="mt-4 rounded-lg bg-sky p-5">
          <p className="text-sm text-slate-500">Mức đề xuất 10% giá xe</p>
          <p className="mt-2 text-3xl font-extrabold text-ink">
            {formatPrice(suggestedDeposit)}
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Khoản tiền được ghi nhận riêng cho giao dịch và đối soát trước khi giải ngân.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-extrabold text-ink">Phương thức thanh toán</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {paymentMethods.map(({ id, label, icon: Icon }) => (
            <label
              className={[
                'flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition',
                method === id ? 'border-mint bg-leaf/40' : 'border-line bg-white',
              ].join(' ')}
              key={id}
            >
              <input
                checked={method === id}
                className="sr-only"
                name="payment"
                onChange={() => setMethod(id)}
                type="radio"
                value={id}
              />
              <Icon aria-hidden="true" className="text-mint" size={20} />
              <span className="text-sm font-bold text-ink">{label}</span>
            </label>
          ))}
        </div>
      </section>

      <label className="flex items-start gap-3 text-xs leading-5 text-slate-500">
        <input className="mt-1 h-4 w-4 accent-mint" required type="checkbox" />
        Tôi đã đọc điều khoản đặt cọc và đồng ý xác nhận giao dịch bằng OTP.
      </label>

      <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white transition hover:bg-ink">
        <ShieldCheck aria-hidden="true" size={18} />
        Tiếp tục thanh toán
      </button>
    </form>
  );
}
