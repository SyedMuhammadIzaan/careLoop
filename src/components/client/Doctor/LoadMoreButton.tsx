import React from 'react'
import type { LoadMoreButtonInterface } from '../../../interface/LoadMoreButtonInterface'


const LoadMoreButton:React.FC<LoadMoreButtonInterface> = ({onClick}) => {
    return (
        <div className="flex justify-center pb-10">
            <button
                onClick={onClick}
                className="px-6 py-2 bg-blue-600 text-white rounded"
            >
                Load More
            </button>
        </div>
    )
}

export default LoadMoreButton