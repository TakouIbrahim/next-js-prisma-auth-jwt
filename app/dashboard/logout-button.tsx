'use client';

import { logout } from '@/app/api/auth/login/route';
export default function LogoutButton() {
  return (
    <button
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-all hover:text-gray-900"
      onClick={async () => {
        await logout();
      }}
    >
      Logout
    </button>
  );
}
