import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Nav";

const NotFound = () => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col items-center justify-center flex-grow space-y-6 text-center px-4 mb-4">
                <Image 
                    src="/assets/404.jpg"
                    alt="404"   
                    width={1920}
                    height={1080}
                    className="h-[40vh] w-auto object-cover bg-blend-screen"
                />
                
                <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
                <p className="text-xl text-gray-700 max-w-md">
                    Oops! The page you&apos;re looking for seems to have gotten lost in the digital maze.
                </p>
                <Link 
                    href="/" 
                    className="bg-blue-leviathan hover:bg-red_republic text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
 
export default NotFound;