import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import { useAdminAuth } from "@/stores/adminAuth";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const isAuthenticated = useAdminAuth((s) => s.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AdminSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminTopbar />
        <main className="flex-1 overflow-y-auto bg-surface-sunken p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
