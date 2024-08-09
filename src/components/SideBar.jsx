import React from 'react'

function SideBar() {
    return (
        <div className='hidden lg:flex'>
            <aside className="flex flex-col items-center h-screen sticky top-0 overflow-y-auto space-y-4 w-72 py-6 px-4 bg-base-200">

                <img alt="Profile" src="/riddle-master.svg" className="mt-10 mb-3 w-32 rounded-full" />

                <h1 className="font-black text-neutral text-3xl">Riddle Master</h1>

                <ul className="menu menu-lg w-full">
                    <li>
                        <h1 className='text-xl font-bold'>Score: </h1>
                    </li>
                    <li className='mb-7'>
                        <h1 className='text-xl font-bold'>Hints Left: </h1>
                    </li>

                    <button className="btn btn-neutral flex items-center justify-center">
                        <h1 className='text-xl'>Use a hint</h1>
                    </button>

                </ul>
            </aside>
        </div>
    )
}

export default SideBar