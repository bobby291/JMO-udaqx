import Image from "next/image";

const Academy = () => {
    return ( 
        <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'
    >
        <div className='flex flex-col md:flex-row items-center gap-12'>
            {/* Left Side Content */}
            <div 
                className='w-full md:w-1/2'
            >
                 {/* 
                 <span
                  data-aos="zoom-in" data-aos-delay="50"  className='text-purple-500 font-semibold'
                > CYCLALX CORE VIEW
                </span> */}
                <h2  className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                > JMO Vision
                </h2>
                <p  className='text-gray-600 mb-8 md:w-4/5'
                > To empower enterprenuers, professionals, and institutions through strategic media, 
                business development, and transformational education, while providing access to cutting-edge
                technology, mentorship, and networks that enables growth, creativity, and measurable  impact
                in communities and industries around the world.
                  
                </p>
                {/* <a  href="/student-core" className='text-purple-900 hover:text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
                > Learn more about monitoring  
                </a> */}
                
            </div>

            {/* Right Side Content */}            
            <div 
                className='w-full md:w-1/2 relative'
            >
                <div className='relative w-full h-100 md:h[500px]'
                > <Image 
                    src="/academy.png"
                    alt="Academy Image"
                    fill
                    className="object-contain"
                    priority 
                    />
                </div>
            </div>
        </div>
    </section>
                
     );
}
 
export default Academy;