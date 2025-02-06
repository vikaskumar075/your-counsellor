import { gridItems } from "../data/Courses";
import GridItem from "./custom_ui/GridItem";
import Heading from "./custom_ui/Heading";

const Courses = () => {
    return (
        <div className="flex flex-col justify-center items-center md:gap-20">
            <Heading title={"Courses"} />
            <ul className="grid grid-cols-1 max-w-[1420px] grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 m-auto">
                {gridItems.map((item, index) => (
                    <GridItem
                        key={index}
                        area={item.area}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Courses