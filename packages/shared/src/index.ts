export type VehicleStatus = 'available' | 'reserved' | 'sold';

export type Vehicle = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  mileage: string;
  price: number;
  status: VehicleStatus;
  location: string;
  transmission: string;
  fuel: string;
  bodyStyle: string;
  seats: number;
  color: string;
  plateArea: string;
  imageUrl: string;
  summary: string;
  highlights: string[];
  inspection: {
    score: number;
    result: 'Đạt' | 'Cần lưu ý';
    checkedAt: string;
    items: Array<{
      label: string;
      status: 'Tốt' | 'Cần theo dõi';
    }>;
  };
};

export const vehicles: Vehicle[] = [
  {
    id: 'toyota-vios-2020',
    slug: 'toyota-vios-2020-15g-ha-noi',
    name: 'Toyota Vios 2020 1.5G',
    brand: 'Toyota',
    model: 'Vios',
    year: 2020,
    mileage: '42.000 km',
    price: 468000000,
    status: 'available',
    location: 'Cầu Giấy, Hà Nội',
    transmission: 'Tự động',
    fuel: 'Xăng',
    bodyStyle: 'Sedan',
    seats: 5,
    color: 'Trắng ngọc trai',
    plateArea: 'Hà Nội',
    imageUrl: '/images/vehicles/toyota-vios.webp',
    summary:
      'Sedan tiết kiệm, hồ sơ rõ ràng, phù hợp gia đình và nhu cầu đi lại hằng ngày.',
    highlights: [
      'Một chủ từ đầu, bảo dưỡng hãng',
      'Nội thất sạch, điều hòa sâu tốt',
      'Báo cáo kiểm định 32 hạng mục',
    ],
    inspection: {
      score: 91,
      result: 'Đạt',
      checkedAt: '18/06/2026',
      items: [
        { label: 'Động cơ và hộp số', status: 'Tốt' },
        { label: 'Khung gầm', status: 'Tốt' },
        { label: 'Sơn ngoại thất', status: 'Cần theo dõi' },
        { label: 'Giấy tờ pháp lý', status: 'Tốt' },
      ],
    },
  },
  {
    id: 'honda-city-2021',
    slug: 'honda-city-2021-rs-ha-noi',
    name: 'Honda City 2021 RS',
    brand: 'Honda',
    model: 'City',
    year: 2021,
    mileage: '35.000 km',
    price: 545000000,
    status: 'available',
    location: 'Thanh Xuân, Hà Nội',
    transmission: 'Tự động',
    fuel: 'Xăng',
    bodyStyle: 'Sedan',
    seats: 5,
    color: 'Đỏ',
    plateArea: 'Hà Nội',
    imageUrl: '/images/vehicles/honda-city.webp',
    summary:
      'Ngoại thất thể thao, vận hành ổn định, đã qua kiểm định hơn 30 hạng mục.',
    highlights: [
      'Bản RS, trang bị an toàn đầy đủ',
      'Lốp còn dày, mâm nguyên bản',
      'Có lịch sử bảo dưỡng rõ ràng',
    ],
    inspection: {
      score: 94,
      result: 'Đạt',
      checkedAt: '20/06/2026',
      items: [
        { label: 'Động cơ và hộp số', status: 'Tốt' },
        { label: 'Hệ thống điện', status: 'Tốt' },
        { label: 'Nội thất', status: 'Tốt' },
        { label: 'Giấy tờ pháp lý', status: 'Tốt' },
      ],
    },
  },
  {
    id: 'mazda-3-2019',
    slug: 'mazda-3-2019-luxury-ha-noi',
    name: 'Mazda 3 2019 Luxury',
    brand: 'Mazda',
    model: '3',
    year: 2019,
    mileage: '58.000 km',
    price: 515000000,
    status: 'reserved',
    location: 'Nam Từ Liêm, Hà Nội',
    transmission: 'Tự động',
    fuel: 'Xăng',
    bodyStyle: 'Sedan',
    seats: 5,
    color: 'Xám',
    plateArea: 'Hà Nội',
    imageUrl: '/images/vehicles/mazda-3.webp',
    summary:
      'Thiết kế hiện đại, nội thất gọn đẹp, báo cáo kiểm định minh bạch.',
    highlights: [
      'Khoang lái đẹp, màn hình trung tâm',
      'Gầm chắc, không có dấu hiệu đâm đụng lớn',
      'Đang có khách đặt lịch xem xe',
    ],
    inspection: {
      score: 88,
      result: 'Cần lưu ý',
      checkedAt: '16/06/2026',
      items: [
        { label: 'Động cơ và hộp số', status: 'Tốt' },
        { label: 'Khung gầm', status: 'Tốt' },
        { label: 'Lốp và phanh', status: 'Cần theo dõi' },
        { label: 'Giấy tờ pháp lý', status: 'Tốt' },
      ],
    },
  },
  {
    id: 'kia-seltos-2022',
    slug: 'kia-seltos-2022-premium-ha-noi',
    name: 'Kia Seltos 2022 Premium',
    brand: 'Kia',
    model: 'Seltos',
    year: 2022,
    mileage: '28.000 km',
    price: 628000000,
    status: 'available',
    location: 'Long Biên, Hà Nội',
    transmission: 'Tự động',
    fuel: 'Xăng',
    bodyStyle: 'SUV',
    seats: 5,
    color: 'Cam',
    plateArea: 'Hà Nội',
    imageUrl: '/images/vehicles/kia-seltos.webp',
    summary:
      'SUV đô thị gọn, khoang ngồi rộng, phù hợp gia đình trẻ và đi phố.',
    highlights: [
      'Camera lùi, cảm biến đầy đủ',
      'Nội thất còn mới, mùi xe sạch',
      'Kiểm định đạt, sẵn sàng giao dịch',
    ],
    inspection: {
      score: 92,
      result: 'Đạt',
      checkedAt: '19/06/2026',
      items: [
        { label: 'Động cơ và hộp số', status: 'Tốt' },
        { label: 'Khung gầm', status: 'Tốt' },
        { label: 'Hệ thống an toàn', status: 'Tốt' },
        { label: 'Giấy tờ pháp lý', status: 'Tốt' },
      ],
    },
  },
  {
    id: 'ford-ranger-2020',
    slug: 'ford-ranger-2020-wildtrak-ha-noi',
    name: 'Ford Ranger 2020 Wildtrak',
    brand: 'Ford',
    model: 'Ranger',
    year: 2020,
    mileage: '64.000 km',
    price: 705000000,
    status: 'available',
    location: 'Hoàng Mai, Hà Nội',
    transmission: 'Tự động',
    fuel: 'Dầu',
    bodyStyle: 'Bán tải',
    seats: 5,
    color: 'Đen',
    plateArea: 'Hà Nội',
    imageUrl: '/images/vehicles/ford-ranger.webp',
    summary:
      'Bán tải mạnh, phù hợp đi tỉnh và công việc, lịch sử sử dụng rõ ràng.',
    highlights: [
      'Máy dầu khỏe, sang số mượt',
      'Thùng xe đã lắp nắp cuộn',
      'Có hồ sơ bảo dưỡng gần nhất',
    ],
    inspection: {
      score: 89,
      result: 'Đạt',
      checkedAt: '15/06/2026',
      items: [
        { label: 'Động cơ và hộp số', status: 'Tốt' },
        { label: 'Hệ thống treo', status: 'Cần theo dõi' },
        { label: 'Khung gầm', status: 'Tốt' },
        { label: 'Giấy tờ pháp lý', status: 'Tốt' },
      ],
    },
  },
  {
    id: 'hyundai-accent-2021',
    slug: 'hyundai-accent-2021-dac-biet-ha-noi',
    name: 'Hyundai Accent 2021 Đặc Biệt',
    brand: 'Hyundai',
    model: 'Accent',
    year: 2021,
    mileage: '39.000 km',
    price: 455000000,
    status: 'sold',
    location: 'Hà Đông, Hà Nội',
    transmission: 'Tự động',
    fuel: 'Xăng',
    bodyStyle: 'Sedan',
    seats: 5,
    color: 'Bạc',
    plateArea: 'Hà Nội',
    imageUrl: '/images/vehicles/hyundai-accent.webp',
    summary:
      'Mẫu sedan dễ dùng, chi phí hợp lý, giao dịch mẫu đã hoàn tất qua sàn.',
    highlights: [
      'Giá mềm trong phân khúc',
      'Nội thất được giữ gìn tốt',
      'Giao dịch thành công qua escrow',
    ],
    inspection: {
      score: 90,
      result: 'Đạt',
      checkedAt: '10/06/2026',
      items: [
        { label: 'Động cơ và hộp số', status: 'Tốt' },
        { label: 'Nội thất', status: 'Tốt' },
        { label: 'Sơn ngoại thất', status: 'Cần theo dõi' },
        { label: 'Giấy tờ pháp lý', status: 'Tốt' },
      ],
    },
  },
  {
    id: 'vinfast-vf-e34-2022',
    slug: 'vinfast-vf-e34-2022-plus-ha-noi',
    name: 'VinFast VF e34 2022 Plus',
    brand: 'VinFast',
    model: 'VF e34',
    year: 2022,
    mileage: '31.000 km',
    price: 498000000,
    status: 'available',
    location: 'Tây Hồ, Hà Nội',
    transmission: 'Một cấp',
    fuel: 'Điện',
    bodyStyle: 'SUV điện',
    seats: 5,
    color: 'Xanh',
    plateArea: 'Hà Nội',
    imageUrl: '/images/vehicles/vinfast-vfe34.webp',
    summary:
      'SUV điện đô thị, chi phí vận hành thấp, phù hợp người dùng muốn chuyển sang xe xanh.',
    highlights: [
      'Pin còn bảo hành, lịch sử sạc rõ',
      'Khoang lái rộng, màn hình trung tâm lớn',
      'Kiểm tra riêng hệ thống điện áp cao',
    ],
    inspection: {
      score: 93,
      result: 'Đạt',
      checkedAt: '21/06/2026',
      items: [
        { label: 'Pin và hệ thống sạc', status: 'Tốt' },
        { label: 'Động cơ điện', status: 'Tốt' },
        { label: 'Khung gầm', status: 'Tốt' },
        { label: 'Giấy tờ pháp lý', status: 'Tốt' },
      ],
    },
  },
  {
    id: 'toyota-corolla-cross-hybrid-2021',
    slug: 'toyota-corolla-cross-2021-hybrid-ha-noi',
    name: 'Toyota Corolla Cross 2021 Hybrid',
    brand: 'Toyota',
    model: 'Corolla Cross',
    year: 2021,
    mileage: '46.000 km',
    price: 735000000,
    status: 'available',
    location: 'Ba Đình, Hà Nội',
    transmission: 'Tự động',
    fuel: 'Hybrid',
    bodyStyle: 'SUV hybrid',
    seats: 5,
    color: 'Trắng',
    plateArea: 'Hà Nội',
    imageUrl: '/images/vehicles/toyota-cross.webp',
    summary:
      'SUV hybrid tiết kiệm, trang bị an toàn tốt, phù hợp gia đình cần xe bền bỉ.',
    highlights: [
      'Hệ hybrid hoạt động ổn định',
      'Gói an toàn Toyota Safety Sense',
      'Nội thất sạch, lịch sử bảo dưỡng đầy đủ',
    ],
    inspection: {
      score: 95,
      result: 'Đạt',
      checkedAt: '22/06/2026',
      items: [
        { label: 'Hệ thống hybrid', status: 'Tốt' },
        { label: 'Động cơ và hộp số', status: 'Tốt' },
        { label: 'Hệ thống an toàn', status: 'Tốt' },
        { label: 'Giấy tờ pháp lý', status: 'Tốt' },
      ],
    },
  },
];

