"use client";

import { Button } from "@/components/ui/button";
import { FiChrome } from "react-icons/fi";
import Link from "next/link";

export function ClosingSection() {
  return (
    <section className="mx-auto max-w-7xl my-20  py-10 md:py-20 px-6 lg:px-8 bg-primary/3 rounded-3xl mb-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className={`text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl transition-all duration-800 `}
        >
          Tidy your tabs.
          <span className="text-primary">Relax your mind.</span>
        </h2>
        <p
          className={`mt-6 font-medium text-pretty md:text-lg md:leading-8 text-muted-foreground transition-all duration-800 `}
        >
          Autotabs keeps your browser fast, tidy, and stress-free —
          automatically.
        </p>
        <div
          className={`mt-10 flex items-center justify-center gap-x-6 transition-all duration-800`}
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
      </div>
    </section>
  );
}
