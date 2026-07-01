'use client';

import type { AccountNotification } from '../data/account';
import {
  Bell,
  CalendarDays,
  CheckCheck,
  ClipboardCheck,
  ReceiptText,
} from 'lucide-react';
import { useState } from 'react';

const notificationIcons = {
  appointment: CalendarDays,
  transaction: ReceiptText,
  inspection: ClipboardCheck,
  system: Bell,
};

export function NotificationsList({
  initialNotifications,
}: {
  initialNotifications: AccountNotification[];
}) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((item) => item.unread).length;

  function markAllRead() {
    setNotifications((items) => items.map((item) => ({ ...item, unread: false })));
  }

  return (
    <div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-600">{unreadCount} thông báo chưa đọc</p>
        <button
          className="inline-flex items-center gap-2 text-sm font-bold text-mint disabled:text-slate-400"
          disabled={unreadCount === 0}
          onClick={markAllRead}
          type="button"
        >
          <CheckCheck aria-hidden="true" size={17} />
          Đánh dấu đã đọc
        </button>
      </div>

      <section className="mt-4 divide-y divide-line overflow-hidden rounded-lg border border-line bg-white">
        {notifications.map((notification) => {
          const Icon = notificationIcons[notification.type];

          return (
            <button
              className={[
                'flex w-full gap-4 p-5 text-left transition hover:bg-canvas',
                notification.unread ? 'bg-leaf/30' : 'bg-white',
              ].join(' ')}
              key={notification.id}
              onClick={() =>
                setNotifications((items) =>
                  items.map((item) =>
                    item.id === notification.id ? { ...item, unread: false } : item,
                  ),
                )
              }
              type="button"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-mint shadow-sm">
                <Icon aria-hidden="true" size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-start justify-between gap-4">
                  <span className="font-extrabold text-ink">{notification.title}</span>
                  {notification.unread && (
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-mint" />
                  )}
                </span>
                <span className="mt-1 block text-sm leading-6 text-slate-600">
                  {notification.body}
                </span>
                <span className="mt-2 block text-xs text-slate-400">
                  {notification.createdAt}
                </span>
              </span>
            </button>
          );
        })}
      </section>
    </div>
  );
}
