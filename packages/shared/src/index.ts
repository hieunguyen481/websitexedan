export type VehicleStatus = 'available' | 'reserved' | 'sold';

export type FeaturedVehicle = {
  id: string;
  name: string;
  year: number;
  mileage: string;
  price: number;
  status: VehicleStatus;
  summary: string;
};

export const featuredVehicles: FeaturedVehicle[] = [
  {
    id: 'toyota-vios-2020',
    name: 'Toyota Vios 2020 1.5G',
    year: 2020,
    mileage: '42.000 km',
    price: 468000000,
    status: 'available',
    summary: 'Sedan tiet kiem, ho so ro rang, phu hop gia dinh va chay dich vu.',
  },
  {
    id: 'honda-city-2021',
    name: 'Honda City 2021 RS',
    year: 2021,
    mileage: '35.000 km',
    price: 545000000,
    status: 'available',
    summary: 'Ngoai that dep, van hanh on dinh, da qua kiem dinh 30+ hang muc.',
  },
  {
    id: 'mazda-3-2019',
    name: 'Mazda 3 2019 Luxury',
    year: 2019,
    mileage: '58.000 km',
    price: 515000000,
    status: 'reserved',
    summary: 'Thiet ke hien dai, noi that gon dep, bao cao kiem dinh minh bach.',
  },
];

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
