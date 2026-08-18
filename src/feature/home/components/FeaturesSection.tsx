import { FEATURES } from '../constants/home.constants';

export function FeaturesSection() {
  return (
    <section className='py-12 sm:py-20 px-4 max-w-6xl mx-auto'>
      <div className='text-center mb-10 sm:mb-14'>
        <h2 className='mb-3 sm:mb-4'>Architectural Core Principles</h2>
        <p className='text-body-md max-w-xl mx-auto px-2'>
          Designed with strict enterprise standards for modern AI agents and
          high-performance teams.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
        {FEATURES.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className='group p-5 sm:p-7 rounded-2xl sm:rounded-3xl liquid-glass-card'
            >
              <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl liquid-glass-pill p-2 sm:p-2.5 text-[#b2d8d8] mb-4 sm:mb-6 flex items-center justify-center transition-all group-hover:bg-[#008080] group-hover:text-white shadow-md'>
                <Icon className='w-4.5 h-4.5 sm:w-5 sm:h-5' />
              </div>

              <h3 className='mb-2 group-hover:text-[#b2d8d8] transition-colors'>
                {item.title}
              </h3>

              <span className='inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 mb-3 sm:mb-4 rounded-lg bg-[#060909]/80 text-[11px] sm:text-xs font-mono border border-[#006666]/50 max-w-full truncate'>
                <code>{item.tag}</code>
              </span>

              <p className='leading-relaxed'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
