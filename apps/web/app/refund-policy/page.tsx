import { PolicyPage } from '../components/PolicyPage';

const sections = [
  {
    title: 'Trường hợp được hoàn cọc',
    paragraphs: [
      'Người mua được xem xét hoàn cọc khi xe có sai lệch nghiêm trọng so với hồ sơ công bố hoặc không đủ điều kiện pháp lý để sang tên.',
      'Yêu cầu cần được ghi nhận trong thời gian kiểm tra xe và có biên bản của nhân viên điều phối.',
    ],
  },
  {
    title: 'Trường hợp không hoàn cọc',
    paragraphs: [
      'Khoản cọc có thể không được hoàn khi người mua tự ý hủy sau thời hạn cam kết mà không có lý do thuộc phạm vi chính sách.',
      'Chi tiết luôn được quy định trong hợp đồng đặt cọc của từng giao dịch.',
    ],
  },
  {
    title: 'Quy trình xử lý',
    paragraphs: [
      'Yêu cầu hoàn cọc được tiếp nhận qua tư vấn viên hoặc trang chi tiết giao dịch.',
      'Sau khi hồ sơ được duyệt, tiền hoàn được gửi về phương thức thanh toán ban đầu hoặc tài khoản ngân hàng đã xác minh.',
    ],
  },
  {
    title: 'Thời gian hoàn tiền',
    paragraphs: [
      'Thời gian xử lý nội bộ dự kiến từ 1 đến 3 ngày làm việc. Thời gian tiền về phụ thuộc vào ngân hàng và cổng thanh toán.',
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      description="Điều kiện, hồ sơ và thời gian xử lý yêu cầu hoàn tiền đặt cọc."
      sections={sections}
      title="Chính sách hoàn cọc"
      updatedAt="01/07/2026"
    />
  );
}
