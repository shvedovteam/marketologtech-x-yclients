import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onScrollToForm: () => void;
}

export default function Navbar({ onScrollToForm }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-100">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <span className="font-sans text-lg font-bold tracking-tight text-gray-900">
              Marketolog<span className="text-blue-600">Tech</span>
            </span>
            <span className="ml-1.5 rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600 uppercase tracking-wider">
              x YClients
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#problems" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Проблемы
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Как работает
          </a>
          <a href="#scenarios" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Сценарии
          </a>
          <a href="#newsletters" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Рассылки
          </a>
          <a href="#masters" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Мастера
          </a>
          <a href="#faq" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onScrollToForm}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Записаться на тест
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
