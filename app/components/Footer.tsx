"use client"

const Footer = () => {

    return (
        <footer className="absolute bottom-0 left-0 w-full flex items-center justify-center py-8 bg-yellow-600">
           <p className="text-lg text-gray-900">&copy; {new Date().getFullYear()} rahama-computer  all right reserved.</p>
        </footer>
    )
}

export default Footer