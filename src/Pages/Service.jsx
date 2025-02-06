import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import { service } from "../data/ServiceData";
import Heading from "../Component/custom_ui/Heading";
const Services = () => {
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <div className="flex flex-col items-center">

            <Heading title={"Our Services"} />
            <div className="mt-[160px] w-full m-auto flex flex-col justify-center md:max-w-[1420px]">
                <div className="grid md:grid-cols-3 grid-cols-1 m-auto justify-center place-items-center  ">
                    {service.map((item, i) => {
                        return (
                            <motion.div initial={{ display: "hidden", opacity: 0, transform: "translateY(4rem)", transition: "all 1s" }}
                                whileInView={{
                                    opacity: 1,
                                    transition: 'all 1s',
                                    transform: 'translateY(-4rem)',
                                }} key={i} className="group overflow-hidden w-full">

                                <div className="border-2 bg-white rounded-2xl overflow-hidden m-2 ">

                                    <div className="relative before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-custom-gradient before:opacity-0 before:group-hover:opacity-[0.2] before:transition-opacity before:duration-500 before:ease-in-out before:pointer-events-none ">

                                        <div className="relative w-full h-full bg-cover before:opacity-[0] before:absolute before:content-['_']  before:w-full before:h-full before:bg-[url('/fancy-box-bg.png')] before:group-hover:opacity-[0.5] before:transition-opacity before:duration-500 before:ease-in-out before:-z-1 before:pointer-events-none">

                                            <div className=" rounded-xl py-[24px] px-[32px] cursor-pointer">
                                                <motion.div
                                                    className="group-hover:animate-scaleBack w-[48px] h-[48px] mb-[30px]">
                                                    <img src={item.icon} alt="" />
                                                </motion.div>

                                                <div className="text-[24px] hover:text-secondary transition-all ease-in-out duration-500 mb-[15px]">{item.title}</div>

                                                <div className="flex flex-row items-end">

                                                    <div className="text-[16px] text-[#7b8391] leading-[1.5] font-[400px]">{item.description}</div>

                                                    <div
                                                        onClick={handleClick}
                                                        className="relative cursor-pointer p-[0.5rem] ml-9 bg-gradient-to-l from-[#ffffff3e] to-[#ffffff00] font-bold rounded-full text-center m-auto group"
                                                    >
                                                        <IoArrowForward className="h-full text-white group-hover:-rotate-[40deg] transition-all ease-in-out font-extrabold" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;