import React from 'react'
import '../styles.css'

function SideBar() {
    return (
        <div className='hidden lg:flex'>
            <aside id='sideBar' className="flex flex-col items-center h-screen sticky top-0 overflow-y-auto space-y-4 w-96 py-6 px-4 bg-base-200">

                <img id='sideBarImg' alt="Profile" src="/riddle-master.svg" className="mt-10 mb-3 w-32 rounded-full" />
                <div id='sideBarSection'>
                    <h1 className="font-black text-base-100 text-3xl">Riddle Master</h1>

                    <ul className="menu menu-lg w-full">
                        <li>
                            <h1 className='text-xl text-base-100 font-bold'>Score: </h1>
                        </li>
                        <li className='mb-7'>
                            <h1 className='text-xl text-base-100 font-bold'>Hints Left: </h1>
                        </li>

                        <button className="btn btn-neutral flex items-center justify-center">
                            <h1 className='text-xl text-base-100'>Use a hint</h1>
                        </button>

                    </ul>
                </div>

            </aside>
            <aside id='mainPage' className='flex flex-col items-center h-screen sticky top-0 overflow-y-auto space-y-4 w-full py-6 px-4 bg-base-200'></aside>
        </div>
    )
}

export default SideBar