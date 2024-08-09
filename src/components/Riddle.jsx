import React from 'react'

function Riddle() {
    return (
        <div id='riddleContainer' className='flex flex-col justify-center gap-y-20 items-center w-full h-full my-10 text-center'>
            <div id='riddleBox' className='w-3/4'>
                <div className="card bg-base-100 w-full shadow-xl m-auto">
                    <div className="card-body">
                        <h2 className="card-title font-bold">Riddle me this!!</h2>
                        <p>I'm not a blanket, yet I cover the ground; a crystal from heaven that doesn't make a sound. What am I?</p>
                    </div>
                </div>

            </div>
            <div id='answerBox' className='w-3/4'>
                <h1 className='text-lg font-semibold mb-5'>What is your answer?</h1>
                <input id='answerInput' type="text" placeholder="Type here" className="input input-bordered w-1/2 shadow-xl mb-5 hover:shadow-xl focus:shadow-xl active:shadow-xl" />
            </div>
        </div>
    )
}

export default Riddle