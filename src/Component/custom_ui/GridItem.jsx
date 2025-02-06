import { GlowingEffect } from "../ui/glowing-effect";

const GridItem = ({ area, icon, title, description }) => {
    return (
        <li className={`max-w-[] min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2.5xl bg-white border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                                {title}
                            </h3>
                            <h2 className="md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default GridItem;
