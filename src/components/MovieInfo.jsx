import React from 'react'

const MovieInfo = ({label, value}) => {
  return (
    <div className="mt-4">
      {/* <p className="text-[#A8B5DB] font-normal text-lg">{label}</p>
      <p className="text-[#FFFFFF] font-bold text-lg mt-2">{value}</p> */}
      <p className="text-[#A8B5DB] font-normal text-2xl mt-2">{label}</p>
      <p className="text-[#FFFFFF] font-dm-sans font-semibold text-2xl mt-2">{value}</p>
    </div>
  )
}

export default MovieInfo