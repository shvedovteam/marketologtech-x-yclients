import React, { useState } from 'react';
import { MOCK_REVIEWS } from '../data';
import { Star, MessageSquare, AlertTriangle, ArrowRight, CheckSquare, Plus } from 'lucide-react';

export default function ReviewsSection() {
  const [activeReviewId, setActiveReviewId] = useState(MOCK_REVIEWS[0].id);
  const activeReview = MOCK_REVIEWS.find(r => r.id === activeReviewId) || MOCK_REVIEWS[0];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual simulation block (First, to balance layout rhythm) */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-150 rounded-2xl p-6 sm:p-8 space-y-6 lg:order-last">
            <div className="flex items-center justify-between border-b border-gray-200/60 pb-4">
              <span className="font-bold text-gray-950 text-sm sm:text-base flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                Обработка отзывов в реальном времени
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Раздел: Отзывы</span>
            </div>

            {/* List of review previews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MOCK_REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  onClick={() => setActiveReviewId(rev.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    activeReviewId === rev.id
                      ? 'bg-white border-blue-500 shadow-sm'
                      : 'bg-white/60 border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900 text-xs">{rev.clientName}</span>
                    <span className="text-[10px] text-gray-400 font-medium">{rev.date}</span>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-[11px] text-gray-500 mt-2 line-clamp-2 italic">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>
              ))}
            </div>

            {/* Simulated Action Engine (What MarketologTech does with this review) */}
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-2xs space-y-4">
              <div>
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block">Действие системы</span>
                <div className="flex items-center gap-2 mt-1">
                  {activeReview.rating <= 3 ? (
                    <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      Негативный отзыв — Риск оттока
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-emerald-700" />
                      Лояльный клиент — Точка роста
                    </span>
                  )}
                </div>
              </div>

              {/* Recommendation block */}
              <div className="bg-gray-50 rounded-lg p-3.5 border border-gray-100/50">
                <span className="text-[10px] font-bold text-blue-700 uppercase block mb-1">Рекомендация по обработке:</span>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  {activeReview.recommendation}
                </p>
              </div>

              {/* Task block */}
              <div className="border border-blue-100 bg-blue-50/20 rounded-xl p-3.5 flex items-start gap-3">
                <CheckSquare className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-blue-800 uppercase block">Созданная задача управляющему:</span>
                  <p className="text-xs text-gray-900 font-semibold mt-0.5">
                    {activeReview.taskTitle}
                  </p>
                  <span className="text-[10px] text-gray-400 font-medium block mt-1">
                    Статус: Ожидает выполнения • Назначено: Администратор Маяковской
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Text block */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Системный контроль сервиса
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Отзывы становятся не просто текстом, а сигналом для действий
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Отзывы помогают понять, где сервис работает хорошо, а где есть риск потерять клиента. MarketologTech показывает отзывы по мастерам и посещениям, помогает увидеть слабые места и превратить их в задачи.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Больше ни один плохой отзыв не останется без ответа администратора, а лояльные клиенты будут направлены на внешние площадки для улучшения рейтинга сети на картах.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
