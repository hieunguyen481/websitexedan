'use client';

import { CheckCheck, Paperclip, Send, UserRound } from 'lucide-react';
import { FormEvent, useState } from 'react';

type Message = {
  id: number;
  sender: 'advisor' | 'user';
  content: string;
  time: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: 'advisor',
    content: 'Chào anh An, em là Minh Anh, tư vấn viên phụ trách lịch xem Kia Seltos.',
    time: '09:20',
  },
  {
    id: 2,
    sender: 'user',
    content: 'Xe có đầy đủ lịch sử bảo dưỡng và báo cáo khung gầm không?',
    time: '09:22',
  },
  {
    id: 3,
    sender: 'advisor',
    content: 'Dạ có. Em đã ghim báo cáo kiểm định trong hồ sơ xe để anh xem trước.',
    time: '09:24',
  },
];

export function ChatPanel() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState('');

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = draft.trim();
    if (!content) return;

    setMessages((items) => [
      ...items,
      { id: Date.now(), sender: 'user', content, time: 'Vừa xong' },
    ]);
    setDraft('');
  }

  return (
    <div className="grid min-h-[620px] overflow-hidden rounded-lg border border-line bg-white lg:grid-cols-[280px_1fr]">
      <aside className="border-b border-line bg-canvas p-4 lg:border-b-0 lg:border-r">
        <h2 className="font-extrabold text-ink">Cuộc trò chuyện</h2>
        <button className="mt-4 flex w-full items-center gap-3 rounded-lg bg-white p-3 text-left shadow-sm" type="button">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-mint">
            <UserRound aria-hidden="true" size={19} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-ink">Nguyễn Minh Anh</span>
            <span className="mt-1 block truncate text-xs text-slate-500">Tư vấn lịch xem xe</span>
          </span>
          <span className="ml-auto h-2 w-2 rounded-full bg-mint" />
        </button>
      </aside>

      <section className="flex min-w-0 flex-col">
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <h2 className="font-extrabold text-ink">Nguyễn Minh Anh</h2>
            <p className="mt-1 text-xs text-mint">Đang trực tuyến</p>
          </div>
          <span className="text-xs font-semibold text-slate-400">Kia Seltos 2022 Premium</span>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto bg-canvas/50 p-5">
          {messages.map((message) => (
            <div
              className={message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}
              key={message.id}
            >
              <div
                className={[
                  'max-w-[78%] rounded-lg px-4 py-3 text-sm leading-6',
                  message.sender === 'user'
                    ? 'bg-mint text-white'
                    : 'border border-line bg-white text-slate-700',
                ].join(' ')}
              >
                <p>{message.content}</p>
                <p
                  className={[
                    'mt-1 flex items-center justify-end gap-1 text-[11px]',
                    message.sender === 'user' ? 'text-white/70' : 'text-slate-400',
                  ].join(' ')}
                >
                  {message.time}
                  {message.sender === 'user' && <CheckCheck aria-hidden="true" size={13} />}
                </p>
              </div>
            </div>
          ))}
        </div>

        <form className="flex items-end gap-2 border-t border-line p-4" onSubmit={sendMessage}>
          <button
            aria-label="Đính kèm tệp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line text-slate-500"
            type="button"
          >
            <Paperclip aria-hidden="true" size={18} />
          </button>
          <textarea
            aria-label="Nội dung tin nhắn"
            className="min-h-11 flex-1 resize-none rounded-lg border border-line bg-canvas px-4 py-3 text-sm outline-none focus:border-mint"
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Nhập tin nhắn..."
            rows={1}
            value={draft}
          />
          <button
            aria-label="Gửi tin nhắn"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-mint text-white"
          >
            <Send aria-hidden="true" size={18} />
          </button>
        </form>
      </section>
    </div>
  );
}
