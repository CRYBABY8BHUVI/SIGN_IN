import React from 'react'

const Topic = () => {
    return (
        <div className='w-3/7 h-screen bg-purple-500 p-5 font-mono text-black flex flex-col'>
            <div className='flex text-2xl font-semibold'>😵‍💫 Idea.exe</div>

            <div className='flex flex-1 items-center justify-center'>
                <div className='flex w-full max-w-md flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-4xl font-bold'>Sign In</div>
                        <div className='text-white'>Please login to your account</div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full rounded-xl border-3 border-black px-5 py-2 transition focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-grey"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full rounded-xl border-3 border-black px-5 py-2 transition focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-grey"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="h-5 w-5 cursor-pointer rounded-2xl accent-blue-500"
                        />
                        <label className="cursor-pointer select-none font-bold">
                            Keep me Logged In
                        </label>
                    </div>

                    <button className="w-full rounded-xl bg-[#DDA0DD] px-4 py-2 font-bold text-white transition duration-300 hover:bg-purple-600">
                        Sign In
                    </button>

                    <div className='flex items-center gap-4'>
                        <div className='flex-1 border-b-2 border-gray-300'></div>
                        <div>or</div>
                        <div className='flex-1 border-b-2 border-gray-300'></div>
                    </div>

                    <button className="w-full rounded-xl bg-[#DDA0DD] px-4 py-2 font-bold text-white transition duration-300 hover:bg-purple-600">
                        Sign In With Google
                    </button>

                    <div>
                        New User? <a href="#" className='hover:underline'>Create One</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topic
