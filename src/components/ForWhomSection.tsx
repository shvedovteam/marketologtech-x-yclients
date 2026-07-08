import React from 'react';
import { SALONS } from '../data';
import { 
  Scissors, 
  Waves, 
  HeartHandshake, 
  Sparkles, 
  Activity, 
  Feather, 
  Building2,
  AlertCircle
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scissors: Scissors,
  Waves: Waves,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
  Activity: Activity,
  Feather: Feather,
};

export default function ForWhomSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Целевая аудитория
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Подходит сетям, где уже есть база и повторные услуги
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Наш продукт создан для бизнеса с высокой частотой повторных визитов, где удержание клиента определяет прибыльность.
          </p>
        </div>

        {/* Salon Types Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {SALONS.map((salon) => {
            const Icon = iconMap[salon.icon] || Sparkles;
            return (
              <div 
                key={salon.name} 
                className="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-2xs transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-3.5">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  {salon.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Separate Crucial Note Block */}
        <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/20 p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-extrabold text-gray-950 text-base">Ключевое требование к масштабу</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Лучше всего продукт раскрывается в сетях, где уже накоплена активная клиентская база в YClients.
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-blue-800 font-bold uppercase tracking-wider pt-1.5">
                <AlertCircle className="h-3.5 w-3.5" />
                Только для тех, кто не хочет терять клиентов.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
