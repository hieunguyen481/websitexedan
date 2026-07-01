import { findVehicleBySlug } from '@xedan/shared';
import { ArrowRight, ReceiptText } from 'lucide-react';
import Link from 'next/link';
import { AccountPageHeader } from '../../components/AccountPageHeader';
import { transactionStatusLabels, transactions } from '../../data/account';
import { formatPrice } from '../../utils';

export default function AccountTransactionsPage() {
  return (
    <div>
      <AccountPageHeader
        description="Xem tiến độ đặt cọc, giao xe, sang tên và giải ngân của mọi giao dịch."
        title="Giao dịch"
      />

      <section className="mt-6 overflow-hidden rounded-lg border border-line bg-white">
        <div className="hidden grid-cols-[1fr_130px_150px_120px] gap-4 border-b border-line bg-canvas px-5 py-3 text-xs font-bold text-slate-500 md:grid">
          <span>Xe và mã giao dịch</span>
          <span>Vai trò</span>
          <span>Giá trị</span>
          <span>Trạng thái</span>
        </div>
        <div className="divide-y divide-line">
          {transactions.map((transaction) => {
            const vehicle = findVehicleBySlug(transaction.vehicleSlug);
            if (!vehicle) return null;

            return (
              <Link
                className="group grid gap-4 px-5 py-5 transition hover:bg-canvas md:grid-cols-[1fr_130px_150px_120px] md:items-center"
                href={`/transactions/${transaction.id}`}
                key={transaction.id}
              >
                <div>
                  <p className="font-extrabold text-ink">{vehicle.name}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {transaction.id} · {transaction.updatedAt}
                  </p>
                </div>
                <p className="text-sm font-semibold text-slate-600">
                  {transaction.role === 'buyer' ? 'Người mua' : 'Người bán'}
                </p>
                <p className="text-sm font-bold text-ink">{formatPrice(transaction.amount)}</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-leaf px-2.5 py-1.5 text-xs font-bold text-mint">
                    {transactionStatusLabels[transaction.status]}
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-mint"
                    size={16}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="mt-6 flex items-start gap-3 rounded-lg bg-sky p-4 text-sm text-slate-600">
        <ReceiptText aria-hidden="true" className="mt-0.5 shrink-0 text-mint" size={18} />
        Mọi thay đổi về tiền cọc, bàn giao và sang tên đều được ghi lại trong
        chi tiết giao dịch.
      </div>
    </div>
  );
}
