import type { ReactNode } from 'react';
import { AccountGate } from '../components/AccountGate';
import { AccountNav } from '../components/AccountNav';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <SiteHeader />
      <AccountGate>
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[210px_1fr] lg:gap-9 lg:py-10">
          <AccountNav />
          <div className="min-w-0">{children}</div>
        </div>
      </AccountGate>
      <SiteFooter />
    </main>
  );
}
