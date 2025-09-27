"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    content:
      "The quality is outstanding! They always exceed our expectations, delivering more than we imagined",
    rating: 5,
    avatar: "/professional-woman-diverse.png",
  },
  {
    name: "Mike Chen",
    role: "Developer",
    content:
      "They nailed everything we needed and went above and beyond to bring our vision to life",
    rating: 5,
    avatar: "/professional-man.jpg",
    featured: true,
  },
  {
    name: "Emily Davis",
    role: "Designer",
    content:
      "Amazing service! They consistently deliver top-notch results and meet every requirement perfectly",
    rating: 5,
    avatar: "/professional-woman-designer.png",
  },
];

export function SocialProofSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({
    rootMargin: "0px 0px -50px 0px",
  });
  const { ref: testimonialsRef, isVisible: testimonialsVisible } =
    useScrollAnimation({
      rootMargin: "0px 0px -100px 0px",
    });

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-4 transition-all duration-800 ${
            headerVisible ? "animate-fade-in" : "fade-hidden"
          }`}
        >
          <span className="inline-flex items-center text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Testimonial
          </span>
        </div>

        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2
            ref={titleRef}
            className={`text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl transition-all duration-800 ${
              titleVisible ? "animate-slide-up" : "slide-up-hidden"
            }`}
          >
            What our premium users are saying about us
          </h2>
        </div>

        <div
          ref={testimonialsRef}
          className={`mx-auto max-w-6xl transition-all duration-800 ${
            testimonialsVisible ? "animate-slide-up" : "slide-up-hidden"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 ${
                  testimonial.featured
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-200"
                }`}
              >
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        testimonial.featured ? "text-white" : "text-primary"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Content */}
                <p
                  className={`text-lg leading-relaxed mb-8 ${
                    testimonial.featured ? "text-white" : "text-foreground"
                  }`}
                >
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div
                      className={`font-semibold ${
                        testimonial.featured ? "text-white" : "text-foreground"
                      }`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className={`text-sm ${
                        testimonial.featured
                          ? "text-white/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
