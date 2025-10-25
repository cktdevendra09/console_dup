import TopicCardUi from '@/app/(web)/components/card/TopicCardUi'
import React from 'react'

const page = () => {
  return (
    <div className="">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
            <TopicCardUi />
            <TopicCardUi />
            <TopicCardUi />
        </div>
      </div>
    </div>
  )
}

export default page