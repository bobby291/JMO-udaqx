import Image from "next/image";
import { title } from "process";

const Categories = () => {
    const cards = [
        {
            title: 'JMO BIZHUB',
            description: 'JMO BizHub is a dynamic ecosystem to connect individuals Businesses andprofessionals through a unfufiled platform for digital utilities, products and expert services',
            image:  '/image/business.jpg', // can replace with any image
        },
        {
            title: 'JMO Digital',
            description: 'JMO digital is accelerating sustainable building to ehance health, productivity, and busieness by connecting people to creators and creating an opportunities for people in digital aspect ...',
            image: '/image/digitals.jpg', // can replace with any image
        },
        {
            title: 'JMO Academy',
            description: 'JMO Academy is a dynamic platform designed to connect passsioante teachers with eager learners in a structure, supportive, and growth-driven enviroment',
            image: '/image/education.jpg', // can replace with any image
        },
        {
            title: 'JMO Food and Agro Hubs',
            description: 'JMO Food source is process high-quality indigenous product. Using solar powered dehydration technology, we extend shelf life, preserve nutrient and reduce food waste',
            image: '/image/food.jpg', // can replace with any image
        },
        {
            title: 'JMO Publishing',
            description: 'JMO Publishing we help ideas become powerful polished books. Wether you are emerging writter researcher, thoughtful leader, or established author, we provide the professional support you need to transform your manuscript into a high-quality publication ready for readers.',
            image: '/image/publishing.webp', // can replace with any image
        },
        {
            title: 'JMO Climate Action',
            description: 'JMO Climate and ECO is comitted to building enviromentally responsible communitties through education, advocacy, and action. We believe that climate responsibility is not optional, it is essentials development and the wellbeing of present and future generations.',
            image: '/image/climate.jpg', // can replace with any image
        },
        {
            title: 'JMO Media-Public',
            description: 'JMO Media is a strategy communication and brand Marketing agency committed to helping business grow with clarity, structure and measure impact.',
            image: '/image/media.jpg', // can replace with any image
        },
    
    ]
    return (
        <section className="py-6 bg-gray-200 text-gray-900" id="categories">
            <div className="container mx-auto px-4">
                {/* Two colum section above cards */}
                <div className="flex flex-col md:flex-row justify-center items-center mb-8 text-center">
                    {/* Left Colum - Commitments */}
                    <div className="flex-1">
                    <h3 className="text-3xl font-bold sm:text-xl sm:text-center sm:py-4 uppercase text-gray-900 mb-2 mr-10">Our Categories</h3>
                    <h2 className="text-2xl font-bold mb-4">
                        A holistics approach to address creators, equity, health, and commercialization
                    </h2>
                    </div>

                    {/* Right Colum - Additional text and button */}
                    <div className="md:w-1/3 mb-6 md:mb-0 text-center">
                    <p className="text-gray-900 font-bold mb-4">
                        Working to protect the climate and enviroment, advance a more equitable society, and promote the wellbeing of the people and beyond.
                    </p>
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
                        View our Categories and JMO Action Plan
                    </button>
                    </div>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-2 gap-y-12 gap-x-0.5 justify-items-center">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white text-black rounded-lg overflow-hidden shadow-lg relative w-full h-[550px] max-w-[550px]">
                            <Image
                             src={card.image}
                             alt={card.title}
                             layout="responsive" // Fills the parent container
                             width={450}
                             height={450}
                             objectFit="cover" // Ensure image cover the area
                             className="absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                                <h2 className="text-xl text-white font-bold mb-2">{card.title}</h2>
                                <p className="text-white font-bold text-base line-clamp-3">{card.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>

     );
}

export default Categories;