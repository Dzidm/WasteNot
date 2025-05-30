import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import waste2 from "../../assets/image/waste2.png"; // adjust path as needed

const slides = [
  {
    id: 1,
    type: "image-only",
    image: waste2,
  },
  {
    id: 2,
    type: "text",
    backgroundColor: "bg-yellow-100",
    title: "Welcome to WasteNot",
    subtitle:
      "Our mission is to empower communities to reduce food waste through education, innovative solutions, and sharing inspiring success stories.",
    details:
      "At WasteNot, we connect households, restaurants, and stores with local farmers, gardeners, and charitable organizations. " +
      "By donating surplus food and organic waste, we help build a circular economy that benefits people and the planet. " +
      "Join us in turning waste into valuable resources and creating sustainable communities.",
  },
];

const slideVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalDuration = currentIndex === 1 ? 20000 : 6000;

    const interval = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, intervalDuration);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {currentSlide.type === "image-only" ? (
          <motion.div
            key={currentSlide.id}
            className="absolute inset-0 flex items-center justify-center"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
            aria-label="Hero image slide"
          >
            <img
              src={currentSlide.image}
              alt="WasteNot introduction"
              className="w-full h-full object-cover"
              style={{ userSelect: "none" }}
            />
          </motion.div>
        ) : (
          <motion.div
            key={currentSlide.id}
            className={`${currentSlide.backgroundColor} absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24`}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
            aria-label="Hero text slide"
          >
            <div className="max-w-4xl p-6 sm:p-8 md:p-10 text-center text-yellow-600">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight sm:leading-snug">
                {currentSlide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
                {currentSlide.subtitle}
              </p>
              <p className="text-sm sm:text-md md:text-lg max-w-3xl mx-auto leading-relaxed">
                {currentSlide.details}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
