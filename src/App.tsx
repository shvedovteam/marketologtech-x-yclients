import React from 'react';
import Navbar from './components/Navbar';
import InteractiveDashboard from './components/InteractiveDashboard';
import ProblemSection from './components/ProblemSection';
import HowItWorksSection from './components/HowItWorksSection';
import KeyScenariosSection from './components/KeyScenariosSection';
import NewsletterSection from './components/NewsletterSection';
import MastersSection from './components/MastersSection';
import ReviewsSection from './components/ReviewsSection';
import ReportsSection from './components/ReportsSection';
import ForWhomSection from './components/ForWhomSection';
import TestPeriodValueSection from './components/TestPeriodValueSection';
import FAQSection from './components/FAQSection';
import LeadFormSection from './components/LeadFormSection';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const scrollToForm = () => {
    const element = document.getElementById('lead-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans antialiased scroll-smooth">
      {/* Navigation Header */}
      <Navbar onScrollToForm={scrollToForm} />

      {/* Block 1: Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-white">
        {/* Subtle decorative mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.04),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-blue-50/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Core Value Pitch */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                <Sparkles className="h-4 w-4 text-blue-600 animate-pulse" />
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                  Новое направление: MarketologTech x YClients
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                Возвращайте клиентов, которые уже есть в вашей базе YClients
              </h1>

              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                MarketologTech работает на данных YClients и помогает находить клиентов без повторной записи, запускать рассылки по сегментам, видеть загрузку мастеров и превращать аналитику в понятные действия для управляющих.
              </p>

              {/* Action triggers */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={scrollToForm}
                  className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-md shadow-blue-100 hover:bg-blue-700 active:bg-blue-800 transition-all cursor-pointer"
                >
                  Записаться на тест
                  <ArrowRight className="h-4 w-4" />
                </button>
                <div className="text-left">
                  <span className="block text-xs font-bold text-gray-900">Попробуйте бесплатно</span>
                  <span className="block text-[11px] text-gray-400">Покажем первые точки роста на вашей базе</span>
                </div>
              </div>

              {/* High-Contrast descriptive benefit tagline */}
              <div className="pt-6 border-t border-gray-100 text-xs text-gray-400 font-medium leading-normal max-w-md">
                <strong>YClients хранит данные. MarketologTech показывает, что с ними делать.</strong> Покажем первые точки роста на данных вашей базы: кого можно вернуть, кому написать и где теряются повторные визиты.
              </div>
            </div>

            {/* Right Column: High-fidelity interactive dashboard mock */}
            <div className="lg:col-span-6 w-full max-w-2xl mx-auto lg:max-w-none">
              <div className="relative">
                {/* Decorative glow background under mockup */}
                <div className="absolute -inset-2 rounded-3xl bg-blue-100 blur-xl opacity-30 -z-10" />
                <InteractiveDashboard />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Block 2: Problems Section */}
      <ProblemSection />

      {/* Block 3: How It Works Section */}
      <HowItWorksSection />

      {/* Block 4: Key Scenarios Section */}
      <KeyScenariosSection onScrollToForm={scrollToForm} />

      {/* Block 5: Targeted Newsletters Section */}
      <NewsletterSection onScrollToForm={scrollToForm} />

      {/* Block 6: Master Performance Occupancy Section */}
      <MastersSection />

      {/* Block 7: Reviews & Automated Task Section */}
      <ReviewsSection />

      {/* Block 8: Reports & Actionable Daily Summaries */}
      <ReportsSection onScrollToForm={scrollToForm} />

      {/* Block 9: For Whom Target Segment */}
      <ForWhomSection />

      {/* Block 10: Test Period Audit Deliverables */}
      <TestPeriodValueSection onScrollToForm={scrollToForm} />

      {/* Block 11: FAQ Accordions */}
      <FAQSection />

      {/* Block 12: Lead Capture & Congratulations State */}
      <LeadFormSection />

      {/* Minimal clean footer */}
      <footer className="bg-gray-900 text-gray-500 py-12 border-t border-gray-800 font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm">
              M
            </div>
            <span className="font-sans text-sm font-bold text-white tracking-tight">
              Marketolog<span className="text-blue-500">Tech</span>
            </span>
          </div>
          <div className="text-xs text-gray-500 text-center sm:text-right">
            © {new Date().getFullYear()} MarketologTech. Все права защищены. Интеграционный продукт для YClients.
          </div>
        </div>
      </footer>
    </div>
  );
}
