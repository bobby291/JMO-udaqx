import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-950 to-black text-white py-20 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-purple-600/20 text-purple-400 text-sm font-medium mb-5">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Building Modern Digital Experiences for the Future
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We create innovative digital products that combine beautiful
            design, modern technology, and seamless user experiences.
            Our mission is to help businesses and individuals grow through
            high-performance web applications and creative solutions.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            From frontend interfaces to scalable systems, our team focuses on
            delivering clean, responsive, and user-centered solutions that
            stand out in today’s competitive digital landscape.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-purple-400">5+</h3>
              <p className="text-sm text-gray-400 mt-1">Years Experience</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-cyan-400">120+</h3>
              <p className="text-sm text-gray-400 mt-1">Projects Delivered</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold text-pink-400">98%</h3>
              <p className="text-sm text-gray-400 mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
              alt="Team working together"
              width={700}
              height={700}
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}