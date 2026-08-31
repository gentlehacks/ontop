import Link from "next/link"

const Header = () => {

    return (
        <div className="fixed z-100 top-4 left-0 w-full mx-auto flex items-center justify-center">
            <ul className="w-[80%] md:w-[70%] px-6 py-3 md:py-4 rounded-full backdrop-fiklter backdrop-blur-sm gap-6 md:gap-8 border-1 border-yellow-600 flex items-center justify-center">
                <Link href="#" className="hover:text-gray-400 font-medium text-md hover:mr-2 ">Home</Link>
                <Link href="#about" className="hover:text-gray-400 font-medium text-md hover:mr-2">About</Link>
                <Link href="#skills" className="hover:text-gray-400 font-medium text-md hover:mr-2">Skills</Link>
                <Link href="#projects" className="hover:text-gray-400 font-medium text-md hover:mr-2">Projects</Link>
            </ul>
        </div>
    )
}

export default Header