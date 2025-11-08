import React from 'react'

const LikesAndCommentsComp = () => {
  return (
    <div className="flex justify-between text-xs border-t border-gray-100 px-5 py-2">
              <div className="flex space-x-4 text-gray-700">
                <span>Comments: <span className="text-gray-400">30</span></span>
                <span>Views: <span className="text-gray-400">60k</span></span>
              </div>
              <div className="text-gray-700">
                Likes: <span className="text-gray-400">120k</span>
              </div>
            </div>
    
  )
}

export default LikesAndCommentsComp