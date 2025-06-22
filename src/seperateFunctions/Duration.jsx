import React from 'react'

const Duration = ({ value }) => {

  let movieDuration = value;
  let totalMinutes = parseInt(movieDuration, 10);
//   console.log(totalMinutes);

  let hours = Math.floor(totalMinutes/60);
  // console.log(hours);

  let minutes = totalMinutes%60;
  // console.log(minutes);

  return (
    <div className="flex flex-row gap-2">
        <p className="font-dm-sans text-[#FFFFFF] mt-2 text-2xl font-semibold">{hours != 0 ? `${hours} hr` : ""}</p>
        <p className="font-dm-sans text-[#FFFFFF] mt-2 text-2xl font-semibold">{`${minutes} min`}</p>
    </div>
  )
}

export default Duration