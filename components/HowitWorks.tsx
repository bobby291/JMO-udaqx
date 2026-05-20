import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Identify Industry Problems",
    description:
      "JMO studies challenges in marketing, media, publishing, and education to understand what businesses and communities truly need.",
  },
  {
    number: "02",
    title: "Build Smart Digital Platforms",
    description:
      "We design innovative platforms and digital systems that simplify workflows, improve communication, and create growth opportunities.",
  },
  {
    number: "03",
    title: "Scale Through Innovation",
    description:
      "Our solutions help brands, creators, and learners scale faster using modern technology, strategic media, and digital transformation.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-950 to-black text-white py-24 px-6 md:px-16" id="works">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-5">
            How It Works
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            How JMO Builds Innovative Solutions
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            JMO is a growing startup focused on building cutting-edge
            solutions in Marketing, Media & Editorial Publishing,
            and Academy systems by creating platforms that solve
            modern digital challenges.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="min-w-[60px] h-[60px] rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-xl font-bold shadow-lg">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/30 blur-3xl rounded-full"></div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/30 blur-3xl rounded-full"></div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                alt="Team collaboration"
                width={700}
                height={700}
                className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:translate-y-[-5px] transition duration-300">
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">10+</h3>
            <p className="text-gray-400">Creative Projects</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:translate-y-[-5px] transition duration-300">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">3+</h3>
            <p className="text-gray-400">Digital Platforms</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:translate-y-[-5px] transition duration-300">
            <h3 className="text-4xl font-bold text-pink-400 mb-2">100%</h3>
            <p className="text-gray-400">Innovation Driven</p>
          </div>
        </div>
      </div>
    </section>
  );
}