import { MessageCircle } from 'lucide-react';
import { ChatPanel } from '../components/ChatPanel';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export default function ChatPage() {
  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <p className="flex items-center gap-2 text-sm font-bold text-mint">
            <MessageCircle aria-hidden="true" size={18} />
            Hỗ trợ trực tuyến
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-ink">Trao đổi với tư vấn viên</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-8">
        <ChatPanel />
      </section>
      <SiteFooter />
    </main>
  );
}
