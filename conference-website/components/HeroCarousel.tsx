'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Global Conference 2025',
    subtitle: 'Join us for the premier event of the year',
    description: 'Experience groundbreaking insights and networking opportunities',
    bgColor: 'bg-gradient-to-r from-primary to-primary-dark',
  },
  {
    title: 'Innovation & Excellence',
    subtitle: 'Shaping the Future Together',
    description: 'Connect with industry leaders and visionaries from around the world',
    bgColor: 'bg-gradient-to-r from-primary-dark to-primary',
  },
  {
    title: 'March 27-29, 2025',
    subtitle: 'Three Days of Inspiration',
    description: 'In-person and virtual attendance options available',
    bgColor: 'bg-gradient-to-r from-primary via-primary-dark to-primary',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${slide.bgColor}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-secondary font-semibold">
                {slide.subtitle}
              </p>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                {slide.description}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://forms.gle/wtSpfD5oyfgr6HQF6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-primary hover:bg-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Register Now
                </a>
                <a
                  href="#about"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-secondary w-12' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
