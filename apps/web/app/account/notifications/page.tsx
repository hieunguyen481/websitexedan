import { AccountPageHeader } from '../../components/AccountPageHeader';
import { NotificationsList } from '../../components/NotificationsList';
import { accountNotifications } from '../../data/account';

export default function NotificationsPage() {
  return (
    <div>
      <AccountPageHeader
        description="Cập nhật lịch hẹn, kiểm định và tiến độ giao dịch của bạn."
        title="Thông báo"
      />
      <NotificationsList initialNotifications={accountNotifications} />
    </div>
  );
}
