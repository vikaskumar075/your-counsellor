import React from 'react'
import { motion } from 'framer-motion'

const slides = [
    { icon: '/logo/logo1.jpg' },
    { icon: '/logo/logo2.png' },
    { icon: '/logo/logo3.jpg' },
    { icon: '/logo/logo4.jpg' },
    { icon: '/logo/logo5.jpg' },
    { icon: '/logo/logo6.jpg' },
]

const LogoSlider = ({ qyt = "single" }) => {
    const duplicateSlides = [...slides, ...slides]

    return (
        <div className="relative h-full overflow-hidden w-full flex flex-col justify-center m-auto gap-10 max-w-[1420px] md:py-[120px]">

            <motion.div
                className="flex gap-8"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 25,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicateSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / (slides.length / 1)}%` }}>
                        <div className="flex  items-center justify-center h-full ">

                            <img className='' src={slide.icon} alt="" />
                        </div>
                    </div>
                ))}
            </motion.div>

            {
                qyt == "both" &&
                <motion.div
                    className="flex gap-8"
                    animate={{
                        x: ["-100%", "0"],
                        transition: {
                            ease: 'linear',
                            duration: 25,
                            repeat: Infinity,
                        }
                    }}
                >
                    {duplicateSlides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0" style={{ width: `${100 / (slides.length / 2)}%` }}>
                            <div className="flex items-center  justify-center h-full ">
                                {/* {slide.icon} */}
                                <img className='' src={slide.icon} alt="" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            }
        </div >
    )
}

export default LogoSlider