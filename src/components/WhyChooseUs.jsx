import marketing from "../assets/icons/circle-dollar-sign.svg";
import design from "../assets/icons/paintbrush-2.svg";
import roi from "../assets/icons/home.svg";
import line from "../assets/shapes/line.svg";

export const WhyChooseUs = () => {
    return (
        <section id="services" className="py-16 text-center max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-sky-600">Why Choose Us?</h2>
            <img src={line} alt="" className="m-auto size-[15%]"/>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                    <div className="p-6 shadow rounded-lg bg-white">
                        <div className="flex justify-center items-center my-5">
                            <img src={roi} alt="img" className="size-12 p-2 rounded-full bg-sky-100" />
                        </div>
                        <h3 className="text-2xl mb-2 text-sky-600 font-semibold">Potential ROI</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id fugiat eligendi tempore consequuntur a.
                        </p>
                    </div>
                    <div className="p-6 shadow rounded-lg bg-white">
                        <div className="flex justify-center items-center my-5">
                            <img src={design} alt="img" className="size-12 p-2 rounded-full bg-sky-100" />
                        </div>
                        <h3 className="text-2xl mb-2 text-sky-600 font-semibold">Design</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id fugiat eligendi tempore consequuntur a.
                        </p>
                    </div>
                    <div className="p-6 shadow rounded-lg bg-white">
                        <div className="flex justify-center items-center my-5">
                            <img src={marketing} alt="img" className="size-12 p-2 rounded-full bg-sky-100" />
                        </div>
                        <h3 className="text-2xl mb-2 text-sky-600 font-semibold">Marketing</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id fugiat eligendi tempore consequuntur a.
                        </p>
                    </div>
            </div>
        </section>
    );
};

