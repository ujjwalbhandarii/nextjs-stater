import { Sparkles, ArrowRight } from 'lucide-react';
import { WHY_ITEMS } from '../constants/home.constants';

export function WhySection() {
  return (
    <section className='py-12 sm:py-20 px-4 max-w-4xl mx-auto'>
      {/* Section Header */}
      <div className='text-center mb-10 sm:mb-14'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-3.5 text-mono-badge'>
          <Sparkles className='w-3.5 h-3.5 text-[#66b2b2]' />
          <span>PRODUCTION-READY ADVANTAGES</span>
        </div>
        <h2 className='mb-3'>Why Use This As Your Base Template?</h2>
        <p className='text-body-md max-w-xl mx-auto px-2'>
          Save weeks of boilerplate setup. Engineered with enterprise domain
          encapsulation, strict AI agent protocols, and high-performance Bun
          runtime defaults.
        </p>
      </div>

      {/* Vertical Stack List */}
      <div className='space-y-4 sm:space-y-5'>
        {WHY_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const formattedIndex = String(index + 1).padStart(2, '0');

          return (
            <div
              key={item.title}
              className='group p-5 sm:p-6 rounded-2xl sm:rounded-3xl liquid-glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 transition-all hover:border-[#66b2b2]/50'
            >
              {/* Left Column: Number Index + Icon + Title & Metric */}
              <div className='flex items-start sm:items-center gap-3.5 sm:gap-5 min-w-0'>
                {/* Index Number */}
                <span className='font-mono text-xs sm:text-sm font-semibold text-[#66b2b2] opacity-60 group-hover:opacity-100 transition-opacity shrink-0 pt-0.5 sm:pt-0'>
                  {formattedIndex}
                </span>

                {/* Icon Box */}
                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl liquid-glass-pill p-2.5 text-[#b2d8d8] flex items-center justify-center transition-all group-hover:bg-[#008080] group-hover:text-white shadow-md shrink-0'>
                  <Icon className='w-5 h-5 sm:w-6 sm:h-6 text-[#66b2b2] group-hover:text-white' />
                </div>

                {/* Title & Metric */}
                <div className='min-w-0'>
                  <div className='flex flex-wrap items-center gap-2 mb-1'>
                    <h3 className='group-hover:text-[#b2d8d8] transition-colors truncate'>
                      {item.title}
                    </h3>
                    <span className='px-2.5 py-0.5 rounded-full bg-[#004c4c]/40 text-[#b2d8d8] border border-[#006666]/50 text-mono-badge shrink-0'>
                      {item.highlight}
                    </span>
                  </div>
                  <p className='text-body-sm leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Metric Tag & Arrow Indicator */}
              <div className='flex items-center gap-3 shrink-0 self-end md:self-center pt-2 md:pt-0 border-t border-[#006666]/20 md:border-t-0 w-full md:w-auto justify-between md:justify-end'>
                <span className='text-mono-badge text-[#66b2b2]'>
                  {item.metric}
                </span>
                <div className='w-7 h-7 sm:w-8 sm:h-8 rounded-full liquid-glass-pill flex items-center justify-center text-[#66b2b2] group-hover:text-white group-hover:bg-[#008080] transition-all'>
                  <ArrowRight className='w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
