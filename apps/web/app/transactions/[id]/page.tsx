import { findVehicleBySlug } from '@xedan/shared';
import {
  ArrowLeft,
  BadgeCheck,
  CarFront,
  Check,
  Circle,
  FileText,
  HandCoins,
  MessageCircle,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter } from '../../components/SiteFooter';
import { SiteHeader } from '../../components/SiteHeader';
import {
  transactionStatusLabels,
  transactions,
} from '../../data/account';
import { formatPrice } from '../../utils';

type TransactionPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return transactions.map((transaction) => ({ id: transaction.id }));
}

const timelineSteps = [
  { label: 'Đã đặt cọc', description: 'Khoản cọc và hợp đồng đã được xác nhận.', icon: HandCoins },
  { label: 'Lấy xe', description: 'Điều phối viên xác nhận xe với người bán.', icon: CarFront },
  { label: 'Giao xe', description: 'Người mua kiểm tra và ký biên bản nhận xe.', icon: Truck },
  { label: 'Sang tên', description: 'Hồ sơ được nộp tại cơ quan đăng ký.', icon: FileText },
  { label: 'Hoàn tất', description: 'Giải ngân và đóng giao dịch.', icon: BadgeCheck },
];

export default async function TransactionPage({ params }: TransactionPageProps) {
  const { id } = await params;
  const transaction = transactions.find((item) => item.id === id);
  if (!transaction) notFound();

  const vehicle = findVehicleBySlug(transaction.vehicleSlug);
  if (!vehicle) notFound();

  const completedSteps = Math.ceil((transaction.progress / 100) * timelineSteps.length);

  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-mint"
            href="/account/transactions"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Danh sách giao dịch
          </Link>
          <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-mint">{transaction.id}</p>
              <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
                {vehicle.name}
              </h1>
            </div>
            <span className="self-start rounded-md bg-leaf px-3 py-2 text-sm font-bold text-mint sm:self-auto">
              {transactionStatusLabels[transaction.status]}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_320px]">
        <div>
          <section className="rounded-lg border border-line bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-ink">Tiến độ giao dịch</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Cập nhật gần nhất {transaction.updatedAt}
                </p>
              </div>
              <span className="text-2xl font-extrabold text-mint">{transaction.progress}%</span>
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-mint" style={{ width: `${transaction.progress}%` }} />
            </div>
            <ol className="mt-7 grid gap-0">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = index < completedSteps;
                const isCurrent = index === completedSteps - 1 && transaction.progress < 100;

                return (
                  <li className="grid grid-cols-[40px_1fr] gap-4" key={step.label}>
                    <div className="flex flex-col items-center">
                      <span
                        className={[
                          'flex h-9 w-9 items-center justify-center rounded-full',
                          isCompleted ? 'bg-mint text-white' : 'border border-line bg-white text-slate-400',
                        ].join(' ')}
                      >
                        {isCompleted ? <Check aria-hidden="true" size={17} /> : <Circle aria-hidden="true" size={13} />}
                      </span>
                      {index < timelineSteps.length - 1 && (
                        <span className="min-h-10 w-px flex-1 bg-line" />
                      )}
                    </div>
                    <div className="pb-7">
                      <div className="flex items-center gap-2">
                        <Icon aria-hidden="true" className={isCompleted ? 'text-mint' : 'text-slate-400'} size={18} />
                        <h3 className="font-extrabold text-ink">{step.label}</h3>
                        {isCurrent && (
                          <span className="rounded-md bg-amber-50 px-2 py-1 text-[11px] font-bold text-amber-700">
                            Đang xử lý
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          <section className="mt-6 rounded-lg border border-line bg-white p-5 sm:p-6">
            <h2 className="text-xl font-extrabold text-ink">Tài liệu giao dịch</h2>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {['Hợp đồng đặt cọc', 'Biên bản bàn giao xe', 'Hồ sơ sang tên'].map((document) => (
                <button
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-ink"
                  key={document}
                  type="button"
                >
                  <span className="flex items-center gap-2">
                    <FileText aria-hidden="true" className="text-mint" size={17} />
                    {document}
                  </span>
                  <span className="text-xs font-bold text-mint">Xem</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-lg border border-line bg-canvas p-5 lg:sticky lg:top-28">
          <h2 className="font-extrabold text-ink">Tóm tắt giao dịch</h2>
          <dl className="mt-5 grid gap-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="text-slate-500">Giá trị xe</dt>
              <dd className="font-bold text-ink">{formatPrice(transaction.amount)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="text-slate-500">Vai trò</dt>
              <dd className="font-bold text-ink">
                {transaction.role === 'buyer' ? 'Người mua' : 'Người bán'}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="text-slate-500">Trạng thái</dt>
              <dd className="font-bold text-mint">
                {transactionStatusLabels[transaction.status]}
              </dd>
            </div>
          </dl>
          <Link
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-bold text-white"
            href="/chat"
          >
            <MessageCircle aria-hidden="true" size={17} />
            Liên hệ tư vấn viên
          </Link>
          <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500">
            <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-mint" size={15} />
            Mọi cập nhật quan trọng sẽ được gửi qua thông báo và SMS.
          </p>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
