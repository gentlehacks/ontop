"use client"

import AppLoader from "./components/AppLoader"



const Loading = () => {
    return (
        <main className="relative flex h-screen w-full items-center justify-center overflow-hidden">
                <AppLoader />
        </main>
    )
}

export default Loading