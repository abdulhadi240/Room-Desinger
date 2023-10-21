'use client'
import React from 'react'
import ReactCompareImage from 'react-compare-image';
const Compare = () => {
  return (
    <div className=''>
        <ReactCompareImage handleSize={45} aspectRatio leftImage="https://www.redesigner.io/_next/image?url=%2Finput.jpg&w=384&q=75" rightImage="https://www.redesigner.io/_next/image?url=%2Finput-predicted.jpg&w=384&q=75" />
    </div>
  )
}

export default Compare