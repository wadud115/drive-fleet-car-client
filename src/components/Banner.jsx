
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-16 sm:py-20 lg:min-h-[600px] lg:px-8">

        <div className="w-full max-w-2xl">


          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600 sm:text-base">
            Your Journey, Our Cars
          </p>


          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Find Your Perfect Car
            <span className="block text-blue-600">
              For Every Journey
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Rent reliable and comfortable cars at affordable prices.
            Choose from a wide range of vehicles and enjoy a smooth,
            safe and hassle-free journey.
          </p>

          
          <div className="mt-8">
            <Link
              href="/cars"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Explore Cars
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

