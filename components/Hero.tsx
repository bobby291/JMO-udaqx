const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        .font-berkshire {
          font-family: 'Berkshire Swash', cursive;
        }
      `}</style>

      <section
        className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-center text-sm text-white h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/heroImage.jpg')",
        }}
      >
        <h1 className="font-berkshire text-[45px]/[52px] md:text-6xl/[65px] mt-6 max-w-4xl">
          Empowering creators to build on their own terms.
        </h1>

        <p className="text-base mt-2 max-w-xl">
          JMO BizHub is a dynamic ecosystem to connect individuals businesses
          and professionals through a unified platform for digital utilities,
          products and expert services.
        </p>

        <p className="text-base mt-3 md:mt-7 max-w-xl">
          Secure your spot early and unlock our limited-time founding rate.
        </p>

        <form className="flex items-center mt-8 max-w-lg h-16 w-full rounded-full border border-slate-50">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full h-full outline-none bg-transparent pl-6 pr-2 text-white placeholder:text-slate-300 rounded-full"
          />

          <button className="bg-white text-slate-800 hover:bg-gray-300 px-8 md:px-10 h-12 mr-2 rounded-full font-medium transition">
            Early access
          </button>
        </form>
      </section>
    </>
  );
};

export default Hero;