"use client";
import { headers } from "next/headers";
export const dynamic = "force-dynamic"

export default function LogoutButton() {
  const headersList = headers();
  const host = headersList.get("host");

  const handleLogout = async () => {
    await fetch(`http://${host}/api/logout`, { method: 'POST' })
    window.location.href = '/'
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-red-500 hover:text-red-700"
    >
      Logout
    </button>
  )
}
