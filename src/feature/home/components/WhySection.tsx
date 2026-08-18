import { Sparkles } from 'lucide-react';
import { WHY_ITEMS } from '../constants/home.constants';

export function WhySection() {
  return (
    <section className='py-10 sm:py-20 px-3.5 sm:px-4 max-w-5xl mx-auto overflow-hidden'>
      {/* Section Header */}
      <div className='text-center mb-8 sm:mb-14'>
        <div className='inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full liquid-glass-pill mb-3 text-mono-badge'>
          <Sparkles className='w-3.5 h-3.5 text-[#66b2b2]' />
          <span>PRODUCTION-READY ADVANTAGES</span>
        </div>
        <h2 className='mb-3 text-xl sm:text-3xl md:text-4xl sm:whitespace-nowrap'>
          Why Use This As Your Base Template?
        </h2>
        <p className='text-body-md max-w-xl mx-auto px-1'>
          Save weeks of boilerplate setup. Engineered with enterprise domain
          encapsulation, strict AI agent protocols, and high-performance Bun
          runtime defaults.
        </p>
      </div>

      {/* Flex Column Stacked Items with Mobile Responsiveness */}
      <div className='flex flex-col gap-3.5 sm:gap-5'>
        {WHY_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className='group p-4 sm:p-6 rounded-2xl sm:rounded-3xl liquid-glass-card flex flex-col gap-3 sm:gap-4 transition-all hover:border-[#66b2b2]/40'
            >
              {/* Header Row: Responsive Icon + Title & Badges */}
              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3'>
                {/* Icon & Title */}
                <div className='flex items-center gap-2.5 sm:gap-3.5 min-w-0'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-xl liquid-glass-pill p-1.5 sm:p-2 text-[#b2d8d8] flex items-center justify-center transition-all group-hover:bg-[#008080] group-hover:text-white shadow-md shrink-0'>
                    <Icon className='w-4 h-4 sm:w-5 sm:h-5 text-[#66b2b2] group-hover:text-white' />
                  </div>

                  <h3 className='sm:whitespace-nowrap group-hover:text-[#b2d8d8] transition-colors leading-snug'>
                    {item.title}
                  </h3>
                </div>

                {/* Badges Container */}
                <div className='flex flex-wrap items-center gap-1.5 sm:gap-2 shrink-0 pt-0.5 sm:pt-0'>
                  <span className='px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#004c4c]/40 text-[#b2d8d8] border border-[#006666]/50 text-mono-badge text-[11px] sm:text-xs'>
                    {item.highlight}
                  </span>
                  <span className='px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-xl bg-[#008080]/20 text-[#b2d8d8] border border-[#006666]/50 text-mono-badge font-semibold text-[11px] sm:text-xs shadow-sm'>
                    {item.metric}
                  </span>
                </div>
              </div>

              {/* Body Description Row */}
              <p className='text-body-sm leading-relaxed text-slate-300/90'>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
