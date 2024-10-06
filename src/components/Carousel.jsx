/* eslint-disable react/prop-types */
import { useState } from "react";

const Carousel = ({ images, synthesis }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-full h-96 w-full mx-auto my-4 relative group">
      {/* Slides */}
      <div
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url(${images[currentIndex]})`,
          backgroundSize: "cover", // Keep consistent size
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full rounded bg-center bg-cover bg-no-repeat duration-500"
      >
        {/* Text right bottom side */}
        <div className="absolute bottom-5 left-3 text-white">
          {/* Display the title from the array */}
          <h3 className="text-2xl font-bold">
            {synthesis[currentIndex].title}
          </h3>

          {/* Display the description from the array */}
          <p className="text-md font-light">
            {synthesis[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        ❮
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        ❯
      </div>

      {/* Indicators (dots) */}
      <div className="flex justify-center py-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
