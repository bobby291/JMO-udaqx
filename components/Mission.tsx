import Image from "next/image";

export default function Mission() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Image Section */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full"></div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
              alt="Mission illustration"
              width={700}
              height={700}
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-5">
            Our Mission
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Delivering Smart Solutions That Create Real Impact
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Our mission is to build modern digital solutions that solve
            real-world problems while maintaining simplicity, speed,
            and exceptional user experience. We focus on creating
            technology that empowers businesses, students, and communities.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Through innovation and continuous improvement, we aim to
            deliver scalable products that inspire growth, improve
            productivity, and open new opportunities in the digital world.
          </p>

          {/* Mission Cards */}
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">
                User Experience
              </h3>
              <p className="text-gray-400 text-sm">
                Designing intuitive and engaging products that users
                enjoy interacting with every day.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Scalable Innovation
              </h3>
              <p className="text-gray-400 text-sm">
                Developing future-ready systems that adapt and grow
                with evolving digital needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}