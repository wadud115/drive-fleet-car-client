
import { ShieldCheck, Clock, Car, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Car size={30} />,
      title: "Wide Range of Cars",
      description:
        "Choose from a wide range of comfortable and reliable cars for every type of journey.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Safe & Reliable",
      description:
        "We provide well-maintained and reliable vehicles to make your journey safe and comfortable.",
    },
    {
      icon: <Clock size={30} />,
      title: "Flexible Booking",
      description:
        "Book your favorite car easily with flexible rental options that fit your schedule.",
    },
    {
      icon: <Headphones size={30} />,
      title: "24/7 Support",
      description:
        "Our support team is always ready to help you whenever you need assistance.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Why Choose Us
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need for a Better Journey
          </h2>

          <p className="mt-4 text-gray-600">
            We make car rental simple, affordable and convenient for
            every journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

