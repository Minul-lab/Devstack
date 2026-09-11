import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="px-6 py-8 lg:py-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left column — text content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
            <span className="block text-slate-900">Build Your Ideal</span>
            <span className="block bg-linear-to-r from-[#FF5722] to-[#3c02a0] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 rounded-lg font-semibold text-white shadow-md bg-linear-to-r from-[#FF5722] to-[#3c02a0] ">
              Explore Technologies
            </button>

            <button className="px-6 py-3 rounded-lg font-semibold text-[#FF5722] bg-white  border-[#FF5722] border-2 ">
              Learn More
            </button>
          </div>
        </div>

        {/* Right column — image */}
        <div className="lg:-shrink-0 flex justify-center lg:justify-end lg:ml-auto">
          <img
            src={banner}
            alt="Stack illustration"
            className="w-full max-w-md lg:max-w-xl xl:max-w-2xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
