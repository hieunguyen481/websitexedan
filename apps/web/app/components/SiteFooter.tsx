import { bodyStyleLinks, getVehicleBrands } from '@xedan/shared';
import { ArrowUpRight, CarFront, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  const brands = getVehicleBrands();

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <div>
          <Link className="flex items-center gap-3" href="/">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-mint">
              <CarFront aria-hidden="true" size={22} />
            </span>
            <span>
              <span className="block font-extrabold">Xe Dân Với Dân</span>
              <span className="text-xs text-white/55">Kiểm định trước, an tâm sau</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            Sàn xe cũ có kiểm định độc lập, hồ sơ minh bạch và một đầu mối hỗ
            trợ xuyên suốt từ lịch xem đến sang tên.
          </p>
          <div className="mt-5 grid gap-2 text-sm text-white/65">
            <a className="flex items-center gap-2 hover:text-white" href="tel:19000000">
              <Phone aria-hidden="true" size={15} /> 1900 0000
            </a>
            <a className="flex items-center gap-2 hover:text-white" href="mailto:hello@xedanvoidan.vn">
              <Mail aria-hidden="true" size={15} /> hello@xedanvoidan.vn
            </a>
            <span className="flex items-center gap-2">
              <MapPin aria-hidden="true" size={15} /> Hà Nội, Việt Nam
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">Mua xe</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            <Link className="hover:text-white" href="/vehicles">Tất cả xe</Link>
            <Link className="hover:text-white" href="/brands">Theo hãng xe</Link>
            <Link className="hover:text-white" href="/fuel/electric">Xe điện & hybrid</Link>
            <Link className="hover:text-white" href="/fuel/gasoline">Xe xăng & dầu</Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">Khám phá</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            {bodyStyleLinks.slice(0, 5).map((link) => (
              <Link className="hover:text-white" href={link.href} key={link.href}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-sm font-bold text-white">
            <ShieldCheck aria-hidden="true" size={17} />
            Cam kết minh bạch
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Mỗi tin xe hiển thị điểm kiểm định, hạng mục cần lưu ý và trạng
            thái giao dịch để bạn quyết định trên cùng một nguồn thông tin.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {brands.slice(0, 5).map((brand) => (
              <Link
                className="inline-flex items-center gap-1 rounded-md border border-white/15 px-2.5 py-1.5 text-xs text-white/65 hover:border-white/40 hover:text-white"
                href={`/brands#${brand}`}
                key={brand}
              >
                {brand} <ArrowUpRight aria-hidden="true" size={12} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Xe Dân Với Dân. Thông tin xe dùng cho mục đích tham khảo.</p>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#">Điều khoản</a>
            <a className="hover:text-white" href="#">Quyền riêng tư</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
