import React, { useState } from 'react';
import { MOCK_MASTERS } from '../data';
import { Award, DollarSign, MessageSquare, AlertCircle, ArrowUpRight, Percent } from 'lucide-react';

export default function MastersSection() {
  const [selectedMaster, setSelectedMaster] = useState(MOCK_MASTERS[0]);

  return (
    <section id="masters" className="py-20 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Эффективность команды
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Видно, какие мастера загружены, а где теряется выручка
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Для сети важно смотреть не только на общую выручку. Нужно понимать, кто из мастеров загружен, кто приносит деньги, кому не хватает отзывов и где нужна поддержка.
            </p>
            <p className="text-base text-gray-500">
              MarketologTech показывает загрузку и выручку по специалистам, а также дает рекомендации, что можно усилить.
            </p>

            {/* Master Selector buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Специалисты для анализа:</span>
              <div className="flex flex-wrap gap-2">
                {MOCK_MASTERS.map((master) => (
                  <button
                    key={master.id}
                    onClick={() => setSelectedMaster(master)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      selectedMaster.id === master.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {master.name.split(' ')[0]} ({master.specialty.split('-').pop()})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Master Dashboard mock */}
          <div className="lg:col-span-7 bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className={`h-11 w-11 rounded-full ${selectedMaster.avatarColor} flex items-center justify-center text-sm font-bold shadow-2xs`}>
                  {selectedMaster.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{selectedMaster.name}</h4>
                  <span className="text-xs text-gray-500 font-medium">{selectedMaster.specialty}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-150 rounded-lg px-2.5 py-1 text-xs font-semibold text-gray-500">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                Статистика YClients
              </div>
            </div>

            {/* Master Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {/* Metric 1: Occupancy */}
              <div className="border border-gray-100/80 rounded-xl p-4 bg-gray-50/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Загрузка</span>
                  <Percent className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-2xl font-bold text-gray-900">{selectedMaster.occupancy}%</span>
                  <span className="text-[10px] font-semibold text-gray-400">от смен</span>
                </div>
                <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      selectedMaster.occupancy > 75 ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${selectedMaster.occupancy}%` }}
                  ></div>
                </div>
              </div>

              {/* Metric 2: Revenue */}
              <div className="border border-gray-100/80 rounded-xl p-4 bg-gray-50/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Выручка</span>
                  <DollarSign className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-2xl font-bold text-gray-900">{selectedMaster.revenue}</span>
                  <span className="text-[10px] font-semibold text-gray-400">за 30д</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1.5 font-medium flex items-center gap-0.5">
                  <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                  Услуги + продажи
                </p>
              </div>

              {/* Metric 3: Reviews */}
              <div className="border border-gray-100/80 rounded-xl p-4 bg-gray-50/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Отзывы</span>
                  <MessageSquare className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-2xl font-bold text-gray-900">★ {selectedMaster.rating}</span>
                  <span className="text-[10px] font-semibold text-gray-500">({selectedMaster.reviewsCount})</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1.5 font-medium">98% лояльности</p>
              </div>
            </div>

            {/* AI Recommendation Banner */}
            <div className="mt-6 border border-blue-100 bg-blue-50/40 rounded-xl p-4 space-y-1">
              <div className="flex items-center gap-1.5 text-blue-800 text-[10px] font-bold uppercase tracking-wider">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                Рекомендация по специалисту
              </div>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">
                {selectedMaster.recommendation}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
