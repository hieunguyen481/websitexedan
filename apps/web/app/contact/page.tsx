import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <p className="flex items-center gap-2 text-sm font-bold text-mint">
            <MessageCircle aria-hidden="true" size={18} />
            Trung tâm hỗ trợ
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">Liên hệ với chúng tôi</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Chọn kênh thuận tiện hoặc gửi yêu cầu để được hỗ trợ đúng bộ phận.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-xl font-extrabold text-ink">Thông tin liên hệ</h2>
          <div className="mt-5 grid gap-4">
            {[
              { label: 'Hotline', value: '1900 0000', icon: Phone },
              { label: 'Email', value: 'hello@xedanvoidan.vn', icon: Mail },
              { label: 'Địa chỉ', value: 'Hà Nội, Việt Nam', icon: MapPin },
              { label: 'Giờ hỗ trợ', value: '08:00 - 20:00, hằng ngày', icon: Clock3 },
            ].map(({ label, value, icon: Icon }) => (
              <div className="flex gap-4 border-b border-line pb-4" key={label}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-leaf text-mint">
                  <Icon aria-hidden="true" size={19} />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-500">{label}</p>
                  <p className="mt-1 font-bold text-ink">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
