'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type AuthUser = {
  fullName: string;
  email?: string;
  phone?: string;
  provider: 'phone' | 'google';
};

type AuthContextValue = {
  user: AuthUser | null;
  ready: boolean;
  loginWithPhone: (phone: string) => void;
  loginWithGoogle: () => void;
  registerWithPhone: (fullName: string, phone: string) => void;
  logout: () => void;
};

const STORAGE_KEY = 'xedan-auth-user';
const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedUser = window.localStorage.getItem(STORAGE_KEY);

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser) as AuthUser);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    setReady(true);
  }, []);

  function persistUser(nextUser: AuthUser) {
    setUser(nextUser);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      ready,
      loginWithPhone: (phone) =>
        persistUser({
          fullName: 'Nguyễn Văn An',
          phone,
          provider: 'phone',
        }),
      loginWithGoogle: () =>
        persistUser({
          fullName: 'Nguyễn Văn An',
          email: 'an.nguyen@gmail.com',
          provider: 'google',
        }),
      registerWithPhone: (fullName, phone) =>
        persistUser({
          fullName,
          phone,
          provider: 'phone',
        }),
      logout: () => {
        setUser(null);
        window.localStorage.removeItem(STORAGE_KEY);
      },
    }),
    [ready, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
