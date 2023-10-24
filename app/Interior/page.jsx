'use client'
import React from 'react'
import {RoomType} from 'types/RoomTypes'
import {DesignTypes} from 'components/DesignTypes'
import useNameStore from '@/utils/State';
const page = () => {
    const { name1 } = useNameStore();

  return (
    <>
    {name1[0]}
    <div className="container p-8 mx-auto mt-32">
    <h1 className="mb-4 text-2xl font-semibold">Image List</h1>
    <DesignTypes items={RoomType} />
  </div>
  </>
  )
}

export default page