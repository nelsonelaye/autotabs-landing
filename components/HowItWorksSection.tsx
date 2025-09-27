"use client";

import { FiDownload, FiSettings, FiCheckCircle } from "react-icons/fi";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: FiDownload,
    title: "Install Extension",
    description: "Add Autotabs to your Chrome browser from the Web Store.",
    step: "01",
  },
  {
    icon: FiSettings,
    title: "Configure Settings",
    description: "Set your preferred tab lifespan and customize options.",
    step: "02",
  },
  {
    icon: FiCheckCircle,
    title: "Enjoy Clean Browsing",
    description:
      "Let Autotabs automatically manage your tabs in the background.",
    step: "03",
  },
];

export function HowItWorksSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    rootMargin: "0px 0px -50px 0px",
  });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({
    rootMargin: "0px 0px -100px 0px",
  });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className={`text-center mb-4 transition-all duration-800`}>
          <span className="inline-flex items-center text-sm  md:text-base  text-black">
            <span className="w-[9px] h-[9px] bg-primary rounded-full mr-2"></span>
            Process
          </span>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h2
            className={`text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl transition-all duration-800 `}
          >
            How our tab management service works for you
          </h2>
        </div> */}

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image placeholder */}
            <div
              className={`order-2 lg:order-1 transition-all duration-800 overflow-hidden`}
            >
              <img
                src="/computer.jpg"
                className="w-full h-full max-h-[450px] sm:max-h-[560px] rounded-md object-cover"
              />
            </div>

            {/* Right side - Steps */}
            <div
              className={`order-1 lg:order-2 space-y-9 transition-all duration-800 `}
            >
              <div className="mb-4 transition-all duration-800">
                <span className="inline-flex items-center text-sm text-left md:text-base  text-black">
                  <span className="w-[9px] h-[9px] bg-primary rounded-full mr-2"></span>
                  Process
                </span>
              </div>

              <div className="mx-auto max-w-4xl mb-10 md:mb-20">
                <h2
                  className={`text-balance text-3xl font-medium tracking-tight text-foreground sm:text-[50px] transition-all duration-800 `}
                >
                  How our Autotabs works for you
                </h2>
              </div>

              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full border border-primary/30  flex items-center justify-center text-primary font-semibold text-xs">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-[22px] text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
