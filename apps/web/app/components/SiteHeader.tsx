import { CarFront, ClipboardCheck, Search, Send } from 'lucide-react';

type SiteHeaderProps = {
  tone?: 'light' | 'transparent';
};

export function SiteHeader({ tone = 'light' }: SiteHeaderProps) {
  const isTransparent = tone === 'transparent';

  return (
    <header
      className={[
        'sticky top-0 z-20 border-b backdrop-blur',
        isTransparent
          ? 'border-white/20 bg-white/75'
          : 'border-line bg-white/90',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a className="flex items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white">
            <CarFront aria-hidden="true" size={21} strokeWidth={2.6} />
          </span>
          <span>
            <span className="block text-base font-black text-ink">
              Xe Dan Voi Dan
            </span>
            <span className="block text-xs font-semibold text-slate-500">
              Kiem dinh truoc, giao dich sau
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-ink md:flex">
          <a className="inline-flex items-center gap-2 transition hover:text-mint" href="/vehicles">
            <Search aria-hidden="true" size={16} strokeWidth={2.4} />
            Tim xe
          </a>
          <a className="inline-flex items-center gap-2 transition hover:text-mint" href="/sell">
            <ClipboardCheck aria-hidden="true" size={16} strokeWidth={2.4} />
            Ban xe
          </a>
          <a className="inline-flex items-center gap-2 transition hover:text-mint" href="/#process">
            <Send aria-hidden="true" size={16} strokeWidth={2.4} />
            Quy trinh
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden items-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-sm font-bold text-ink transition hover:border-mint md:inline-flex"
            href="/vehicles"
          >
            <Search aria-hidden="true" size={16} strokeWidth={2.4} />
            Xem xe
          </a>
          <a
            className="rounded-md bg-ink px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-mint"
            href="/sell"
          >
            Dang ban xe
          </a>
        </div>
      </div>
    </header>
  );
}
