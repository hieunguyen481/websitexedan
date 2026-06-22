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
  seats: number;
  color: string;
  plateArea: string;
  imageUrl: string;
  summary: string;
  highlights: string[];
  inspection: {
    score: number;
    result: 'Dat' | 'Can luu y';
    checkedAt: string;
    items: Array<{
      label: string;
      status: 'Tot' | 'Can theo doi';
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
    location: 'Cau Giay, Ha Noi',
    transmission: 'Tu dong',
    fuel: 'Xang',
    seats: 5,
    color: 'Trang ngoc trai',
    plateArea: 'Ha Noi',
    imageUrl:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=80',
    summary:
      'Sedan tiet kiem, ho so ro rang, phu hop gia dinh va nhu cau di lai hang ngay.',
    highlights: [
      'Mot chu tu dau, bao duong hang',
      'Noi that sach, dieu hoa sau tot',
      'Bao cao kiem dinh 32 hang muc',
    ],
    inspection: {
      score: 91,
      result: 'Dat',
      checkedAt: '18/06/2026',
      items: [
        { label: 'Dong co va hop so', status: 'Tot' },
        { label: 'Khung gam', status: 'Tot' },
        { label: 'Son ngoai that', status: 'Can theo doi' },
        { label: 'Giay to phap ly', status: 'Tot' },
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
    location: 'Thanh Xuan, Ha Noi',
    transmission: 'Tu dong',
    fuel: 'Xang',
    seats: 5,
    color: 'Do',
    plateArea: 'Ha Noi',
    imageUrl:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    summary:
      'Ngoai that the thao, van hanh on dinh, da qua kiem dinh 30+ hang muc.',
    highlights: [
      'Ban RS, trang bi an toan day du',
      'Lop con day, mam zin theo xe',
      'Co lich su bao duong ro rang',
    ],
    inspection: {
      score: 94,
      result: 'Dat',
      checkedAt: '20/06/2026',
      items: [
        { label: 'Dong co va hop so', status: 'Tot' },
        { label: 'He thong dien', status: 'Tot' },
        { label: 'Noi that', status: 'Tot' },
        { label: 'Giay to phap ly', status: 'Tot' },
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
    location: 'Nam Tu Liem, Ha Noi',
    transmission: 'Tu dong',
    fuel: 'Xang',
    seats: 5,
    color: 'Xam',
    plateArea: 'Ha Noi',
    imageUrl:
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1400&q=80',
    summary:
      'Thiet ke hien dai, noi that gon dep, bao cao kiem dinh minh bach.',
    highlights: [
      'Khoang lai dep, man hinh trung tam',
      'Gam chac, khong co dau hieu dam dung lon',
      'Dang co khach dat lich xem xe',
    ],
    inspection: {
      score: 88,
      result: 'Can luu y',
      checkedAt: '16/06/2026',
      items: [
        { label: 'Dong co va hop so', status: 'Tot' },
        { label: 'Khung gam', status: 'Tot' },
        { label: 'Lop va phanh', status: 'Can theo doi' },
        { label: 'Giay to phap ly', status: 'Tot' },
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
    location: 'Long Bien, Ha Noi',
    transmission: 'Tu dong',
    fuel: 'Xang',
    seats: 5,
    color: 'Cam',
    plateArea: 'Ha Noi',
    imageUrl:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=80',
    summary:
      'SUV do thi gon, khoang ngoi rong, phu hop gia dinh tre va di pho.',
    highlights: [
      'Camera lui, cam bien day du',
      'Noi that con moi, mui xe sach',
      'Kiem dinh dat, san sang giao dich',
    ],
    inspection: {
      score: 92,
      result: 'Dat',
      checkedAt: '19/06/2026',
      items: [
        { label: 'Dong co va hop so', status: 'Tot' },
        { label: 'Khung gam', status: 'Tot' },
        { label: 'He thong an toan', status: 'Tot' },
        { label: 'Giay to phap ly', status: 'Tot' },
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
    location: 'Hoang Mai, Ha Noi',
    transmission: 'Tu dong',
    fuel: 'Dau',
    seats: 5,
    color: 'Den',
    plateArea: 'Ha Noi',
    imageUrl:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80',
    summary:
      'Ban tai manh, phu hop di tinh va cong viec, lich su su dung ro rang.',
    highlights: [
      'May dau khoe, sang so muot',
      'Thung xe da lap nap cuon',
      'Co ho so bao duong gan nhat',
    ],
    inspection: {
      score: 89,
      result: 'Dat',
      checkedAt: '15/06/2026',
      items: [
        { label: 'Dong co va hop so', status: 'Tot' },
        { label: 'He thong treo', status: 'Can theo doi' },
        { label: 'Khung gam', status: 'Tot' },
        { label: 'Giay to phap ly', status: 'Tot' },
      ],
    },
  },
  {
    id: 'hyundai-accent-2021',
    slug: 'hyundai-accent-2021-dac-biet-ha-noi',
    name: 'Hyundai Accent 2021 Dac Biet',
    brand: 'Hyundai',
    model: 'Accent',
    year: 2021,
    mileage: '39.000 km',
    price: 455000000,
    status: 'sold',
    location: 'Ha Dong, Ha Noi',
    transmission: 'Tu dong',
    fuel: 'Xang',
    seats: 5,
    color: 'Bac',
    plateArea: 'Ha Noi',
    imageUrl:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80',
    summary:
      'Mau sedan de dung, chi phi hop ly, giao dich mau da hoan tat qua san.',
    highlights: [
      'Gia mem trong phan khuc',
      'Noi that duoc giu gin tot',
      'Giao dich thanh cong qua escrow',
    ],
    inspection: {
      score: 90,
      result: 'Dat',
      checkedAt: '10/06/2026',
      items: [
        { label: 'Dong co va hop so', status: 'Tot' },
        { label: 'Noi that', status: 'Tot' },
        { label: 'Son ngoai that', status: 'Can theo doi' },
        { label: 'Giay to phap ly', status: 'Tot' },
      ],
    },
  },
];

export const featuredVehicles = vehicles.slice(0, 3);

export const trustStats = [
  { value: '30+', label: 'Hang muc kiem dinh' },
  { value: '2h', label: 'Phan hoi lich hen' },
  { value: '3', label: 'Buoc giao dich chinh' },
];

export const processSteps = [
  {
    title: 'Dang ky',
    description: 'Nguoi ban gui thong tin xe, anh so bo va khung gio ranh.',
  },
  {
    title: 'Kiem dinh',
    description: 'Ky thuat vien kiem tra xe, chup anh va lap bao cao chi tiet.',
  },
  {
    title: 'Len san',
    description: 'Tin dang duoc duyet, toi uu mo ta va cong khai cho nguoi mua.',
  },
  {
    title: 'Giao dich',
    description: 'Dat coc, ban giao xe, theo doi sang ten va giai ngan an toan.',
  },
];

export function findVehicleBySlug(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getVehicleBrands() {
  return Array.from(new Set(vehicles.map((vehicle) => vehicle.brand)));
}
