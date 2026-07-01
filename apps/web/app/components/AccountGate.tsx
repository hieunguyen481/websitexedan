'use client';

import { LoaderCircle, LockKeyhole } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { useAuth } from './AuthProvider';

export function AccountGate({ children }: { children: ReactNode }) {
  const { ready, user } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (ready && !user) {
      window.location.replace(`/auth/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [pathname, ready, user]);

  if (!ready) {
    return (
      <div className="flex min-h-72 items-center justify-center text-slate-500">
        <LoaderCircle aria-hidden="true" className="animate-spin" size={24} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center text-center">
        <LockKeyhole aria-hidden="true" className="text-mint" size={28} />
        <p className="mt-3 text-sm font-bold text-ink">Đang chuyển tới trang đăng nhập...</p>
      </div>
    );
  }

  return children;
}
