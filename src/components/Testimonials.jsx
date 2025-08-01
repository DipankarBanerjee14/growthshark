'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
    {
        name: 'Tom Ford',
        position: 'CEO, Iennep',
        testimonial: 'Their design process was smooth and easy to follow. Highly recommend.',
        avatar: '/avatar1.png',
    },
    {
        name: 'Devid Dee',
        position: 'CEO, Deepstack',
        testimonial: 'Impressive results in record time. These guys know what they’re doing.',
        avatar: '/avatar2.png',
    },
    {
        name: 'Jacob Thomason',
        position: 'CEO, Rentpost',
        testimonial: 'Very professional team that delivered beyond expectations!',
        avatar: '/avatar3.png',
    },
    {
        name: 'Jenny Mark',
        position: 'CEO, Cofi',
        testimonial: 'Loved working with them. Great results and support throughout.',
        avatar: '/avatar4.png',
    },
    {
        name: 'Tom Ford',
        position: 'CEO, Iennep',
        testimonial: 'Their design process was smooth and easy to follow. Highly recommend.',
        avatar: '/avatar1.png',
    },
    {
        name: 'Devid Dee',
        position: 'CEO, Deepstack',
        testimonial: 'Impressive results in record time. These guys know what they’re doing.',
        avatar: '/avatar2.png',
    },
    {
        name: 'Jacob Thomason',
        position: 'CEO, Rentpost',
        testimonial: 'Very professional team that delivered beyond expectations!',
        avatar: '/avatar3.png',
    },
    {
        name: 'Jenny Mark',
        position: 'CEO, Cofi',
        testimonial: 'Loved working with them. Great results and support throughout.',
        avatar: '/avatar4.png',
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="bg-black text-white px-6 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">
                What <span className="text-sky-400">People</span> Say About Us
            </h2>

            <div className="relative">
                <div
                    ref={prevRef}
                    className="swiper-button-prev !text-white absolute -left-5 top-1/2 z-10 cursor-pointer"
                />
                <div
                    ref={nextRef}
                    className="swiper-button-next !text-white absolute -right-5 top-1/2 z-10 cursor-pointer"
                />

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView="auto"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onInit={(swiper) => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    grabCursor
                >
                    {testimonials.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <SwiperSlide
                                key={index}
                                style={{
                                    width: isActive ? '500px' : '250px',
                                    transition: 'width 0.3s ease',
                                }}
                            >
                                <div
                                    className={`h-[250px] bg-sky-400 rounded-xl p-4 relative overflow-hidden transition-all duration-300 ${isActive ? 'flex flex-row gap-4 items-start' : 'flex flex-col items-center justify-center'
                                        }`}
                                >
                                    {/* Left content: Avatar + Name */}
                                    <div
                                        className={`${isActive ? 'w-1/2 items-start text-left' : 'items-center text-center'
                                            } flex flex-col justify-center`}
                                    >
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full mb-2"
                                        />
                                        <h4 className="text-lg font-semibold">{item.name}</h4>
                                        <p className="text-sm">{item.position}</p>
                                    </div>

                                    {/* Right content: Testimonial */}
                                    {isActive && (
                                        <div className="w-1/2 pr-6 pt-1 text-sm">
                                            {item.testimonial}
                                        </div>
                                    )}

                                    {/* Toggle Button */}
                                    <button
                                        onClick={() =>
                                            setActiveIndex(isActive ? null : index)
                                        }
                                        className="absolute bottom-3 right-3 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
                                    >
                                        {isActive ? <FaTimes size={12} /> : <FaArrowRight size={12} />}
                                    </button>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}
