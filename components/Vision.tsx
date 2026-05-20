import Image from "next/image";

export default function Vision() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-16" id="vision">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Image Section */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/30 blur-3xl rounded-full"></div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
              alt="Vision illustration"
              width={700}
              height={700}
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
            Our Vision
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Empowering Innovation Through Technology
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Our vision is to become a globally recognized digital brand
            that transforms ideas into impactful technological solutions.
            We aim to create products that inspire growth, innovation,
            and meaningful connections across industries.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            By combining creativity with modern technology, we envision a
            future where businesses and individuals can access smart,
            scalable, and user-friendly digital experiences without limits.
          </p>

          {/* Feature Cards */}
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Innovation
              </h3>
              <p className="text-gray-400 text-sm">
                Creating future-focused digital solutions with creativity
                and modern technologies.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">
                Growth
              </h3>
              <p className="text-gray-400 text-sm">
                Helping businesses and communities scale through impactful
                technology and smart strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}