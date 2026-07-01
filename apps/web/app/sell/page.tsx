import { processSteps, vehicles } from '@xedan/shared';
import {
  BadgeCheck,
  CalendarCheck,
  Camera,
  CarFront,
  ClipboardCheck,
  FileText,
  Gauge,
  Handshake,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  User,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Đăng ký bán xe',
  description: 'Gửi thông tin xe để được kiểm định, tư vấn giá và hỗ trợ đăng bán.',
};

const previewVehicle = vehicles[4];
const processIcons = [FileText, ShieldCheck, BadgeCheck, Handshake];

export default function SellPage() {
  return (
    <main>
      <SiteHeader />

      <section className="border-b border-line bg-sky">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 py-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-14">
          <div>
            <p className="text-sm font-bold text-mint">Bán xe nhẹ việc hơn</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Bạn có xe, chúng tôi lo phần còn lại.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Đội ngũ đến kiểm định tại nhà, tư vấn giá, chuẩn hóa tin đăng và
              theo sát hồ sơ đến khi giao dịch hoàn tất.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink">
              {['Phản hồi trong ngày', 'Kiểm định tại nhà', 'Tin đăng có báo cáo'].map(
                (item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <BadgeCheck aria-hidden="true" className="text-mint" size={18} />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200 shadow-soft">
            <Image
              alt="Xe được kiểm định trước khi đăng bán"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              src={previewVehicle.imageUrl}
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg bg-white/95 p-4 backdrop-blur">
              <p className="text-xs font-bold text-mint">Hồ sơ sau kiểm định</p>
              <p className="mt-1 font-extrabold text-ink">{previewVehicle.name}</p>
              <p className="mt-1 text-xs text-slate-500">
                Ảnh rõ, thông số đủ, hạng mục cần lưu ý minh bạch
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <p className="text-sm font-bold text-mint">Quy trình bán xe</p>
          <ol className="mt-6 grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = processIcons[index] ?? ClipboardCheck;

              return (
                <li className="border-t border-line pt-5" key={step.title}>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-leaf text-mint">
                      <Icon aria-hidden="true" size={19} />
                    </span>
                    <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
                  </div>
                  <h2 className="mt-4 font-extrabold text-ink">{step.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-canvas">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[280px_1fr]">
          <aside>
            <p className="text-sm font-bold text-mint">Bắt đầu trong 3 phút</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink">
              Gửi thông tin cơ bản
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Thông tin chỉ dùng để xác nhận xe và xếp lịch kiểm định, chưa
              công khai trên website.
            </p>
            <div className="mt-6 rounded-lg bg-ink p-5 text-white">
              <Phone aria-hidden="true" size={20} />
              <p className="mt-3 text-sm font-bold">Cần hỗ trợ ngay?</p>
              <a className="mt-1 block text-lg font-extrabold" href="tel:19000000">
                1900 0000
              </a>
              <p className="mt-2 text-xs leading-5 text-white/60">
                08:00 - 20:00, từ thứ Hai đến Chủ nhật
              </p>
            </div>
          </aside>

          <form className="grid gap-6 rounded-lg border border-line bg-white p-5 shadow-sm sm:p-7">
            <fieldset>
              <legend className="text-xl font-extrabold text-ink">Thông tin liên hệ</legend>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Field icon={User} label="Họ và tên" placeholder="Nguyễn Văn A" />
                <Field icon={Phone} label="Số điện thoại" placeholder="09xx xxx xxx" type="tel" />
              </div>
            </fieldset>

            <fieldset className="border-t border-line pt-6">
              <legend className="text-xl font-extrabold text-ink">Thông tin xe</legend>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <Field icon={CarFront} label="Hãng xe" placeholder="Toyota" />
                <Field icon={ClipboardCheck} label="Dòng xe" placeholder="Vios" />
                <Field icon={CalendarCheck} label="Năm sản xuất" placeholder="2021" />
                <Field icon={Gauge} label="Số km đã đi" placeholder="45.000 km" />
                <Field icon={FileText} label="Giá mong muốn" placeholder="500 triệu" />
                <Field icon={MapPin} label="Khu vực xe" placeholder="Hà Nội" />
              </div>
            </fieldset>

            <label className="grid gap-2 text-sm font-bold text-ink">
              Tình trạng xe và thời gian thuận tiện
              <textarea
                className="min-h-28 rounded-lg border border-line bg-canvas px-4 py-3 font-normal outline-none focus:border-mint"
                placeholder="Lịch sử bảo dưỡng, điểm cần lưu ý và khung giờ có thể kiểm định..."
              />
            </label>

            <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-dashed border-slate-300 bg-canvas p-5 transition hover:border-mint">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-mint">
                <Camera aria-hidden="true" size={21} />
              </span>
              <span>
                <span className="block text-sm font-bold text-ink">Thêm ảnh xe sơ bộ</span>
                <span className="mt-1 block text-xs text-slate-500">JPG, PNG hoặc WebP, tối đa 10 MB/ảnh</span>
              </span>
              <input accept="image/jpeg,image/png,image/webp" className="sr-only" multiple type="file" />
            </label>

            <label className="flex items-start gap-3 text-xs leading-5 text-slate-500">
              <input className="mt-1 h-4 w-4 accent-mint" required type="checkbox" />
              Tôi đồng ý để Xe Dân Với Dân liên hệ xác nhận thông tin và lịch kiểm định.
            </label>

            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white transition hover:bg-ink">
              <Send aria-hidden="true" size={18} />
              Gửi yêu cầu bán xe
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

type FieldProps = {
  icon: typeof User;
  label: string;
  placeholder: string;
  type?: string;
};

function Field({ icon: Icon, label, placeholder, type = 'text' }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink">
      <span className="flex items-center gap-2">
        <Icon aria-hidden="true" className="text-slate-400" size={16} />
        {label}
      </span>
      <input
        className="h-11 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}
