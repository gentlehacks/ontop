"use client"

import Image from "next/image"

const Footer = ({ showDevModal, setShowDevModal }: { showDevModal: boolean; setShowDevModal: (show: boolean) => void }) => {

    return (
        <footer className="w-full flex flex-col lg:flex-row items-center justify-center py-[6rem] bg-yellow-600">
            <p className="text-lg text-gray-900">&copy; {new Date().getFullYear()} rahama-computer  all right reserved.</p>
            <div className="mt-[4rem] lg:mt:0 ml-4 flex items-center gap-2 relative">
                <Image
                    alt="gentlemandev"
                    src="/gentlemandev.WEBP"
                    width={100}
                    height={100}
                    priority={true}
                    className="w-[2rem]"
                />
                <p className="text-lg text-gray-900 font-medium">
                    Built by gentlemandev
                </p>
                <button
                    onClick={() => setShowDevModal(true)}
                    title="Visit gentlemandev" className="bg-gray-900 text-yellow-500 px-4 py-1 rounded-t-lg rounded-r-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer absolute top-[-2rem] left-0 text-center">
                    <p className="text-sm">See developer!</p>
                </button>
            </div>
        </footer>
    )
}

export default Footer