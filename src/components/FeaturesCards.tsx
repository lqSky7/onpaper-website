import React from "react";

export function FeaturesCards() {
  return (
    <section id="features" className="py-24 bg-white text-[#1d1d1f]">
      <div className="container">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[22px] md:text-[26px] font-semibold text-[#6e6e73] tracking-tight mb-2">
            Features
          </p>
          <h2 className="text-[40px] md:text-[56px] font-extrabold tracking-tight leading-[1.08] text-[#1d1d1f] mb-4">
            Everything Launchpad had.
            <br />
            And a lot it didn’t.
          </h2>
          <p className="text-[18px] md:text-[20px] font-medium text-[#6e6e73] leading-relaxed">
            A full-screen launcher built for the way you actually work. Search
            and open files, use Clipboard, and make it yours.
          </p>
        </div>

        {/* Card 1: Wide Card - Liquid Glass */}
        <div className="mb-8">
          <div className="group relative overflow-hidden rounded-[24px] bg-[#f5f5f7] border border-black/[0.06] shadow-sm transition-all duration-300 hover:shadow-lg min-h-[360px] md:min-h-[420px] flex flex-col justify-between">
            <div className="p-8 md:p-10 z-10">
              <h3 className="text-[24px] md:text-[30px] font-bold text-[#1d1d1f] tracking-tight max-w-xl">
                Files — Search, copy, delete, preview
              </h3>
            </div>
            <div className="relative w-full h-[240px] md:h-[300px] mt-auto">
              <img
                src="/images/liquid-glass.png"
                alt="Liquid glass preview"
                className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* 2-Column Split: Hide Apps & Icon Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Card 2: Hide Apps */}
          <div className="group relative overflow-hidden rounded-[24px] bg-[#f5f5f7] border border-black/[0.06] shadow-sm transition-all duration-300 hover:shadow-lg aspect-square flex flex-col justify-between p-8 md:p-10">
            <div className="z-10">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#1d1d1f] tracking-tight">
                Hide Apps
              </h3>
              <p className="text-[16px] md:text-[18px] text-[#6e6e73] font-medium mt-1">
                Hide app names or
                <br />
                completely hide apps
              </p>
            </div>
            <div className="relative w-full h-[65%] mt-auto">
              <img
                src="/images/hide-apps.png"
                alt="Hide apps preview"
                className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Card 3: Icon Size */}
          <div className="group relative overflow-hidden rounded-[24px] bg-[#f5f5f7] border border-black/[0.06] shadow-sm transition-all duration-300 hover:shadow-lg aspect-square flex flex-col justify-between p-8 md:p-10">
            <div className="z-10">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#1d1d1f] tracking-tight">
                Icon Size
              </h3>
              <p className="text-[16px] md:text-[18px] text-[#6e6e73] font-medium mt-1">
                Adjust icon size
                <br />
                to better fit your screen
              </p>
            </div>
            <div className="relative w-full h-[65%] mt-auto">
              <img
                src="/images/icons-size.png"
                alt="Icon size preview"
                className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        {/* Card 4: Multi-display Monitor Wide */}
        <div className="mb-8">
          <div className="group relative overflow-hidden rounded-[24px] bg-transparent border border-black/[0.06] shadow-sm transition-all duration-300 hover:shadow-lg min-h-[300px] md:min-h-[460px]">
            <img
              src="/images/monitor-image.png"
              alt="Multi-display support on multiple monitors"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* 2-Column Split: System Icons & Clear Colored */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 5: System Icon Appearance */}
          <div className="group relative overflow-hidden rounded-[24px] bg-[#f5f5f7] border border-black/[0.06] shadow-sm transition-all duration-300 hover:shadow-lg aspect-square flex flex-col justify-between p-8 md:p-10">
            <div className="z-10">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#1d1d1f] tracking-tight">
                System Icon Appearance
              </h3>
              <p className="text-[16px] md:text-[18px] text-[#6e6e73] font-medium mt-1">
                Dark | Light | Tinted
              </p>
            </div>
            <div className="relative w-full h-[65%] mt-auto">
              <img
                src="/images/system-icons.png"
                alt="System icons preview"
                className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Card 6: Clear Colored Icons */}
          <div className="group relative overflow-hidden rounded-[24px] bg-[#111113] border border-black/[0.06] shadow-sm transition-all duration-300 hover:shadow-lg aspect-square flex flex-col justify-between p-8 md:p-10 text-white">
            <div className="z-10">
              <h3 className="text-[24px] md:text-[28px] font-bold text-white tracking-tight">
                Clear Colored Icons
              </h3>
              <p className="text-[16px] md:text-[18px] text-[#86868b] font-medium mt-1">
                A unified style with Glass
                <br />
                and colored icons.
              </p>
            </div>
            <div className="relative w-full h-[65%] mt-auto">
              <img
                src="/images/clear-colored.png"
                alt="Clear colored icons preview"
                className="absolute inset-0 w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
