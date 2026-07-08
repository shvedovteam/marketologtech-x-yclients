import React from 'react';
import { HOW_IT_WORKS } from '../data';
import { ArrowRight, Link, Search, FileText, CheckCircle2 } from 'lucide-react';

const stepIcons = [Link, Search, FileText, CheckCircle2];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Процесс автоматизации
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            От данных в YClients — к понятным действиям
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Мы не меняем ваши привычные инструменты. Мы подключаемся к готовым данным и помогаем превратить их в прибыль.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/4 left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div key={step.number} className="relative flex flex-col items-start text-left bg-white p-5 rounded-2xl border border-gray-100/50 hover:border-gray-100 hover:shadow-xs transition-all">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-4xl font-extrabold text-gray-200/80 font-mono">
                      0{step.number}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base">{step.title}</h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
