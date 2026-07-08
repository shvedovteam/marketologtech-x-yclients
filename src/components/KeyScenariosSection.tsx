import React from 'react';
import { SCENARIOS } from '../data';
import { UserPlus, Zap, Mail, Tag, Calendar, CheckSquare } from 'lucide-react';

const scenarioIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  scen_1: UserPlus,
  scen_2: Zap,
  scen_3: Mail,
  scen_4: Tag,
  scen_5: Calendar,
  scen_6: CheckSquare,
};

interface KeyScenariosSectionProps {
  onScrollToForm: () => void;
}

export default function KeyScenariosSection({ onScrollToForm }: KeyScenariosSectionProps) {
  return (
    <section id="scenarios" className="py-20 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Практическая польза
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Что можно делать после подключения
          </h2>
          <p className="mt-4 text-base text-gray-500">
            MarketologTech превращает сухую статистику в оцифрованные алгоритмы работы, которые ежедневно приносят пользу салону.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SCENARIOS.map((scenario) => {
            const Icon = scenarioIcons[scenario.id] || CheckSquare;
            return (
              <div 
                key={scenario.id} 
                className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-gray-900 text-base">{scenario.title}</h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">{scenario.description}</p>
                </div>
                {scenario.badge && (
                  <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-blue-600 tracking-wider uppercase">
                      {scenario.badge}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onScrollToForm}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Подключить YClients и протестировать
          </button>
        </div>
      </div>
    </section>
  );
}
