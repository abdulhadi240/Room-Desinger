import React from 'react'
import {RoomThemeType} from 'types/RoomTypes'
import {ThemeTypes} from 'components/ThemeType'
const page = () => {
  return (
    <>
    <div className="container p-8 mx-auto mt-32">
    <h1 className="mb-4 text-2xl font-semibold">Image List</h1>
    <ThemeTypes items={RoomThemeType} />
  </div>
  </>
  )
}

export default page