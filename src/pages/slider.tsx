import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgOne from "../assets/shoes.jpg";
import ImgTwo from "../assets/jacket.jpg";
import { useRef, MutableRefObject } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const slides = [
  {
    image: ImgOne,
    title: "Best selection of Shoes",
    subtitle:
      "We are experts in clothes and fashion. we have spent many years working personally with our clients to create very individual stylish clothes.",
  },
  {
    image: ImgTwo,
    title: "Best Selection of Bags",
    subtitle:
      "We are experts in clothes and fashion. we have spent many years working personally with our clients to create very individual stylish clothes.",
  },
  {
    image: ImgOne,
    title: "Best selection of Shoes",
    subtitle:
      "We are experts in clothes and fashion. we have spent many years working personally with our clients to create very individual stylish clothes.",
  },
  {
    image: ImgTwo,
    title: "Best selection of Shoes",
    subtitle:
      "We are experts in clothes and fashion. we have spent many years working personally with our clients to create very individual stylish clothes.",
  },
];

function SimpleSlider() {
  let sliderRef = useRef<Slider | null>(
    null
  ) as MutableRefObject<Slider | null>;

  // Custom functions for next and previous slides
  const next = () => {
    sliderRef.current!.slickNext();
  };
  const previous = () => {
    sliderRef.current!.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container relative bg-[#FFF7ED]">
      <Slider
        ref={(slider: any) => {
          sliderRef.current = slider;
        }}
        {...settings}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <h1 className="text-4xl md:text-5xl text-black font-bold text-center mb-6">
                {slide.title}
              </h1>

              <div className="backdrop-blur-sm rounded-lg px-8 py-4 mb-8 max-w-3xl ">
                <p className="text-black text-center text-xl ">
                  {slide.subtitle}
                </p>
              </div>

              <button className="bg-[#d77a7a] hover:bg-gray-100 text-white px-8 py-3  transition-colors duration-200 rounded-2xl font-bold">
                Shop Now
              </button>
            </div>

            <div className="relative w-full h-full ">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-[400px] p-5 mix-blend-multiply"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          className="text-black text-3xl  px-4 py-2 rounded-full cursor-pointer"
          onClick={previous}
        >
          <FaChevronLeft className="w-16 h-16" strokeWidth={1} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 ">
        <button
          className="text-black px-4 py-2 rounded-full cursor-pointer"
          onClick={next}
        >
          <FaChevronRight className="w-16 h-16" strokeWidth={1} />
        </button>
      </div>
    </div>
  );
}

export default SimpleSlider;
