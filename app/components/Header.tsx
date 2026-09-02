import Link from "next/link"

const Header = () => {

    return (
        <div className="fixed z-100 top-4 left-0 w-full mx-auto flex items-center justify-center px-6 md:px-8">
            <ul className="w-[80%] md:w-[70%] lg:w-[60%] px-8 py-3 md:py-4 rounded-full bg-yellow-300/10 backdrop-filter backdrop-blur-sm gap-6 md:gap-8 border-[1px] border-yellow-700 flex items-center justify-center">
                <Link href="#" className="hover:text-gray-400 font-medium text-md hover:mr-2 ">Home</Link>
                <Link href="#about" className="hover:text-gray-400 font-medium text-md hover:mr-2">About</Link>
                <Link href="#skills" className="hover:text-gray-400 font-medium text-md hover:mr-2">Skills</Link>
                <Link href="#projects" className="hover:text-gray-400 font-medium text-md hover:mr-2">Projects</Link>
            </ul>
        </div>
    )
}

export default Header