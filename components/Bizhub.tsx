import Image from "next/image"; 

const Bizhub = () => {
    return ( 
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
            {/* Left Side Content */}
            <div  className='w-full md:w-1/2'>
                <span className='text-purple-500 font-semibold'
                > JMO Core View
                </span>
                <h2  className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                > JMO Mission
                </h2>
                <p  className='text-gray-600 mb-8 md:w-4/5'
                > Our Mission is to become a global ecosystem advancing sustainable development, innovation, 
                and impact by connecting visionary leaders, fostering collaborative solutions and creating
                opportunities that drive social economic and technological transformation worldwide.
                </p>
                {/* <a  data-aos="zoom-in" data-aos-delay="50" href="/student-core" className='text-purple-900 hover:text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
                > Learn more about JMO  
                </a> */}
            </div>

            {/* Right Side Content */}            
            <div 
                className='w-full md:w-1/2 relative'
            >
                <div className='relative w-full h-100 md:h[500px]'
                > <Image 
                    src="/bizhub.png"
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
 
export default Bizhub;