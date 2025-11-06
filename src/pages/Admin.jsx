// src/pages/Admin.jsx
import React, { useEffect } from "react";

export default function Admin() {
  useEffect(() => {
    window.location.href = "/admin/index.html";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f4f2] text-[#5E1717]">
      <p className="text-lg font-semibold">Chargement de l’espace d’administration...</p>
    </div>
  );
}
