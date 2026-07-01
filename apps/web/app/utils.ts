export const currencyFormatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
});

export function formatPrice(value: number) {
  return currencyFormatter.format(value);
}

export function statusLabel(status: string) {
  if (status === 'reserved') {
    return 'Đang giữ chỗ';
  }

  if (status === 'sold') {
    return 'Đã bán';
  }

  return 'Sẵn sàng xem xe';
}
