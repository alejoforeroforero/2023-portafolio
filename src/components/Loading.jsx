import React from 'react'
import LoadingIcons from 'react-loading-icons'

const Loading = () => {
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center min-h-[500px]'>
        <LoadingIcons.ThreeDots stroke="#888" fill="666"/>
    </div>
  )
}

export default Loading