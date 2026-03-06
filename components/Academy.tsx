import Image from "next/image";

const Academy = () => {
    return ( 
        <section className="w-full bg-[#f3f3f6]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE - IMAGE */}
                <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]"> 
                     <Image 
                        src="/academy.png"
                        alt="Academy Image"
                        fill
                        className="object-contain"
                        priority 
                    />
                
                </div>

                {/* RIGHT SIDE - TEXT */}
                <div className="space-y-6"> 
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        JMO Academy Hub
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        JMO Academy is a dynamic platform designed to connect passsioante 
                        teachers with eager learners in a structure, supportive, and growth-driven enviroment,
                    </p>
                </div>
            </div>
        </section>
     );
}
 
export default Academy;