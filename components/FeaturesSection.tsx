"use client";

import {
  FiClock,
  FiTrash2,
  FiZap,
  FiHeart,
  FiShield,
  FiSmartphone,
} from "react-icons/fi";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: FiClock,
    title: "Set tab lifespan",
    description: "Choose how long tabs stay open (1 day, 7 days, 30 days).",
  },
  {
    icon: FiTrash2,
    title: "Automatic cleanup",
    description: "Tabs you don't use quietly close themselves.",
  },
  {
    icon: FiZap,
    title: "Faster browsing",
    description: "Free up memory and speed up your browser.",
  },
  {
    icon: FiHeart,
    title: "Clutter-free mind",
    description: "Work without the stress of digital chaos.",
  },
  {
    icon: FiShield,
    title: "Privacy focused",
    description: "Your browsing data stays private and secure.",
  },
  {
    icon: FiSmartphone,
    title: "Lightweight",
    description: "Minimal resource usage, maximum efficiency.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`text-center mb-4 transition-all duration-800 `}>
          <span className="inline-flex items-center text-sm  md:text-base  text-black">
            <span className="w-[9px] h-[9px] bg-primary rounded-full mr-2"></span>
            Features
          </span>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h2
            className={`text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl transition-all duration-800 `}
          >
            Key features and highlights
          </h2>
        </div>

        <div className={`mx-auto mt-16 max-w-6xl transition-all duration-800 `}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-primary/70 mx-auto mb-6">
                  <feature.icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg md:text-[24px] text-black !mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground md:leading-[24px] max-w-72 mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
