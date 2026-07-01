export type Appointment = {
  id: string;
  vehicleSlug: string;
  scheduledAt: string;
  location: string;
  advisor: string;
  status: 'confirmed' | 'pending' | 'completed';
};

export type Transaction = {
  id: string;
  vehicleSlug: string;
  role: 'buyer' | 'seller';
  status: 'deposit_paid' | 'in_transit' | 'title_transfer' | 'completed';
  amount: number;
  updatedAt: string;
  progress: number;
};

export type UserListing = {
  id: string;
  vehicleSlug: string;
  status: 'scheduled' | 'inspecting' | 'listed' | 'reserved';
  nextAction: string;
  updatedAt: string;
};

export type AccountNotification = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  type: 'appointment' | 'transaction' | 'inspection' | 'system';
  unread: boolean;
};

export const appointments: Appointment[] = [
  {
    id: 'LH-240701',
    vehicleSlug: 'kia-seltos-2022-premium-ha-noi',
    scheduledAt: '09:30, 04/07/2026',
    location: 'Long Biên, Hà Nội',
    advisor: 'Nguyễn Minh Anh',
    status: 'confirmed',
  },
  {
    id: 'LH-240625',
    vehicleSlug: 'honda-city-2021-rs-ha-noi',
    scheduledAt: '15:00, 25/06/2026',
    location: 'Thanh Xuân, Hà Nội',
    advisor: 'Trần Hoàng Nam',
    status: 'completed',
  },
];

export const transactions: Transaction[] = [
  {
    id: 'GD-2026-001',
    vehicleSlug: 'mazda-3-2019-luxury-ha-noi',
    role: 'buyer',
    status: 'title_transfer',
    amount: 515_000_000,
    updatedAt: '01/07/2026, 10:20',
    progress: 75,
  },
  {
    id: 'GD-2026-002',
    vehicleSlug: 'hyundai-accent-2021-dac-biet-ha-noi',
    role: 'seller',
    status: 'completed',
    amount: 455_000_000,
    updatedAt: '18/06/2026, 16:45',
    progress: 100,
  },
];

export const userListings: UserListing[] = [
  {
    id: 'DX-2026-014',
    vehicleSlug: 'ford-ranger-2020-wildtrak-ha-noi',
    status: 'listed',
    nextAction: 'Chờ người mua đặt lịch xem',
    updatedAt: '01/07/2026, 08:15',
  },
  {
    id: 'DX-2026-021',
    vehicleSlug: 'toyota-vios-2020-15g-ha-noi',
    status: 'scheduled',
    nextAction: 'Kiểm định lúc 14:00, 05/07/2026',
    updatedAt: '30/06/2026, 17:30',
  },
];

export const accountNotifications: AccountNotification[] = [
  {
    id: 'TB-001',
    title: 'Lịch xem xe đã được xác nhận',
    body: 'Kia Seltos 2022 Premium sẽ sẵn sàng lúc 09:30 ngày 04/07.',
    createdAt: '10 phút trước',
    type: 'appointment',
    unread: true,
  },
  {
    id: 'TB-002',
    title: 'Hồ sơ sang tên đã được tiếp nhận',
    body: 'Giao dịch GD-2026-001 đang chờ kết quả từ cơ quan đăng ký.',
    createdAt: '2 giờ trước',
    type: 'transaction',
    unread: true,
  },
  {
    id: 'TB-003',
    title: 'Báo cáo kiểm định đã hoàn tất',
    body: 'Ford Ranger 2020 Wildtrak đạt 89/100 và đã sẵn sàng lên sàn.',
    createdAt: 'Hôm qua',
    type: 'inspection',
    unread: false,
  },
];

export const accountProfile = {
  fullName: 'Nguyễn Văn An',
  phone: '090 123 4567',
  email: 'an.nguyen@example.com',
  city: 'Hà Nội',
  identityStatus: 'Đã xác thực',
};

export const appointmentStatusLabels = {
  confirmed: 'Đã xác nhận',
  pending: 'Chờ xác nhận',
  completed: 'Đã hoàn tất',
} satisfies Record<Appointment['status'], string>;

export const transactionStatusLabels = {
  deposit_paid: 'Đã đặt cọc',
  in_transit: 'Đang vận chuyển',
  title_transfer: 'Đang sang tên',
  completed: 'Hoàn tất',
} satisfies Record<Transaction['status'], string>;

export const listingStatusLabels = {
  scheduled: 'Đã xếp lịch',
  inspecting: 'Đang kiểm định',
  listed: 'Đang hiển thị',
  reserved: 'Đã giữ chỗ',
} satisfies Record<UserListing['status'], string>;
