"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-12 px-6">
     {/* Footer */}
   
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-amber-500">✨</span>
            <h3 className="text-2xl font-bold text-white">Agra Sound</h3>
          </div>
          <p className="text-sm mb-6">
            Agra Pulathisi Parties and Entertainment Services LLC
          </p>
          <p className="text-xs text-zinc-500">
            © 2025 Agra Sound. All rights reserved.
          </p>
        </div>
     
    </footer>
  );
}
