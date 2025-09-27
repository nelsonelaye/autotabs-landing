"use client";

import { Button } from "@/components/ui/button";
import { FiChrome } from "react-icons/fi";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className={`text-balance text-4xl font-medium tracking-tight md:leading-[70px] text-foreground sm:text-6xl transition-all duration-800`}
          >
            Free up your browser, memory space, and mind
            {/* Automatically Clos */}
          </h1>

          <p className="mt-8 text-pretty md:text-lg md:leading-8 font-medium text-muted-foreground  transition-all duration-800 max-w-xl mx-auto">
            Autotabs automatically close tabs you forgot existed — so you can
            browse faster and stress less.
          </p>

          <div
            className={`mt-10 flex items-center justify-center gap-x-6 transition-all duration-800 `}
          >
            <Link
              href="https://chromewebstore.google.com/detail/aghononbcoikkmocoaloaojjmcboniap?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-base">
                <FiChrome className="mr-2 h-5 w-5" />
                Add to Chrome
              </Button>
            </Link>
          </div>

          <div className="w-full">
            <Image
              src="/fire.jpg"
              width={100}
              height={100}
              className="w-full h-full  mt-16 rounded-lg"
              unoptimized
              quality={100}
              alt="browser illustration"
            />
          </div>

          <div className={`mt-16 relative transition-all duration-800 hidden`}>
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
                    ✨ Tabs automatically close after your set time
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
