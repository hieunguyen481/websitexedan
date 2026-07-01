import { HelpCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

const questions = [
  {
    question: 'Xe được kiểm định những gì?',
    answer: 'Báo cáo gồm động cơ, hộp số, khung gầm, phanh, điện, nội ngoại thất, giấy tờ và lịch sử sử dụng có thể xác minh.',
  },
  {
    question: 'Đặt lịch xem xe có mất phí không?',
    answer: 'Không. Tư vấn viên sẽ xác nhận thời gian và địa điểm trước khi lịch có hiệu lực.',
  },
  {
    question: 'Tiền cọc được xử lý như thế nào?',
    answer: 'Khoản cọc được gắn với hợp đồng điện tử và theo dõi riêng trong giao dịch cho đến khi đủ điều kiện bàn giao hoặc hoàn tiền.',
  },
  {
    question: 'Người bán có phải tự viết tin đăng không?',
    answer: 'Không. Đội ngũ sẽ chuẩn hóa ảnh, mô tả, thông số và báo cáo kiểm định trước khi đưa xe lên sàn.',
  },
  {
    question: 'Thời gian sang tên mất bao lâu?',
    answer: 'Thông thường từ 3 đến 7 ngày làm việc sau khi đã thu đủ hồ sơ, tùy cơ quan đăng ký và địa phương.',
  },
];

export default function FaqPage() {
  return (
    <main>
      <SiteHeader />
      <section className="border-b border-line bg-sky">
        <div className="mx-auto max-w-4xl px-5 py-10 text-center">
          <HelpCircle aria-hidden="true" className="mx-auto text-mint" size={28} />
          <h1 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">Câu hỏi thường gặp</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Những điều cần biết trước khi mua xe, bán xe hoặc đặt cọc.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-10">
        <div className="grid gap-3">
          {questions.map((item) => (
            <details className="group rounded-lg border border-line bg-white p-5" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-ink [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="text-xl font-normal text-mint group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 border-t border-line pt-4 text-sm leading-7 text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center rounded-lg bg-leaf p-6 text-center">
          <MessageCircle aria-hidden="true" className="text-mint" size={24} />
          <h2 className="mt-3 font-extrabold text-ink">Chưa tìm thấy câu trả lời?</h2>
          <Link className="mt-4 inline-flex h-10 items-center rounded-lg bg-ink px-4 text-sm font-bold text-white" href="/contact">
            Liên hệ hỗ trợ
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
