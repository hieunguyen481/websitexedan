type AccountPageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function AccountPageHeader({
  eyebrow = 'Tài khoản của tôi',
  title,
  description,
}: AccountPageHeaderProps) {
  return (
    <header className="border-b border-line pb-6">
      <p className="text-sm font-bold text-mint">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-extrabold text-ink">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
    </header>
  );
}
