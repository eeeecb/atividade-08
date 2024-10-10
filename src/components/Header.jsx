import React from "react";
import { Menu, Search, Bell } from "lucide-react";
import mewGif from "../assets/mew.gif";

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Menu className="text-blue-400 cursor-pointer" />
          <h1 className="text-xl font-bold text-blue-400">
            Atividade 08 | Calculadora de IMC
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="text-gray-400 cursor-pointer" />
          <Bell className="text-gray-400 cursor-pointer" />
          <img
            src={mewGif}
            alt="Mew GIF"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
