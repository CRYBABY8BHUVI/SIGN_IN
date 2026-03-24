import React from 'react'
const right_side = ({ img }) => {
    return (
        <div className='bg-center h-full justify-content bg-cover transition-all duration-1000'>
            <div>
                <img src={img} alt="image" className="ml-1.5 mt-2 w-215 h-170 rounded-2xl" />
            </div>
        </div>
    )
}

export default right_side