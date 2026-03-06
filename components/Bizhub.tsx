import Image from "next/image"; 

const Bizhub = () => {
    return ( 
        <section className="w-full bg-[#f3f3f6]">
            <div className="max-w-7x1 mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        JMO Bizhub
                    </h1>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        JMO BizHub is a dynamic ecosystem to connect Individuals, SMEs, Businesses 
                        and Professionals, through a unifiled platform for digital utilities, products 
                        and expert services and marketing,
                    </p>
                </div>

                {/* Right Side */}
                <div className="relative w-full h-100 md:h[500px]">
                    <Image 
                        src="/bizhub.png" 
                        alt="Bizhub Product image" 
                        fill 
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
     );
}
 
export default Bizhub;