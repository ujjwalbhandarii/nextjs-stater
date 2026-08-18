import { Sparkles, ArrowUpRight } from 'lucide-react';
import { WHY_ITEMS } from '../constants/home.constants';

export function WhySection() {
  return (
    <section className='py-12 sm:py-20 px-4 max-w-6xl mx-auto'>
      {/* Section Header */}
      <div className='text-center mb-10 sm:mb-14'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-3.5 text-mono-badge'>
          <Sparkles className='w-3.5 h-3.5 text-[#66b2b2]' />
          <span>PRODUCTION-READY ADVANTAGES</span>
        </div>
        <h2 className='mb-3'>Why Use This As Your Base Template?</h2>
        <p className='text-body-md max-w-2xl mx-auto px-2'>
          Save weeks of boilerplate setup. Engineered with enterprise domain
          encapsulation, strict AI agent protocols, and high-performance Bun
          runtime defaults.
        </p>
      </div>

      {/* Grid of Why Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6'>
        {WHY_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className='group p-6 sm:p-7 rounded-2xl sm:rounded-3xl liquid-glass-card flex flex-col justify-between'
            >
              <div>
                {/* Card Header & Icon Pill */}
                <div className='flex items-center justify-between gap-3 mb-5'>
                  <div className='w-11 h-11 rounded-2xl liquid-glass-pill p-2.5 text-[#b2d8d8] flex items-center justify-center transition-all group-hover:bg-[#008080] group-hover:text-white shadow-md'>
                    <Icon className='w-5 h-5 text-[#66b2b2] group-hover:text-white' />
                  </div>
                  <span className='px-3 py-1 rounded-full bg-[#004c4c]/40 text-[#b2d8d8] border border-[#006666]/50 text-mono-badge'>
                    {item.highlight}
                  </span>
                </div>

                {/* Card Title & Metric */}
                <h3 className='mb-1.5 group-hover:text-[#b2d8d8] transition-colors'>
                  {item.title}
                </h3>
                <span className='inline-block mb-3 text-mono-badge text-[#66b2b2]'>
                  {item.metric}
                </span>

                {/* Card Description */}
                <p className='leading-relaxed mb-4'>{item.description}</p>
              </div>

              {/* Card Footer Tag */}
              <div className='pt-4 border-t border-[#006666]/30 flex items-center justify-between'>
                <span className='text-caption-sm'>Enterprise Standard</span>
                <ArrowUpRight className='w-4 h-4 text-[#66b2b2] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all' />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
