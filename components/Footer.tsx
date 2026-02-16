import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>
            <div className='bg-gray-100 pt-20 px-4'>
                <footer className="bg-white w-full max-w-[1350px] mx-auto text-black pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
                       
                        <div className="lg:col-span-3 space-y-6">
                             {/* Logo */}
                <Link href={"/"}
                    className="flex item-center space-x-2">
                    <Image
                        src="/Logo.png"
                        alt="JMO Logo"
                        width={70}
                        height={140}
                        className="object-contain" />
                </Link>
                            <p className="text-sm/6 text-neutral-600 max-w-96">JMO BizHub helps you build faster by transforming your design vision into fully functional, production-ready UI components.</p>
                            <div className="flex gap-5 md:gap-6 order-1 md:order-2">
                                {/* Facebook */}
                                <a href="https://www.facebook.com/JESSICAMEDIAOPINIONS?mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-700">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z" />
                                    </svg>
                                </a>
                
                                {/* Linkedin */}
                                <a href="#" className="text-neutral-600 hover:text-neutral-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                                    </svg>
                                </a>
                               
                                {/* Instagram */}
                                <a href="https://www.instagram.com/jessicamediaopinions?igsh=MW0zMjZ3YWFoY21rdg==" className="text-neutral-600 hover:text-neutral-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
                            {/* Products */}
                            <div>
                                <h3 className="font-medium text-sm mb-4">Products</h3>
                                <ul className="space-y-3 text-sm text-neutral-800">
                                    <li><a href="#" className="hover:text-neutral-700">Components</a></li>
                                    <li><a href="#" className="hover:text-neutral-700">Templates</a></li>
                                    <li><a href="#" className="hover:text-neutral-700">Icons</a></li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h3 className="font-medium text-sm mb-4">Resources</h3>
                                <ul className="space-y-3 text-sm text-neutral-800">
                                    <li><a href="#" className="hover:text-neutral-700">JMO Academy</a></li>
                                    <li><a href="#" className="hover:text-neutral-700">Templates</a></li>
                                    <li><a href="#" className="hover:text-neutral-700">Components</a></li>
                                    <li><a href="#" className="hover:text-neutral-700">Blogs</a></li>
                                    <li><a href="#" className="hover:text-neutral-700">Store</a></li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div className="col-span-2 md:col-span-1">
                                <h3 className="font-medium text-sm mb-4">Company</h3>
                                <ul className="space-y-3 text-sm text-neutral-800">
                                    <li><a href="#" className="hover:text-neutral-700">About</a></li>
                                    <li><a href="#" className="hover:text-neutral-700">Vision</a></li>
                                    <li className="flex items-center gap-2">
                                        <a href="#" className="hover:text-neutral-700">Careers</a>
                                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-50 border border-neutral-400 text-neutral-700">HIRING</span>
                                    </li>
                                    <li><a href="#" className="hover:text-neutral-700">Privacy policy</a></li>
                                    <li><a href="#" className="hover:text-neutral-700">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-300 flex justify-between items-center">
                        <p className="text-neutral-600 text-sm">© 2025 JMO BizHub</p>
                        <p className='text-sm text-neutral-600'>All right reserved.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-slate-100 rounded-full blur-[100px] pointer-events-none"/>
                        <h1 className=" text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] [-webkit-text-stroke:1px_#D4D4D4] mt-6" >
                            JMO
                        </h1>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;