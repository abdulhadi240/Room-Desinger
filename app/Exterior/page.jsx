import React from 'react'
import {HouseType} from 'types/HouseTypes'
import {DesignTypes} from 'components/DesignTypes'
const page = () => {
  return (
    <>
    <div className="container p-8 mx-auto mt-32">
    <h1 className="mb-4 text-2xl font-semibold">Image List</h1>
    <DesignTypes items={HouseType} />
  </div>
  </>
  )
}

export default page