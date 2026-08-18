import { Sparkles } from 'lucide-react';
import { WHY_ITEMS } from '../constants/home.constants';

export function WhySection() {
  return (
    <section className="py-12 sm:py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-3.5 text-mono-badge">
          <Sparkles className="w-3.5 h-3.5 text-[#66b2b2]" />
          <span>PRODUCTION-READY ADVANTAGES</span>
        </div>
        <h2 className="mb-3 whitespace-nowrap">
          Why Use This As Your Base Template?
        </h2>
        <p className="text-body-md max-w-xl mx-auto px-2">
          Save weeks of boilerplate setup. Engineered with enterprise domain
          encapsulation, strict AI agent protocols, and high-performance Bun runtime
          defaults.
        </p>
      </div>

      {/* Flex Column Stacked Items */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {WHY_ITEMS.map((item, index) => {
          const Icon = item.icon;
          const formattedIndex = String(index + 1).padStart(2, '0');

          return (
            <div
              key={item.title}
              className="group p-5 sm:p-6 rounded-2xl sm:rounded-3xl liquid-glass-card flex flex-col gap-3.5 sm:gap-4 transition-all hover:border-[#66b2b2]/40"
            >
              {/* Header Row: Index + Icon + Non-wrapping Title + Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="font-mono text-xs font-semibold text-[#66b2b2] opacity-70 group-hover:opacity-100 transition-opacity shrink-0">
                    {formattedIndex}
                  </span>

                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl liquid-glass-pill p-2 text-[#b2d8d8] flex items-center justify-center transition-all group-hover:bg-[#008080] group-hover:text-white shadow-md shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#66b2b2] group-hover:text-white" />
                  </div>

                  <h3 className="whitespace-nowrap group-hover:text-[#b2d8d8] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full bg-[#004c4c]/40 text-[#b2d8d8] border border-[#006666]/50 text-mono-badge">
                    {item.highlight}
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-[#008080]/20 text-[#b2d8d8] border border-[#006666]/50 text-mono-badge font-semibold whitespace-nowrap shadow-sm">
                    {item.metric}
                  </span>
                </div>
              </div>

              {/* Body Description Row */}
              <p className="text-body-sm leading-relaxed text-slate-300/90 pl-1">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
