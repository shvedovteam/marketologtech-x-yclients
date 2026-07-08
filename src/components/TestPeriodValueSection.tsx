import React from 'react';
import { TEST_VALUE_ITEMS } from '../data';
import { ArrowRight, Sparkles } from 'lucide-react';

interface TestPeriodValueSectionProps {
  onScrollToForm: () => void;
}

export default function TestPeriodValueSection({ onScrollToForm }: TestPeriodValueSectionProps) {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Тестовый аудит
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            За тест покажем первые точки роста внутри вашей базы
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Мы не предлагаем абстрактную теорию. Вы увидите реальные цифры упущенной выгоды и список действий на основе данных ваших филиалов.
          </p>
        </div>

        {/* 5 Cards grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {TEST_VALUE_ITEMS.map((item, idx) => (
            <div 
              key={item.id} 
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold text-xs font-mono">
                  {idx + 1}
                </div>
                <h3 className="mt-4 font-bold text-gray-900 text-sm leading-snug">{item.title}</h3>
                <p className="mt-2 text-[11px] text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner bottom */}
        <div className="mt-12 text-center space-y-3">
          <button
            onClick={onScrollToForm}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            <Sparkles className="h-4.5 w-4.5" />
            Записаться на тест
          </button>
          <p className="text-xs text-gray-500 font-medium">
            Первые выводы — на данных вашей базы YClients
          </p>
        </div>
      </div>
    </section>
  );
}
