
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Car",
      description:
        "Explore our collection and choose the car that best fits your needs.",
    },
    {
      number: "02",
      title: "Book Your Car",
      description:
        "Select your preferred date and complete your booking easily.",
    },
    {
      number: "03",
      title: "Enjoy Your Journey",
      description:
        "Pick up your car and enjoy a comfortable and hassle-free journey.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

   
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            How It Works
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Rent a Car in 3 Simple Steps
          </h2>

          <p className="mt-4 text-gray-600">
            Getting your perfect rental car has never been easier.
          </p>
        </div>

       
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-white p-8 text-center shadow-sm"
            >
             
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