export const featuredVehicles = vehicles.slice(0, 3);

export const categoryLinks = [
  {
    title: 'Hãng xe',
    href: '/brands',
    description: 'Toyota, Honda, Mazda, VinFast và các hãng phổ biến.',
  },
  {
    title: 'Xe điện',
    href: '/fuel/electric',
    description: 'Xe điện, hybrid và các mẫu tiết kiệm năng lượng.',
  },
  {
    title: 'Xe xăng/dầu',
    href: '/fuel/gasoline',
    description: 'Sedan, SUV, bán tải dùng động cơ xăng hoặc dầu.',
  },
  {
    title: 'Đăng nhập',
    href: '/auth/login',
    description: 'Theo dõi lịch xem xe, xe yêu thích và giao dịch.',
  },
];

export const bodyStyleLinks = [
  { title: 'Sedan', href: '/vehicles?style=sedan' },
  { title: 'SUV', href: '/vehicles?style=suv' },
  { title: 'Xe điện', href: '/fuel/electric' },
  { title: 'Bán tải', href: '/vehicles?style=ban-tai' },
  { title: 'Hybrid', href: '/fuel/electric#hybrid' },
  { title: 'Dưới 500 triệu', href: '/vehicles?price=under-500' },
];

export const trustStats = [
  { value: '30+', label: 'Hạng mục kiểm định' },
  { value: '< 2h', label: 'Phản hồi lịch hẹn' },
  { value: '1:1', label: 'Tư vấn xuyên suốt' },
];

export const processSteps = [
  {
    title: 'Đăng ký',
    description: 'Người bán gửi thông tin xe, ảnh sơ bộ và khung giờ rảnh.',
  },
  {
    title: 'Kiểm định',
    description: 'Kỹ thuật viên kiểm tra xe, chụp ảnh và lập báo cáo chi tiết.',
  },
  {
    title: 'Lên sàn',
    description: 'Tin đăng được duyệt, chuẩn hóa mô tả và công khai cho người mua.',
  },
  {
    title: 'Giao dịch',
    description: 'Đặt cọc, bàn giao xe, theo dõi sang tên và giải ngân an toàn.',
  },
];

export function findVehicleBySlug(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getVehicleBrands() {
  return Array.from(new Set(vehicles.map((vehicle) => vehicle.brand)));
}

export function getVehiclesByFuelGroup(group: 'electric' | 'gasoline') {
  if (group === 'electric') {
    return vehicles.filter((vehicle) => ['Điện', 'Hybrid'].includes(vehicle.fuel));
  }

  return vehicles.filter((vehicle) => ['Xăng', 'Dầu'].includes(vehicle.fuel));
}

export function getVehiclesByBrand(brand: string) {
  return vehicles.filter((vehicle) => vehicle.brand === brand);
}
