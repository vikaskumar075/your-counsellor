import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from '../custom_ui/Heading';

const testimonials = [
    { id: 1, name: "John Doe", text: "This is an amazing product! Highly recommended!" },
    { id: 2, name: "Jane Smith", text: "Fantastic service and great quality." },
    { id: 3, name: "Alice Johnson", text: "I love how easy it is to use. Great experience." },
    { id: 4, name: "Bob Brown", text: "Would definitely buy again. Superb quality!" },
    { id: 5, name: "Charlie Davis", text: "Best purchase I've made in years!" },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(2);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center md:py-[100px]">
            <Heading title="Testimonials" />
            <div className="relative w-full max-w-[1420px] md:py-[180px]">
                <button
                    className="absolute left-0 z-10 p-4 bg-blue-500 text-white rounded-full"
                    onClick={prevTestimonial}
                >
                    &#8592;
                </button>

                <div className="relative flex justify-center items-center space-x-12">
                    {testimonials.map((testimonial, index) => {
                        const isCurrent = index === currentIndex;
                        const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length;
                        const isNext = index === (currentIndex + 1) % testimonials.length;

                        return (
                            <motion.div
                                key={testimonial.id}
                                className={`absolute w-full max-w-lg transition-all duration-500 ease-in-out
                            ${isPrev ? 'scale-95 opacity-90 translate-x-[-150px]' : ''}
                            ${isCurrent ? 'scale-110 opacity-100 z-10' : ''}
                            ${isNext ? 'scale-95 opacity-90 translate-x-[150px]' : ''}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: isCurrent ? 1 : 0.7,
                                    scale: isCurrent ? 1.1 : 0.95,
                                    x: isCurrent ? 0 : isPrev ? -150 : 150,
                                }}
                                exit={{ opacity: 0, scale: 0.8 }}
                            >
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <p className="text-2xl text-black font-semibold">{testimonial.name}</p>
                                    <p className="mt-4 text-gray-700">{testimonial.text}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <button
                    className="absolute right-0 z-10 p-4 bg-blue-500 text-white rounded-full"
                    onClick={nextTestimonial}
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
