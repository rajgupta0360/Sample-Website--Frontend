import rectangle from "../assets/images/Rectangle.svg";

export default function Features() {

    return (
        <section className="py-0 mt-5 mb-0">
            <div className="flex justify-center items-center h-full w-full bg-center bg-no-repeat bg-contain md:bg-cover min-h-100"style={{ backgroundImage: `url(${rectangle})` }}>
                <div className="flex flex-col items-center justify-center p-4">
                    <h2 className="text-center text-white text-3xl px-50 font-bold">
                        Learn more about listing process, as well as our additional staging and design work
                    </h2>
                    <button className="mt-10 px-18 py-2.5 bg-white text-blue-500 font-semibold rounded-md hover:bg-gray-100">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </section>
    );
}