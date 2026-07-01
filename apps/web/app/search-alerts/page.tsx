import { BellRing } from 'lucide-react';
import { SearchAlertsManager } from '../components/SearchAlertsManager';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export default function SearchAlertsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <p className="flex items-center gap-2 text-sm font-bold text-mint">
            <BellRing aria-hidden="true" size={18} />
            Tin tìm kiếm
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
            Không cần tìm lại từ đầu
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Lưu nhu cầu và nhận thông báo khi có xe mới phù hợp với ngân sách.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-10">
        <SearchAlertsManager />
      </section>
      <SiteFooter />
    </main>
  );
}
