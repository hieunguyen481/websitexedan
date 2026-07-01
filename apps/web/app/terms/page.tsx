import { PolicyPage } from '../components/PolicyPage';

const sections = [
  {
    title: 'Phạm vi dịch vụ',
    paragraphs: [
      'Xe Dân Với Dân cung cấp nền tảng kết nối người mua và người bán, đồng thời hỗ trợ kiểm định, lịch xem xe, hồ sơ giao dịch và điều phối bàn giao.',
      'Thông tin trên từng hồ sơ xe được tổng hợp từ người bán và kết quả kiểm định tại thời điểm thực hiện.',
    ],
  },
  {
    title: 'Trách nhiệm người dùng',
    paragraphs: [
      'Người dùng cần cung cấp thông tin chính xác, không đăng tải nội dung vi phạm pháp luật và phối hợp xác minh khi tham gia giao dịch.',
      'Tài khoản và mã OTP không được chuyển giao cho người khác sử dụng.',
    ],
  },
  {
    title: 'Đặt lịch và đặt cọc',
    paragraphs: [
      'Lịch xem xe chỉ được xác nhận sau khi tư vấn viên liên hệ. Việc đặt cọc được thực hiện theo hợp đồng điện tử của từng giao dịch.',
      'Các khoản phí, thời hạn và điều kiện hoàn cọc phải được hiển thị trước khi người dùng xác nhận.',
    ],
  },
  {
    title: 'Giới hạn trách nhiệm',
    paragraphs: [
      'Báo cáo kiểm định phản ánh tình trạng xe tại thời điểm kiểm tra và không thay thế nghĩa vụ bảo dưỡng trong quá trình sử dụng.',
      'Các thay đổi phát sinh sau kiểm định sẽ được xử lý theo biên bản bàn giao và chính sách khiếu nại.',
    ],
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      description="Các quy định áp dụng khi sử dụng nền tảng và tham gia giao dịch."
      sections={sections}
      title="Điều khoản sử dụng"
      updatedAt="01/07/2026"
    />
  );
}
