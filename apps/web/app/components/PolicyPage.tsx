import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type PolicySection = {
  title: string;
  paragraphs: string[];
};

type PolicyPageProps = {
  title: string;
  description: string;
  updatedAt: string;
  sections: PolicySection[];
};

export function PolicyPage({
  title,
  description,
  updatedAt,
  sections,
}: PolicyPageProps) {
  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-mint"
            href="/"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Trang chủ
          </Link>
          <p className="mt-6 flex items-center gap-2 text-sm font-bold text-mint">
            <ShieldCheck aria-hidden="true" size={18} />
            Thông tin pháp lý
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
          <p className="mt-4 text-xs font-semibold text-slate-400">Cập nhật: {updatedAt}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-10 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded-lg border border-line bg-canvas p-4 lg:sticky lg:top-28">
          <p className="flex items-center gap-2 text-sm font-extrabold text-ink">
            <FileText aria-hidden="true" size={17} />
            Nội dung
          </p>
          <nav className="mt-4 grid gap-1">
            {sections.map((section, index) => (
              <a
                className="rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-white hover:text-mint"
                href={`#section-${index + 1}`}
                key={section.title}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="min-w-0">
          {sections.map((section, index) => (
            <section
              className="border-b border-line pb-8 [&:not(:first-child)]:pt-8"
              id={`section-${index + 1}`}
              key={section.title}
            >
              <h2 className="text-xl font-extrabold text-ink">{section.title}</h2>
              <div className="mt-4 grid gap-3">
                {section.paragraphs.map((paragraph) => (
                  <p className="text-sm leading-7 text-slate-600" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
