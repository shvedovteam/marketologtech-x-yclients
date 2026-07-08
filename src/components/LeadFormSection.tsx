import React, { useState } from 'react';
import { LeadFormData } from '../types';
import { Send, CheckCircle2, Sparkles, Building, Phone, Mail, User, Hash } from 'lucide-react';

export default function LeadFormSection() {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    salonName: '',
    branchCount: 5
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'branchCount' ? Math.max(1, parseInt(value) || 0) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Quick validations
    if (!formData.name.trim()) return setValidationError('Пожалуйста, введите ваше имя.');
    if (!formData.phone.trim()) return setValidationError('Пожалуйста, укажите ваш контактный телефон.');
    if (!formData.email.trim()) return setValidationError('Пожалуйста, введите корректный адрес электронной почты.');
    if (!formData.salonName.trim()) return setValidationError('Пожалуйста, укажите название вашей сети или салона.');
    if (formData.branchCount < 1) return setValidationError('Количество точек должно быть не менее 1.');

    setSubmitting(true);

    // Simulate submission request delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="lead-form" className="py-24 bg-blue-600 relative overflow-hidden text-white">
      {/* Abstract subtle background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Form Explanatory text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-blue-100 bg-blue-500 px-3 py-1 rounded-full uppercase tracking-wider">
              Бесплатный тестовый период
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Узнайте, кого можно вернуть из вашей базы YClients
            </h2>
            <p className="text-base text-blue-100 leading-relaxed max-w-xl">
              Подключим данные в безопасном режиме чтения, покажем критические проблемные точки на живом созвоне и соберем первые действия: готовые сегменты, тексты сообщений, рекомендации и задачи для ваших управляющих.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/80 text-blue-100">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-blue-50">Анализ занимает менее 1 часа</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/80 text-blue-100">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-blue-50">Подключение по безопасному API-ключу</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/80 text-blue-100">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-blue-50">Без изменения процессов записи в салоне</span>
              </div>
            </div>
          </div>

          {/* Actual Lead Form card */}
          <div className="lg:col-span-6">
            <div className="bg-white text-gray-950 rounded-2xl p-6 sm:p-8 shadow-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-lg sm:text-xl">Заявка на тест</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Оставьте контакты. Мы свяжемся с вами и согласуем время проведения аудита.
                    </p>
                  </div>

                  {validationError && (
                    <div className="p-3 bg-rose-50 text-rose-700 text-xs font-semibold rounded-lg border border-rose-150">
                      {validationError}
                    </div>
                  )}

                  {/* Input 1: Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-gray-400" />
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Иван Иванов"
                      className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-blue-600 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Input 2: Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-gray-400" />
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                      className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-blue-600 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Input 3: Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-gray-400" />
                      Электронная почта
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@mail.ru"
                      className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-blue-600 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Input 4: Network / Salon name */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5 text-gray-400" />
                        Название сети / салона
                      </label>
                      <input
                        type="text"
                        name="salonName"
                        value={formData.salonName}
                        onChange={handleInputChange}
                        placeholder="Салон Версаль"
                        className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-blue-600 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                        <Hash className="h-3.5 w-3.5 text-gray-400" />
                        Точек
                      </label>
                      <input
                        type="number"
                        name="branchCount"
                        value={formData.branchCount}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs sm:text-sm focus:border-blue-600 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-xs sm:text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-md shadow-blue-100 disabled:bg-blue-400 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Отправка заявки...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Записаться на тест
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Elegant Success State Screen */
                <div className="text-center py-6 space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-gray-900 text-lg sm:text-xl">Заявка успешно принята!</h3>
                    <p className="text-xs text-gray-500 px-4">
                      Иван, спасибо за проявленный интерес к MarketologTech.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl text-left border border-gray-100 space-y-2.5 max-w-sm mx-auto">
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">Что произойдет дальше:</span>
                    <div className="space-y-2 text-xs text-gray-600">
                      <p className="leading-normal">
                        <strong>1. Звонок менеджера:</strong> Мы перезвоним вам по номеру <strong>{formData.phone}</strong> в течение 15 минут для подтверждения.
                      </p>
                      <p className="leading-normal">
                        <strong>2. Подготовка кабинета:</strong> Вы получите инструкцию на <strong>{formData.email}</strong> по безопасному сопряжению с вашим YClients для салона &quot;{formData.salonName}&quot;.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Вернуться и заполнить заново
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
