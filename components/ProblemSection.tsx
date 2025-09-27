"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ProblemSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({
    rootMargin: "0px 0px -50px 0px",
  });
  const { ref: beforeRef, isVisible: beforeVisible } = useScrollAnimation({
    rootMargin: "0px 0px -100px 0px",
  });
  const { ref: afterRef, isVisible: afterVisible } = useScrollAnimation({
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-10 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className={`text-center mb-4 transition-all duration-800 `}>
            <span className="inline-flex items-center text-sm  md:text-base  text-black">
              <span className="w-[9px] h-[9px] bg-primary rounded-full mr-2"></span>
              About
            </span>
          </div>
          <h2
            className={`text-balance text-3xl font-medium  tracking-tight text-foreground sm:text-4xl transition-all duration-800 `}
          >
            Too many tabs? We get it.
          </h2>
          <p
            className={`mt-6 text-pretty md:text-lg md:leading-8 text-muted-foreground transition-all duration-800 `}
          >
            Tab overload slows down your browser, creates a messy workspace, and
            adds unnecessary mental clutter to your day. And you can't help but
            keep opening new tabs. Let's help you gain control.
          </p>

          <div className={`mt-16 relative transition-all duration-800`}>
            <div className="mx-auto max-w-2xl">
              <div className="relative bg-card rounded-lg border p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="bg-muted rounded px-3 py-1 text-sm opacity-50">
                      Old Tab
                    </div>
                    <div className="bg-muted rounded px-3 py-1 text-sm opacity-30">
                      Unused Tab
                    </div>
                    <div className="bg-primary rounded px-3 py-1 text-sm text-primary-foreground">
                      Active Tab
                    </div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground mt-4">
                    ✨ Autotabs automatically close after your set time
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 hidden">
            {/* Before - Crowded Browser */}
            <div className={`relative transition-all duration-800 `}>
              <h3 className="text-xl font-semibold text-destructive mb-4">
                Before: Tab Chaos
              </h3>
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-1 flex-wrap">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-muted rounded px-2 py-1 text-xs opacity-70"
                      >
                        Tab {i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-destructive text-center mt-4">
                    😵 Slow • Cluttered • Stressful
                  </div>
                </div>
              </div>
            </div>

            {/* After - Clean Browser */}
            <div className={`relative transition-all duration-800 `}>
              <h3 className="text-xl font-semibold text-primary mb-4">
                After: Clean & Fast
              </h3>
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="bg-primary rounded px-3 py-1 text-sm text-primary-foreground">
                      Active Work
                    </div>
                    <div className="bg-muted rounded px-3 py-1 text-sm">
                      Recent Tab
                    </div>
                  </div>
                  <div className="text-xs text-primary text-center mt-4">
                    🚀 Fast • Organized • Peaceful
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
