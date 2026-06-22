# Xe Dan Voi Dan

Monorepo khoi dau cho nen tang mua ban xe cu co dieu phoi: website public, API, va shared package.

## Stack

- `apps/web`: Next.js App Router + Tailwind CSS
- `apps/api`: NestJS API skeleton
- `packages/shared`: TypeScript types va constants dung chung
- Tooling: pnpm workspace + Turborepo

## Chay local

```bash
pnpm install
pnpm dev
```

Mac dinh:

- Web: `http://localhost:3000`
- API: `http://localhost:3001`

## Cau truc

```text
apps/
  web/      Website cho nguoi mua va nguoi ban
  api/      API gateway/NestJS
packages/
  shared/   Kieu du lieu, constants, helpers dung chung
```

## Lenh hay dung

```bash
pnpm build
pnpm lint
pnpm typecheck
```

## Buoc tiep theo

1. Cai dependency bang `pnpm install`.
2. Cau hinh `.env` tu cac file `.env.example`.
3. Chay `docker compose up -d` neu can PostgreSQL va Redis local.
4. Mo rong schema database va module auth/vehicles theo tai lieu ky thuat.
