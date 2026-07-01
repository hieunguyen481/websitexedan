'use client';

import type { Vehicle } from '@xedan/shared';
import {
  ArrowDownUp,
  Filter,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { VehicleCard } from './VehicleCard';

type VehicleExplorerProps = {
  vehicles: Vehicle[];
  brands: string[];
  initialQuery?: string;
  initialPrice?: string;
  initialStyle?: string;
};

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function VehicleExplorer({
  vehicles,
  brands,
  initialQuery = '',
  initialPrice = '',
  initialStyle = '',
}: VehicleExplorerProps) {
  const [query, setQuery] = useState(initialQuery);
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(initialPrice);
  const [fuel, setFuel] = useState('');
  const [style, setStyle] = useState(initialStyle);
  const [sort, setSort] = useState('newest');

  const results = useMemo(() => {
    const filtered = vehicles.filter((vehicle) => {
      const haystack = normalize(
        `${vehicle.name} ${vehicle.brand} ${vehicle.model} ${vehicle.location}`,
      );
      const matchesQuery = !query || haystack.includes(normalize(query));
      const matchesBrand = !brand || vehicle.brand === brand;
      const matchesFuel = !fuel || vehicle.fuel === fuel;
      const matchesStyle = !style || normalize(vehicle.bodyStyle).includes(normalize(style));
      const matchesPrice =
        !price ||
        (price === 'under-500' && vehicle.price < 500_000_000) ||
        (price === '500-700' &&
          vehicle.price >= 500_000_000 &&
          vehicle.price <= 700_000_000) ||
        (price === 'over-700' && vehicle.price > 700_000_000);

      return matchesQuery && matchesBrand && matchesFuel && matchesStyle && matchesPrice;
    });

    return [...filtered].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'score') return b.inspection.score - a.inspection.score;
      return b.year - a.year;
    });
  }, [brand, fuel, price, query, sort, style, vehicles]);

  function resetFilters() {
    setQuery('');
    setBrand('');
    setPrice('');
    setFuel('');
    setStyle('');
    setSort('newest');
  }

  const filters = (
    <div className="grid gap-5">
      <label className="grid gap-2 text-sm font-bold text-ink">
        Hãng xe
        <select
          className="h-11 rounded-lg border border-line bg-white px-3 text-sm font-normal outline-none focus:border-mint"
          onChange={(event) => setBrand(event.target.value)}
          value={brand}
        >
          <option value="">Tất cả hãng</option>
          {brands.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-ink">
        Khoảng giá
        <select
          className="h-11 rounded-lg border border-line bg-white px-3 text-sm font-normal outline-none focus:border-mint"
          onChange={(event) => setPrice(event.target.value)}
          value={price}
        >
          <option value="">Mọi khoảng giá</option>
          <option value="under-500">Dưới 500 triệu</option>
          <option value="500-700">500 - 700 triệu</option>
          <option value="over-700">Trên 700 triệu</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-ink">
        Nhiên liệu
        <select
          className="h-11 rounded-lg border border-line bg-white px-3 text-sm font-normal outline-none focus:border-mint"
          onChange={(event) => setFuel(event.target.value)}
          value={fuel}
        >
          <option value="">Tất cả</option>
          <option value="Xăng">Xăng</option>
          <option value="Dầu">Dầu</option>
          <option value="Điện">Điện</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-ink">
        Kiểu dáng
        <select
          className="h-11 rounded-lg border border-line bg-white px-3 text-sm font-normal outline-none focus:border-mint"
          onChange={(event) => setStyle(event.target.value)}
          value={style}
        >
          <option value="">Tất cả</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="bán tải">Bán tải</option>
        </select>
      </label>
      <button
        className="inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-500 transition hover:text-mint"
        onClick={resetFilters}
        type="button"
      >
        <RotateCcw aria-hidden="true" size={16} />
        Xóa bộ lọc
      </button>
    </div>
  );

  return (
    <div>
      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5">
          <div className="grid gap-3 md:grid-cols-[1fr_180px_auto]">
            <label className="relative">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                aria-label="Tìm kiếm xe"
                className="h-12 w-full rounded-lg border border-line bg-canvas pl-11 pr-4 text-sm outline-none focus:border-mint"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm theo hãng, dòng xe hoặc khu vực"
                value={query}
              />
            </label>
            <select
              aria-label="Sắp xếp"
              className="h-12 rounded-lg border border-line bg-canvas px-4 text-sm outline-none focus:border-mint"
              onChange={(event) => setSort(event.target.value)}
              value={sort}
            >
              <option value="newest">Xe đời mới</option>
              <option value="price-asc">Giá thấp đến cao</option>
              <option value="price-desc">Giá cao đến thấp</option>
              <option value="score">Điểm kiểm định</option>
            </select>
            <div className="hidden h-12 items-center gap-2 rounded-lg bg-ink px-5 text-sm font-bold text-white md:flex">
              <Filter aria-hidden="true" size={17} />
              {results.length} xe phù hợp
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <h2 className="mb-5 flex items-center gap-2 font-extrabold text-ink">
              <SlidersHorizontal aria-hidden="true" size={19} />
              Bộ lọc
            </h2>
            {filters}
          </div>
        </aside>

        <div>
          <details className="mb-5 rounded-lg border border-line bg-white p-4 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-ink [&::-webkit-details-marker]:hidden">
              <span className="flex items-center gap-2">
                <SlidersHorizontal aria-hidden="true" size={18} />
                Lọc kết quả
              </span>
              <span className="text-sm text-mint">{results.length} xe</span>
            </summary>
            <div className="mt-5 border-t border-line pt-5">{filters}</div>
          </details>

          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="font-extrabold text-ink">{results.length} xe phù hợp</p>
              <p className="mt-1 text-sm text-slate-500">
                Giá và tình trạng được cập nhật theo hồ sơ gần nhất.
              </p>
            </div>
            <ArrowDownUp aria-hidden="true" className="text-slate-400" size={20} />
          </div>

          {results.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {results.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-line bg-white px-6 py-16 text-center">
              <p className="font-extrabold text-ink">Chưa có xe khớp bộ lọc</p>
              <p className="mt-2 text-sm text-slate-500">
                Thử nới khoảng giá hoặc chọn lại kiểu dáng.
              </p>
              <button
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-bold text-white"
                onClick={resetFilters}
                type="button"
              >
                <RotateCcw aria-hidden="true" size={16} />
                Đặt lại bộ lọc
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
