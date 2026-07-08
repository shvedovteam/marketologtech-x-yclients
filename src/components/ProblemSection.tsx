import React from 'react';
import { UserMinus, ZapOff, RefreshCw, AlertTriangle } from 'lucide-react';
import { PROBLEMS } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  first_no_second: UserMinus,
  sleepy_base: ZapOff,
  chaotic_broadcast: RefreshCw,
  underloaded_masters: AlertTriangle,
};

export default function ProblemSection() {
  return (
    <section id="problems" className="py-20 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Главная боль собственника
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Клиенты есть. Но часть из них больше не возвращается
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Салон уже потратил деньги на привлечение. Клиент пришел, получил услугу, но не записался снова. 
            Через несколько недель он остается просто безжизненной строкой в базе.
          </p>
          <p className="mt-2 text-base text-gray-500 leading-relaxed">
            В YClients видно, что происходит с клиентами: кто пришел один раз, кто не записался повторно, кто давно не был. 
            Но собственнику все равно нужно понять, что с этим делать: кому написать, какую акцию предложить и какие задачи поставить управляющим.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem) => {
            const IconComponent = iconMap[problem.id] || AlertTriangle;
            return (
              <div 
                key={problem.id} 
                className="relative flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-700">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-bold text-gray-900 text-base">{problem.title}</h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">{problem.description}</p>
                </div>
                {problem.badge && (
                  <div className="mt-5">
                    <span className="inline-flex items-center rounded-md bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-700">
                      {problem.badge}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
