'use client';

import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  Phone,
  UserRound,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { useAuth } from './AuthProvider';

function GoogleButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-line bg-white text-sm font-bold text-ink transition hover:border-slate-400 hover:bg-canvas"
      onClick={onClick}
      type="button"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-line text-sm font-extrabold text-[#4285f4]">
        G
      </span>
      {label}
    </button>
  );
}

function AuthDivider() {
  return (
    <div className="flex items-center gap-3 py-1">
      <span className="h-px flex-1 bg-line" />
      <span className="text-xs font-medium text-slate-400">hoặc dùng số điện thoại</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export function LoginForm({ nextPath = '/account' }: { nextPath?: string }) {
  const { loginWithGoogle, loginWithPhone } = useAuth();
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  function finishLogin(action: () => void) {
    action();
    const safeNextPath =
      nextPath.startsWith('/') && !nextPath.startsWith('//') ? nextPath : '/account';
    router.push(safeNextPath);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    finishLogin(() => loginWithPhone(phone));
  }

  return (
    <form className="rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8" onSubmit={handleSubmit}>
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-leaf text-mint">
        <LockKeyhole aria-hidden="true" size={22} />
      </div>
      <h2 className="mt-5 text-2xl font-extrabold text-ink">Đăng nhập</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Chọn Google hoặc xác thực nhanh bằng số điện thoại.
      </p>

      <div className="mt-6">
        <GoogleButton
          label="Tiếp tục với Google"
          onClick={() => finishLogin(loginWithGoogle)}
        />
      </div>
      <div className="my-5">
        <AuthDivider />
      </div>

      <label className="grid gap-2 text-sm font-bold text-ink">
        <span className="flex items-center gap-2">
          <Phone aria-hidden="true" className="text-slate-400" size={16} />
          Số điện thoại
        </span>
        <input
          autoComplete="tel"
          className="h-12 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
          inputMode="tel"
          onChange={(event) => setPhone(event.target.value)}
          placeholder="09xx xxx xxx"
          required
          type="tel"
          value={phone}
        />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-ink">
        <span className="flex items-center gap-2">
          <LockKeyhole aria-hidden="true" className="text-slate-400" size={16} />
          Mã OTP
        </span>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <input
            autoComplete="one-time-code"
            className="h-12 min-w-0 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
            inputMode="numeric"
            maxLength={6}
            placeholder="6 chữ số"
            required
          />
          <button
            className="rounded-lg border border-line bg-white px-3 text-xs font-bold text-mint hover:border-mint"
            onClick={() => setOtpSent(true)}
            type="button"
          >
            {otpSent ? 'Đã gửi' : 'Gửi mã'}
          </button>
        </div>
      </label>
      {otpSent && (
        <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-mint">
          <CheckCircle2 aria-hidden="true" size={15} />
          Mã OTP đã được gửi tới số điện thoại của bạn.
        </p>
      )}
      <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white transition hover:bg-ink">
        Đăng nhập
        <ArrowRight aria-hidden="true" size={17} />
      </button>
    </form>
  );
}

export function RegisterForm() {
  const { loginWithGoogle, registerWithPhone } = useAuth();
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  function finishRegistration(action: () => void) {
    action();
    router.push('/account');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    finishRegistration(() => registerWithPhone(fullName, phone));
  }

  return (
    <form className="rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8" onSubmit={handleSubmit}>
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-leaf text-mint">
        <UserRound aria-hidden="true" size={22} />
      </div>
      <h2 className="mt-5 text-2xl font-extrabold text-ink">Đăng ký</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Tạo tài khoản nhanh bằng Google hoặc số điện thoại.
      </p>

      <div className="mt-6">
        <GoogleButton
          label="Đăng ký với Google"
          onClick={() => finishRegistration(loginWithGoogle)}
        />
      </div>
      <div className="my-5">
        <AuthDivider />
      </div>

      <label className="grid gap-2 text-sm font-bold text-ink">
        <span className="flex items-center gap-2">
          <UserRound aria-hidden="true" className="text-slate-400" size={16} />
          Họ và tên
        </span>
        <input
          autoComplete="name"
          className="h-12 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Nguyễn Văn A"
          required
          value={fullName}
        />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-ink">
        <span className="flex items-center gap-2">
          <Phone aria-hidden="true" className="text-slate-400" size={16} />
          Số điện thoại
        </span>
        <input
          autoComplete="tel"
          className="h-12 rounded-lg border border-line bg-canvas px-4 font-normal outline-none focus:border-mint"
          inputMode="tel"
          onChange={(event) => setPhone(event.target.value)}
          placeholder="09xx xxx xxx"
          required
          type="tel"
          value={phone}
        />
      </label>
      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-500">
        <input className="mt-1 h-4 w-4 accent-mint" required type="checkbox" />
        Tôi đồng ý với điều khoản sử dụng và chính sách quyền riêng tư.
      </label>
      <button className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-mint px-5 text-sm font-bold text-white transition hover:bg-ink">
        Tạo tài khoản
        <ArrowRight aria-hidden="true" size={17} />
      </button>
    </form>
  );
}
