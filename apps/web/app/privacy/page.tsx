import { PolicyPage } from '../components/PolicyPage';

const sections = [
  {
    title: 'Dữ liệu được thu thập',
    paragraphs: [
      'Chúng tôi thu thập thông tin liên hệ, dữ liệu tài khoản, thông tin xe và tài liệu cần thiết để xác minh giao dịch.',
      'Dữ liệu kỹ thuật như thiết bị, địa chỉ IP và lịch sử truy cập có thể được ghi nhận để bảo vệ hệ thống.',
    ],
  },
  {
    title: 'Mục đích sử dụng',
    paragraphs: [
      'Thông tin được dùng để xác thực tài khoản, xếp lịch, thực hiện kiểm định, hỗ trợ thanh toán và cập nhật tiến độ giao dịch.',
      'Chúng tôi chỉ gửi nội dung tiếp thị khi người dùng đã đồng ý.',
    ],
  },
  {
    title: 'Chia sẻ và lưu trữ',
    paragraphs: [
      'Dữ liệu chỉ được chia sẻ với đơn vị thanh toán, vận chuyển hoặc cơ quan có thẩm quyền trong phạm vi cần thiết.',
      'Hồ sơ giao dịch được lưu theo thời hạn pháp luật và chính sách vận hành của nền tảng.',
    ],
  },
  {
    title: 'Quyền của người dùng',
    paragraphs: [
      'Người dùng có thể yêu cầu xem, cập nhật hoặc điều chỉnh thông tin cá nhân trong tài khoản.',
      'Yêu cầu về dữ liệu có thể gửi qua email hello@xedanvoidan.vn.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PolicyPage
      description="Cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân."
      sections={sections}
      title="Chính sách quyền riêng tư"
      updatedAt="01/07/2026"
    />
  );
}
