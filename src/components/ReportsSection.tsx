import React from 'react';
import { ClipboardList, AlertCircle, Users, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ReportsSectionProps {
  onScrollToForm: () => void;
}

export default function ReportsSection({ onScrollToForm }: ReportsSectionProps) {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Ежедневный фокус
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Собственник получает не отчет ради отчета, а список действий
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Каждый день и каждую неделю собственнику важна короткая выжимка: что произошло, где есть риск, сколько клиентов или денег теряется и что нужно сделать.
            </p>
            <p className="text-base text-gray-500">
              MarketologTech собирает рекомендации из разных разделов в задачи, чтобы они не терялись и сразу уходили в работу управляющим на точках.
            </p>

            <div className="pt-4">
              <button
                onClick={onScrollToForm}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Записаться на тест
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Visual Day Summary block */}
          <div className="lg:col-span-7 bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <ClipboardList className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-gray-950 text-sm sm:text-base">Сводка за день</span>
              </div>
              <span className="text-xs font-semibold text-gray-400">Сегодня, 7 июля</span>
            </div>

            {/* Checklist of actions/risks */}
            <div className="mt-6 space-y-4">
              {/* Item 1 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-rose-100 bg-rose-50/10 hover:bg-rose-50/20 transition-all">
                <ShieldAlert className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-gray-900 text-xs sm:text-sm">Перезапись после первого визита ниже нормы</h5>
                  <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">
                    Филиал на Маяковской: возвращаемость новичков за неделю упала до 24% (норма сети: 45%).
                  </p>
                  <span className="inline-block text-[10px] text-rose-700 font-semibold mt-1">
                    Рекомендация: Проверить загрузку новых мастеров и отправить сообщения
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-amber-100 bg-amber-50/10 hover:bg-amber-50/20 transition-all">
                <Users className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-gray-900 text-xs sm:text-sm">47 клиентов без будущей записи</h5>
                  <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">
                    Вчера завершились визиты у 47 клиентов, которые не сделали повторную запись на месте.
                  </p>
                  <span className="inline-block text-[10px] text-amber-700 font-semibold mt-1">
                    Рекомендация: Запланировать автоматический пуш-опрос на 4-й день после визита
                  </span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-blue-100 bg-blue-50/10 hover:bg-blue-50/20 transition-all">
                <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-gray-900 text-xs sm:text-sm">2 мастера с загрузкой ниже 50%</h5>
                  <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">
                    У барберов Александра и Игоря свободно в сумме 12 слотов на завтрашний день.
                  </p>
                  <span className="inline-block text-[10px] text-blue-700 font-semibold mt-1">
                    Рекомендация: Предложить акцию &quot;Горящие часы&quot; в СМС лояльным клиентам
                  </span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-emerald-100 bg-emerald-50/10 hover:bg-emerald-50/20 transition-all">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-gray-900 text-xs sm:text-sm">Есть 3 новые задачи для управляющего</h5>
                  <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">
                    Задачи по обзвону недовольных и точечным реактивациям базы автоматически распределены.
                  </p>
                  <span className="inline-block text-[10px] text-emerald-700 font-semibold mt-1">
                    Статус: Назначены и переданы в личные кабинеты на точках
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
