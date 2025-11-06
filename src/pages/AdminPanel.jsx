import React, { useEffect } from "react";

export default function AdminPanel() {
  useEffect(() => {
    window.location.href = "/admin/index.html"; // redirige vers le vrai CMS
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f4f2] text-[#5E1717]">
      <p className="text-lg font-semibold">Chargement du panneau CMS...</p>
    </div>
  );
}
