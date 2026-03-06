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
          JMO is a dynamic ecosystem....
        </h1>

        <p className="text-base font-poppins uppercase font-medium mt-2 max-w-xl">
            ....to connect individuals businesses
          and professionals through a unified platform for digital utilities,
          products and expert services.
        </p>

      </section>
    </>
  );
};

export default Hero;