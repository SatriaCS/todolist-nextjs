"use client";
export const dynamic = "force-dynamic";
export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
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
