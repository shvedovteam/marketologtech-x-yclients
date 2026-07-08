import React, { useState } from 'react';
import { Layers, Check, MessageSquare, ArrowRight, UserCheck } from 'lucide-react';

interface NewsletterSectionProps {
  onScrollToForm: () => void;
}

export default function NewsletterSection({ onScrollToForm }: NewsletterSectionProps) {
  const [selectedChannel, setSelectedChannel] = useState<'whatsapp' | 'sms'>('whatsapp');
  const [copied, setCopied] = useState(false);

  const whatsappMessage = "Здравствуйте, Анна! Спасибо, что посетили наш салон на прошлой неделе. Будем рады видеть вас снова! Для вас открыта предварительная запись на обновление маникюра на удобное время. Забронировать слот онлайн: clck.ru/beauty";
  const smsMessage = "Анна, ждем вас снова в салоне Эстетика! Запись на повторный визит к мастеру Елене со скидкой 5% на следующую неделю: clck.ru/beauty";

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedChannel === 'whatsapp' ? whatsappMessage : smsMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="newsletters" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text block */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Таргетированные рассылки
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Рассылки не по всей базе, а по понятным сегментам
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              MarketologTech помогает не просто отправить сообщение. Сначала система выделяет сегмент: 
              клиенты после первого визита, клиенты без будущей записи, те, кто давно не был, 
              клиенты конкретного мастера или группы услуг.
            </p>
            <p className="text-base text-gray-500">
              После этого можно подготовить сообщение и отправить рассылку из личного кабинета.
            </p>

            <div className="pt-4">
              <button
                onClick={onScrollToForm}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Посмотреть, кого можно вернуть
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Visual simulation block */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-150/80 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200/60 pb-4">
              <div className="flex items-center gap-2.5">
                <Layers className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-gray-950 text-sm sm:text-base">Живой пример сегментирования</span>
              </div>
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Шаблон из библиотеки</span>
            </div>

            {/* Segment Card */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-2xs space-y-4">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Выбранный сегмент</span>
                <h4 className="font-bold text-gray-900 text-base mt-0.5">Клиенты без повторной записи после первого визита</h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="border border-gray-50 bg-gray-50/20 rounded-lg p-2 text-center">
                  <span className="text-[10px] text-gray-400 block">Размер сегмента</span>
                  <span className="text-xs font-bold text-gray-800">326 клиентов</span>
                </div>
                <div className="border border-gray-50 bg-gray-50/20 rounded-lg p-2 text-center">
                  <span className="text-[10px] text-gray-400 block">Период визита</span>
                  <span className="text-xs font-bold text-gray-800">30 дней</span>
                </div>
                <div className="border border-gray-50 bg-gray-50/20 rounded-lg p-2 text-center">
                  <span className="text-[10px] text-gray-400 block">Будущая запись</span>
                  <span className="text-xs font-bold text-rose-600">Отсутствует</span>
                </div>
                <div className="border border-gray-50 bg-gray-50/20 rounded-lg p-2 text-center">
                  <span className="text-[10px] text-gray-400 block">Средний чек</span>
                  <span className="text-xs font-bold text-gray-800">3 200 ₽</span>
                </div>
              </div>

              <div className="bg-blue-50/40 rounded-lg p-3.5 border border-blue-100/50">
                <span className="text-[10px] font-bold text-blue-800 uppercase block mb-1">Рекомендация по коммуникации:</span>
                <p className="text-xs text-blue-950 font-medium leading-relaxed">
                  Написать в течение 3-5 дней после визита и предложить повторную запись без агрессивной скидки (чтобы не обесценивать услугу).
                </p>
              </div>
            </div>

            {/* Simulated Smartphone Chat Screen */}
            <div className="bg-white rounded-xl border border-gray-150 shadow-xs overflow-hidden">
              <div className="bg-gray-100 px-4 py-2.5 flex items-center justify-between border-b border-gray-200">
                <span className="text-[11px] font-bold text-gray-500">Симуляция отправки сообщения</span>
                <div className="flex gap-1">
                  <button 
                    onClick={() => setSelectedChannel('whatsapp')}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                      selectedChannel === 'whatsapp' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    WhatsApp
                  </button>
                  <button 
                    onClick={() => setSelectedChannel('sms')}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                      selectedChannel === 'sms' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    СМС
                  </button>
                </div>
              </div>

              <div className="p-4 bg-gray-50 min-h-[110px] flex items-center justify-center">
                <div className="bg-white border border-gray-100 rounded-2xl p-3 max-w-sm shadow-2xs relative">
                  <p className="text-xs text-gray-800 font-sans leading-relaxed">
                    {selectedChannel === 'whatsapp' ? whatsappMessage : smsMessage}
                  </p>
                  <div className="absolute bottom-1 right-2.5 text-[9px] text-gray-400">12:30</div>
                </div>
              </div>

              <div className="bg-gray-50 border-t border-gray-150 px-4 py-2 flex justify-end gap-2">
                <button 
                  onClick={handleCopy}
                  className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-3 text-xs font-semibold text-gray-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  {copied ? 'Скопировано!' : 'Скопировать текст'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
