import { BadgeCheck, Building2, Mail, Phone, Save, ShieldCheck, UserRound } from 'lucide-react';
import { AccountPageHeader } from '../../components/AccountPageHeader';
import { accountProfile } from '../../data/account';

export default function ProfilePage() {
  return (
    <div>
      <AccountPageHeader
        description="Quản lý thông tin liên hệ và trạng thái xác thực dùng trong giao dịch."
        title="Hồ sơ cá nhân"
      />

      <form className="mt-6 grid gap-7">
        <section className="rounded-lg border border-line bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-extrabold text-ink">Thông tin cơ bản</h2>
              <p className="mt-1 text-sm text-slate-500">Dùng để liên hệ và lập hồ sơ giao dịch.</p>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-leaf text-mint">
              <UserRound aria-hidden="true" size={20} />
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ProfileField icon={UserRound} label="Họ và tên" value={accountProfile.fullName} />
            <ProfileField icon={Phone} label="Số điện thoại" type="tel" value={accountProfile.phone} />
            <ProfileField icon={Mail} label="Email" type="email" value={accountProfile.email} />
            <ProfileField icon={Building2} label="Tỉnh/thành phố" value={accountProfile.city} />
          </div>
        </section>

        <section className="rounded-lg border border-line bg-white p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-leaf text-mint">
              <ShieldCheck aria-hidden="true" size={20} />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="font-extrabold text-ink">Xác thực danh tính</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    CCCD đã được đối chiếu trước khi tham gia giao dịch.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-md bg-leaf px-3 py-2 text-xs font-bold text-mint">
                  <BadgeCheck aria-hidden="true" size={15} />
                  {accountProfile.identityStatus}
                </span>
              </div>
            </div>
          </div>
        </section>

        <div>
          <button className="inline-flex h-11 items-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white">
            <Save aria-hidden="true" size={17} />
            Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  );
}

type ProfileFieldProps = {
  icon: typeof UserRound;
  label: string;
  value: string;
  type?: string;
};

function ProfileField({ icon: Icon, label, value, type = 'text' }: ProfileFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink">
      <span className="flex items-center gap-2">
        <Icon aria-hidden="true" className="text-slate-400" size={16} />
        {label}
      </span>
      <input
        className="h-11 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
        defaultValue={value}
        type={type}
      />
    </label>
  );
}
