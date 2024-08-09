import React from 'react'

function NavBar() {
    return (
        // < !--Navbar -- >
        <nav className="navbar lg:hidden bg-base-300">
            {/* <!-- Menu for mobile --> */}
            <div className="w-full flex justify-between md:hidden">
                {/* <!-- Logo --> */}
                <div className='flex justify-center gap-2 items-center'>
                    <img alt="Logo" src="/riddle-master.png" className="w-20" />
                    <h1 className="text-2xl font-black text-neutral">Riddle Master</h1>
                </div>


                <div className="dropdown dropdown-end">
                    <button className="btn bg-neutral btn-ghost">
                        <i className="fa-solid text-base-100 fa-bars text-lg">☰</i>
                    </button>

                    <ul tabIndex="0" className="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
                        <li><a className='text-lg font-bold'>Score: </a></li>
                        <li><a className='text-lg font-bold'>Hints left: </a></li>
                        <button className="btn btn-neutral flex items-center justify-center">
                            <h1 className='text-base'>Use a hint</h1>
                        </button>
                    </ul>
                </div>
            </div>

            {/* <!-- Menu for desktop --> */}
            <div className="w-full hidden md:grid grid-cols-5 gap-2">
                {/* <!-- Left menu --> */}
                <ul className="col-span-2 menu md:menu-horizontal justify-center hidden">
                    <li><a className='text-base font-bold'>Score: </a></li>
                    <li><a className='text-base font-bold'>Hints left: </a></li>
                </ul>

                {/* <!-- Centered logo --> */}
                <div className="flex flex-col justify-center items-center">
                    <img alt="Logo" src="/riddle-master.png" className="w-20" />
                    <h1 className="text-2xl font-black text-neutral text-center whitespace-nowrap">
                        Riddle Master
                    </h1>
                </div>
                {/* <!-- Logo --> */}


                {/* <!-- Right menu --> */}
                <ul className="col-span-2 menu md:menu-horizontal justify-center gap-4 hidden">
                    <button className="btn btn-neutral flex items-center justify-center">
                        <h1 className='text-base'>Use a hint</h1>
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar