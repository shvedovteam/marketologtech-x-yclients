import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  Layers, 
  UserCheck, 
  CheckSquare, 
  MessageSquare, 
  ArrowRight, 
  AlertCircle, 
  Check, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { MOCK_MASTERS, MOCK_REVIEWS } from '../data';

export default function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState<'summary' | 'clients' | 'segments' | 'masters' | 'tasks'>('summary');
  const [tasks, setTasks] = useState([
    { id: 't1', text: 'Связаться с Марией Д. (негативный отзыв) и начислить 500 бонусов', completed: false },
    { id: 't2', text: 'Запустить рассылку по клиентам Александра Вернера (загрузка 42%)', completed: false },
    { id: 't3', text: 'Настроить цепочку писем на 4-й день после первого визита', completed: true },
    { id: 't4', text: 'Выгрузить список "уснувших" клиентов (более 90 дней без визита)', completed: false }
  ]);
  const [newsletterSent, setNewsletterSent] = useState(false);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleSendNewsletter = () => {
    setNewsletterSent(true);
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  return (
    <div className="w-full rounded-2xl border border-gray-200/80 bg-white shadow-xl shadow-gray-100/50 overflow-hidden font-sans">
      {/* Dashboard Header */}
      <div className="border-b border-gray-100 bg-gray-50/50 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <BarChart3 className="h-4.5 w-4.5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Кабинет: Сеть салонов «Эстетика»</h4>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-emerald-600 font-medium">Синхронизация с YClients активна</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto bg-white border border-gray-100 rounded-lg px-2.5 py-1 text-xs font-medium text-gray-500 shadow-2xs">
          <span>Период: последние 30 дней</span>
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
        {/* Sidebar / Tabs */}
        <div className="md:col-span-3 border-r border-gray-100 bg-gray-50/30 p-2 flex flex-row md:flex-col gap-1 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('summary')}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'summary' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BarChart3 className="h-4 w-4 shrink-0" />
            Сводка дня
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'clients' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="h-4 w-4 shrink-0" />
            База клиентов
          </button>
          <button
            onClick={() => setActiveTab('segments')}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'segments' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Layers className="h-4 w-4 shrink-0" />
            Сегменты
          </button>
          <button
            onClick={() => setActiveTab('masters')}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'masters' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <UserCheck className="h-4 w-4 shrink-0" />
            Анализ мастеров
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'tasks' 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <CheckSquare className="h-4 w-4 shrink-0" />
            Задачи ({tasks.filter(t => !t.completed).length})
          </button>
        </div>

        {/* Workspace panel */}
        <div className="md:col-span-9 p-5 flex flex-col bg-white">
          <AnimatePresence mode="wait">
            {activeTab === 'summary' && (
              <motion.div
                key="summary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                <div>
                  <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Главные показатели филиалов</h5>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-gray-100 p-3.5 bg-gray-50/30">
                      <p className="text-xs text-gray-500 font-medium">Без повторной записи</p>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-xl font-bold text-gray-900">326 клиентов</span>
                        <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-1 py-0.5 rounded">-12% возвращаемости</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">пришли один раз за 30 дней и не записались повторно</p>
                    </div>

                    <div className="rounded-xl border border-gray-100 p-3.5 bg-gray-50/30">
                      <p className="text-xs text-gray-500 font-medium">Неявки за месяц</p>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-xl font-bold text-gray-900">14 визитов</span>
                        <span className="text-[11px] font-semibold text-amber-600 bg-amber-50 px-1 py-0.5 rounded">Потери 44.8 тыс ₽</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">забронированные слоты, куда клиенты не пришли</p>
                    </div>
                  </div>
                </div>

                {/* Recommendations container */}
                <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-4 relative overflow-hidden mt-2">
                  <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full uppercase tracking-wider">Рекомендация на сегодня</span>
                      </div>
                      <h6 className="font-bold text-gray-950 text-sm">326 новых клиентов могут не вернуться</h6>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Система нашла аномальный отток после первого визита в филиале на Маяковской. 
                        Рекомендуется автоматически сформировать сегмент и запустить рассылку-опрос в WhatsApp с предложением повторного визита.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-blue-700">Ожидаемый возврат: ~45-60 повторных визитов</span>
                    <button 
                      onClick={() => setActiveTab('segments')}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Посмотреть сегмент
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'clients' && (
              <motion.div
                key="clients"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Выборка: Нет записи после визита</h5>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">326 человек</span>
                </div>

                <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
                  <div className="grid grid-cols-12 bg-gray-50 px-4 py-2.5 text-[11px] font-bold text-gray-500">
                    <div className="col-span-4">Клиент</div>
                    <div className="col-span-3">Последний визит</div>
                    <div className="col-span-5">Рекомендация действия</div>
                  </div>

                  <div className="grid grid-cols-12 px-4 py-3 text-xs items-center hover:bg-gray-50/50 transition-colors">
                    <div className="col-span-4 font-semibold text-gray-900">Алина Мельникова</div>
                    <div className="col-span-3 text-gray-500">
                      <div>28 дней назад</div>
                      <div className="text-[10px] text-gray-400">Елена С. (Ногти)</div>
                    </div>
                    <div className="col-span-5 text-blue-600 font-medium">
                      Написать в WhatsApp: предложить коррекцию маникюра (срок 4 недели)
                    </div>
                  </div>

                  <div className="grid grid-cols-12 px-4 py-3 text-xs items-center hover:bg-gray-50/50 transition-colors">
                    <div className="col-span-4 font-semibold text-gray-900">Дмитрий Семенов</div>
                    <div className="col-span-3 text-gray-500">
                      <div>35 дней назад</div>
                      <div className="text-[10px] text-gray-400">Александр В. (Стрижка)</div>
                    </div>
                    <div className="col-span-5 text-amber-600 font-medium">
                      СМС-напоминание: обновить мужскую стрижку у Александра
                    </div>
                  </div>

                  <div className="grid grid-cols-12 px-4 py-3 text-xs items-center hover:bg-gray-50/50 transition-colors">
                    <div className="col-span-4 font-semibold text-gray-900">Юлия Белова</div>
                    <div className="col-span-3 text-gray-500">
                      <div>21 день назад</div>
                      <div className="text-[10px] text-gray-400">Елена С. (Педикюр)</div>
                    </div>
                    <div className="col-span-5 text-emerald-600 font-medium">
                      Задать вопрос о качестве услуги (первый визит, нет перезаписи)
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-gray-400 italic">
                  * Данные подтягиваются из карточек визитов YClients автоматически, обновляются в реальном времени.
                </div>
              </motion.div>
            )}

            {activeTab === 'segments' && (
              <motion.div
                key="segments"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <div>
                      <h5 className="font-bold text-gray-900 text-sm">Сегмент: Без повторной записи (первый визит)</h5>
                      <p className="text-xs text-gray-500 mt-0.5">Фильтр: Был 1 визит за 30 дней, будущих записей в YClients: 0</p>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">326 контактов</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="border border-gray-100 rounded-lg p-2.5 text-center bg-gray-50/30">
                      <span className="text-[10px] text-gray-400 block font-medium">Охвачено мастеров</span>
                      <span className="text-sm font-bold text-gray-800">7 специалистов</span>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-2.5 text-center bg-gray-50/30">
                      <span className="text-[10px] text-gray-400 block font-medium">Средний чек сегмента</span>
                      <span className="text-sm font-bold text-gray-800">3 200 ₽</span>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-2.5 text-center bg-gray-50/30">
                      <span className="text-[10px] text-gray-400 block font-medium">Потенциал выручки</span>
                      <span className="text-sm font-bold text-emerald-600">1 043 200 ₽</span>
                    </div>
                  </div>

                  <div className="border border-gray-100 rounded-xl p-3 bg-gray-50/20 space-y-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Рекомендуемый шаблон сообщения</span>
                    <p className="text-xs text-gray-700 bg-white border border-gray-100 rounded-lg p-2.5 leading-relaxed font-mono">
                      &quot;Здравствуйте, [Имя]! Нам очень важно узнать ваше мнение. Недавно вы впервые посетили наш салон. Все ли вам понравилось? Будем рады видеть вас снова, для вас действует спецпредложение на повторный визит в течение 7 дней: [Ссылка_на_запись]&quot;
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button 
                    onClick={handleSendNewsletter}
                    disabled={newsletterSent}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white shadow-sm transition-all ${
                      newsletterSent ? 'bg-emerald-600' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {newsletterSent ? (
                      <>
                        <Check className="h-4 w-4 animate-scale-in" />
                        Рассылка запущена! (Идёт отправка...)
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Запустить рассылку в WhatsApp/СМС
                      </>
                    )}
                  </button>
                  <span className="text-[10px] text-gray-400 font-medium">
                    * Сообщения отправляются только клиентам, у которых нет активной записи в YClients.
                  </span>
                </div>
              </motion.div>
            )}

            {activeTab === 'masters' && (
              <motion.div
                key="masters"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Загрузка специалистов и упущенная выгода</h5>
                  <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">Средняя загрузка: 58%</span>
                </div>

                <div className="space-y-3">
                  {MOCK_MASTERS.map((master) => (
                    <div key={master.id} className="border border-gray-100 rounded-xl p-3.5 hover:border-gray-200 transition-colors space-y-2.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`h-8 w-8 rounded-full ${master.avatarColor} flex items-center justify-center text-xs font-bold`}>
                            {master.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h6 className="font-bold text-gray-900 text-xs sm:text-sm">{master.name}</h6>
                            <span className="text-[10px] text-gray-400 font-semibold">{master.specialty}</span>
                          </div>
                        </div>

                        {/* Progress Bar occupancy */}
                        <div className="flex items-center gap-3">
                          <div className="w-24 bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                master.occupancy > 75 
                                  ? 'bg-emerald-500' 
                                  : master.occupancy > 50 
                                    ? 'bg-blue-500' 
                                    : 'bg-amber-500'
                              }`}
                              style={{ width: `${master.occupancy}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-bold text-gray-700 w-8 text-right">{master.occupancy}%</span>
                        </div>
                      </div>

                      <div className="bg-gray-50/50 rounded-lg p-2.5 text-xs text-gray-600 border border-gray-100/50">
                        <span className="font-bold text-gray-900 block mb-0.5 text-[11px] uppercase tracking-wider text-blue-700">Аналитика и Действие:</span>
                        {master.recommendation}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'tasks' && (
              <motion.div
                key="tasks"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Чек-лист задач управляющего на сегодня</h5>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      Выполнено: {tasks.filter(t => t.completed).length} из {tasks.length}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {tasks.map((task) => (
                      <div 
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          task.completed 
                            ? 'bg-gray-50/50 border-gray-100 text-gray-400 line-through' 
                            : 'bg-white border-gray-100 hover:border-blue-100 hover:bg-blue-50/10 text-gray-700'
                        }`}
                      >
                        <div className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-md border transition-all ${
                          task.completed 
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-600' 
                            : 'border-gray-300'
                        }`}>
                          {task.completed && <Check className="h-3.5 w-3.5" />}
                        </div>
                        <span className="text-xs font-medium leading-relaxed">{task.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center justify-between text-xs mt-4">
                  <span className="text-gray-500 font-medium">Задачи ставятся автоматически на основе аналитики YClients</span>
                  <span className="font-bold text-gray-950 flex items-center gap-1">
                    Без рутины
                    <ArrowUpRight className="h-3.5 w-3.5 text-blue-600" />
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
