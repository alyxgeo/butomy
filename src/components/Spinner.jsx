import React from 'react'


const Spinner = () => {
    
    return (
        <div className="absolute bg-slate-200/20 inset-0 backdrop-blur-sm flex items-center justify-center">
            <div>
                <h3 className="text-2xl">Loading...!</h3>
            </div>
        </div>
    )
}

export default Spinner